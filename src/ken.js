// Ken
// -----------------
// 
// A Visual Knowledge Browser

var Ken = {};

// Colors
// ------------

Ken.COLOR_PALETTES = {
  "greenish": ["#687E00", "#4E451A", "#4C7F1F"],
  "blueish": ["#135574", "#242443", "#22102F"],
  "redish": ["#7A1B15", "#5E0A45", "#632A08"]
};

// Ken.Session
// -----------------

Ken.Session = function(collection) {
  // The original collection
  this.collection = collection;
  this.filteredCollection = collection;

  this.filterValueCount = 0;
  this.filters = {};
  this.matches = {};

  this.colors = new ColorPool(Ken.COLOR_PALETTES);

  this.initValueMap();
};

_.extend(Ken.Session.prototype, _.Events, {

  addFilter: function(property, value) {
    if (!this.filters[property]) this.filters[property] = {};
    this.filters[property][value] = {
      color: this.colors.getNext()
    };
    this.filterValueCount += 1;
    this.filter();
  },

  removeFilter: function(property, value) {
    delete this.filters[property][value];
    this.filterValueCount -= 1;
    this.filter();
  },

  // Getting deltas based on prev state and new state
  getDelta: function() {
    if (this.prevFilteredCollection) {
      return {
        "enter": this.filteredCollection.difference(this.prevFilteredCollection).objects,
        "update": this.filteredCollection.intersection(this.prevFilteredCollection).objects,
        "exit": this.prevFilteredCollection.difference(this.filteredCollection).objects
      }
    } else {
      return {
        "enter": this.filteredCollection.objects,
        "update": [],
        "exit": []
      }
    }
  },

  // Compute collection based on filters
  filter: function() {
    var that = this;

    // Reset matches
    this.matches = {};

    function flattenFilters() {
      var filters = [];
      _.each(that.filters, function(f, key) {
        _.each(f, function(bla, val) {
          filters.push({
            property: key,
            value: val
          });
        });
      });
      return filters;
    }

    function registerMatch(o, filter) {
      var obj = that.matches[o._id];
      if (!obj) obj = that.matches[o._id] = [];
      obj.push(filter);
    }

    var filters = flattenFilters();

    this.prevFilteredCollection = this.filteredCollection;

    // Join 'em together
    if (filters.length > 0) {

      var filteredObjects = [];
      _.each(filters, function(f) {
        var objects = this.valueMap[f.property][f.value];
        _.each(objects, function(o) {
          registerMatch(o, [f.property, f.value]);
          filteredObjects.push(o);
        }, this);
      }, this);

      var OBJECTS_BY_RELEVANCE = function(item1, item2) {
        var i1 = that.getMatchesForObject(item1);
        var i2 = that.getMatchesForObject(item2);

        return i1 === i2 ? 0 : (i1 > i2 ? -1 : 1);
      };

      filteredObjects = _.uniq(filteredObjects).sort(OBJECTS_BY_RELEVANCE);

      // Construct new Data.Collection
      this.filteredCollection = new Data.Collection({
        "type": {
          "_id": this.collection.type._id,
          "name": this.collection.type.name,
          "properties": this.collection.type.properties,
        },
        "objects": []
      });

      _.each(filteredObjects, function(o) {
        that.filteredCollection.add(o);
      });

    } else {
      this.filteredCollection = this.collection;
    }

    this.trigger('data:changed');
  },

  getMatchesForObject: function(o) {
    var that = this;
    return _.map(this.matches[o._id], function(filter) {
      return that.filters[filter[0]][filter[1]];
    });
  },

  // Based on current filter criteria, get facets
  getFacets: function() {
    var that = this;
    var facets = {};

    _.each(this.collection.type.properties, function(p, key) {
      if (!p.meta || !p.meta.facet) return;

      function getRelatedObjects(property, value) {
        var objects = [];
        _.each(that.valueMap[property][value], function(o) {
          if (that.filteredCollection.get(o._id)) objects.push(o);
        });
        return objects;
      }

      function getAvailableValues() {
        // Extract available values
        var values = [];
        _.each(that.valueMap[key], function(objects, value) {
          if (that.filters[key] && that.filters[key][value]) return;
          values.push({
            val: value,
            objects: objects,
            relatedObjects: getRelatedObjects(key, value)
          });
        });
        return values;
      }

      function getSelectedValues() {
        var values = [];
        _.each(that.filters[key], function(filter, val) {
          values.push({
            val: val,
            objects: that.valueMap[key][val],
            relatedObjects: getRelatedObjects(key, val),
            color: filter.color
          });
        });
        return values;
      }

      // Find max object count
      var availableValues = getAvailableValues();
      var selectedValues  = getSelectedValues();
      var maxCount = Math.max.apply(this, _.map(availableValues.concat(selectedValues), function(v) {
        return v.objects.length
      }));

      // Sort functions
      var VALUES_BY_RELEVANCE = function(item1, item2) {
        var i1 = item1.relatedObjects.length;
        var i2 = item2.relatedObjects.length;

        return i1 === i2 ? 0 : (i1 > i2 ? -1 : 1);
      };
      
      var VALUES_BY_FREQUENCY = function(item1, item2) {
        var i1 = item1.objects.length;
        var i2 = item2.objects.length;

        return i1 === i2 ? 0 : (i1 > i2 ? -1 : 1);
      };

      var VALUES_BY_RELEVANCE_AND_FREQUENCY = function(item1, item2) {
        var byRelevance = VALUES_BY_RELEVANCE(item1, item2);
        if (byRelevance !== 0) return byRelevance;
        return VALUES_BY_FREQUENCY(item1, item2);
      };

      availableValues = availableValues.sort(VALUES_BY_RELEVANCE_AND_FREQUENCY);
      selectedValues = selectedValues.sort(VALUES_BY_RELEVANCE_AND_FREQUENCY);

      facets[key] = {
        property: p,
        name: p.name,
        availableValues: availableValues,
        selectedValues: selectedValues,
        values: [],
        maxObjectCount: maxCount,
        scale: function(count) {
          return count*60/maxCount; // pixel space = 60px
        }
      };
    });
    return facets;
  },

  initValueMap: function() {
    var that = this;

    this.valueMap = {};

    function extractValues(key) {
      var values = {};

      function registerVal(val, o) {
        if (values[val]) {
          values[val].push(o);
        } else {
          values[val] = [o];
        }
      }

      _.each(that.collection.objects, function(o) {
        var vals = o.properties[key];
        vals = _.isArray(vals) ? vals : [ vals ];
        
        _.each(vals, function(v) {
          registerVal(v, o);
        });
      });
      return values;
    }

    _.each(this.collection.type.properties, function(p, key) {
      that.valueMap[key] = extractValues(key);
    }, this);
  }
});



// Ken.Matrix
// -----------------
// 
// Matrix Plot

Ken.Matrix = Backbone.View.extend({

  update: function() {
    this.layout();
    this.handleDelta();
  },

  layout: function() {
    function computeCols(n, width, height) {
      var cols = 1, // number of cols
          a, // edge length
          rows; // number of rows

      while(true) {
        a = width / cols;
        rows = Math.ceil(n/cols);
        if (rows*a <= height && n*a*a <= width*height)
          return cols;
        else {
          cols += 1;
        }
      }
    }

    var width = $('#matrix').width();
    var height = $('#matrix').height();

    var cols = computeCols(this.model.filteredCollection.objects.length, width, height);
    var size = Math.floor(width / cols);
    if (size>300) size = 300;

    _.each(this.model.filteredCollection.objects, function(item, i) {
      item.pos = {
        x: parseInt((i % cols)*size, 10),
        y: Math.floor(i / cols)*size,

        dx: size-1,
        dy: size-1
      };
    });

  },

  handleDelta: function() {
    var delta = this.model.getDelta();
    var that = this;

    function enter(items) {
      _.each(items, function(item) {
        var element = that.newItem(item);

        element.css({
          'left': item.pos.x+'px',
          'top': item.pos.y+'px',
          'width': item.pos.dx+'px',
          'height': item.pos.dy+'px'
        });
        that.$el.append(element);
      });
    }

    function update(items) {
      // var that = this;
      _.each(items, function(item) {
        var cell = '#' + _.htmlId(item._id);

        function updateMatches() {
          // Update matches
          var matches = that.model.getMatchesForObject(item);

          // Remove em
          $(cell).find('.markers').remove();
            
          if (matches.length > 0) {
            var $matchers = $('<div class="markers"></div>') 
            _.each(matches, function(match) {
              // console.log(matchersEl);
              $matchers.append('<div class="marker" style="background: '+match.color+'"></div>');
            });
            $(cell).append($matchers);
          }      
        }

        updateMatches();

        $(cell).css({
          'left': item.pos.x+'px',
          'top': item.pos.y+'px',
          'width': item.pos.dx+'px',
          'height': item.pos.dy+'px'
        });

      });
    }

    function exit(items) {

      function remove() {
        _.each(items, function(item) {
          $('#'+_.htmlId(item._id)).remove();
        });
      }

      _.each(items, function(item) {
        var randPos = {
          x: parseInt(Math.random()*300, 10),
          y: parseInt(Math.random()*200, 10)
        };

        $('#'+_.htmlId(item._id)).css({
          'left': randPos.x+'px',
          'top': randPos.y+'px',
          'width': '1px',
          'height': '1px'
        });

        $('#'+_.htmlId(item._id)).find('.name').remove();
        // console.log('removing markers..', $('#'+_.htmlId(item._id)+' .markers'));
        $('#'+_.htmlId(item._id)+' .markers').remove();
      });

      _.delay(remove, 1000);
    }

    enter(delta.enter);
    update(delta.update);
    exit(delta.exit);
  },

  newItem: function(item) {
    var html = _.tpl('item', {
      item: item,
      matches: this.model.getMatchesForObject(item)
    });
    return $(html);
  },

  // Initial render
  // TODO: just use update() ?
  render: function() {
    this.layout();
    this.handleDelta();
    return this;
  }
});


// Ken.Details
// -----------------

Ken.Details = Backbone.View.extend({
  initialize: function() {

  },

  render: function() {
    $(this.el).html(_.tpl('details',this.model));
    return this;
  }
});

// Ken.Facets
// -----------------

Ken.Facets = Backbone.View.extend({
  events: {
    'click a.value.add': 'addValue',
    'click a.value.remove': 'removeValue'
  },
  
  // Set a new filter
  addValue: function(e) {
    var property = $(e.currentTarget).attr('data-property'),
        value = $(e.currentTarget).attr('data-value');

    this.model.addFilter(property, value);
    return false;
  },
  
  // Set a new filter
  removeValue: function(e) {
    var property = $(e.currentTarget).attr('data-property'),
        value = $(e.currentTarget).attr('data-value');

    this.model.removeFilter(property, value);

    return false;
  },

  initialize: function(options) {

  },
  
  render: function() {
    $(this.el).html(_.tpl('facets', {
      filters: this.model.filters,
      facets: this.model.getFacets()
    }));
    return this;
  }
});


// Ken.Browser
// -------------------

Ken.Browser = Backbone.View.extend({
  events: {
    'click .item': 'toggleDetails',
    'click .item': 'toggleDetails',
    'click .close-details': 'closeDetails',
    'click #matrix': 'closeDetails',
    'mouseover a.value': 'highlightValue',
    'mouseout a.value': 'unhighlightValue'
  },

  unhighlightValue: function(e) {
    $('#matrix .item').removeClass('highlighted');
    return false;
  },

  highlightValue: function(e) {
    var prop = $(e.currentTarget).attr('data-property');
    var val = $(e.currentTarget).attr('data-value');
    $('#matrix .item').removeClass('highlighted');
    var objects = this.model.valueMap[prop][val];

    _.each(objects, function(o) {
      $('#'+_.htmlId(o._id)).addClass('highlighted');
    });
    return false;
  },

  closeDetails: function() {
    $('#matrix .item').removeClass('eased');
    this.prevId = null;
    $('#matrix .item.active').removeClass('active');
    return this.$('#details').hide();
  },

  toggleDetails: function(e) {
    var id = $(e.currentTarget).attr('data-id');
    if (id === this.prevId) {
      return this.closeDetails();
    }

    this.prevId = id;

    $('#matrix .item').addClass('eased');
    $('#matrix .item.active').removeClass('active');

    $('#'+_.htmlId(id)).removeClass('eased').addClass('active');
    
    var obj = this.model.collection.get(id);
    this.details = new Ken.Details({model: {
      object: obj,
      filters: this.model.filters
    }, el: this.$('#details')});

    this.$('#details').show();

    this.details.render();
    return false;
  },
  
  initialize: function(options) {
    this.model.bind('data:changed', this.update, this);
  },
  
  // Update plot and facets
  update: function() {
    this.matrix.update();
    this.facets.render();
  },
  
  render: function() {
    var that = this;
    // Should be rendered just once
    $(this.el).html(_.tpl('browser', {}));

    this.facets = new Ken.Facets({model: this.model, el: this.$('#facets')});
    this.matrix = new Ken.Matrix({model: this.model, el: this.$('#matrix')});
      
    // Initially render the facets
    this.facets.render();

    // Initially render the matrix / delayed -> hackish
    _.delay(function() {
      that.matrix.render();
    }, 10);
    return this;
  }
});