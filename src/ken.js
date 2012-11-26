// Ken
// -----------------
// 
// A Visual Knowledge Browser

var Ken = {};

// Colors
// ------------

Ken.COLOR_PALETTES = {
  "greenish": ["#afc59c", "#bcc97b", "#d8c46f"],
  "blueish": ["#a377b8", "#6c6db4", "#6c9db4"],
  "redish": ["#e3ae78", "#df8682", "#cb829b"]
};

// Ken.Session
// -----------------

Ken.Session = function(collection) {
  // The original collection
  this.collection = collection;
  this.filteredCollection = collection;

  this.filterValueCount = 0;
  this.filters = {};

  this.colors = new ColorPool(Ken.COLOR_PALETTES);

  this.initValueMap();
};

_.extend(Ken.Session.prototype, _.Events, {

  addFilter: function(property, value) {
    if (!this.filters[property]) this.filters[property] = {};
    this.filters[property][value] = true;
    this.filterValueCount += 1;
    this.filter();
  },

  removeFilter: function(property, value) {
    delete this.filters[property][value];
    this.filterValueCount -= 1;
    this.filter();
  },

  // Compute collection based on filters
  filter: function() {
    var that = this;

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

    var filters = flattenFilters();

    // Join 'em together
    if (filters.length > 0) {
      this.filteredCollection = new Data.Collection({
        "type": {
          "_id": this.collection.type._id,
          "name": this.collection.type.name,
          "properties": this.collection.type.properties,
        },
        "objects": []
      });
      _.each(filters, function(f) {
        var objects = this.valueMap[f.property][f.value];
        _.each(objects, function(o) {
          this.filteredCollection.add(o);
        }, this);
      }, this);
    } else {
      this.filteredCollection = this.collection;
    }

    this.trigger('data:changed');
  },

  // Based on current filter criteria, get facets
  getFacets: function() {
    var that = this;
    var facets = {};

    _.each(this.collection.type.properties, function(p, key) {
      if (!p.meta || !p.meta.facet) return;

      function getAvailableValues() {
        // Extract available values
        var values = [];
        _.each(that.valueMap[key], function(objects, value) {
          if (that.filters[key] && that.filters[key][value]) return;
          values.push({
            val: value,
            objects: objects
          });
        });
        return values;
      }

      function getSelectedValues() {
        var values = [];
        _.each(that.filters[key], function(filter, val) {
          values.push({
            val: val,
            objects: that.valueMap[key][val]
          })
        });
        return values;
      }

      facets[key] = {
        property: p,
        name: p.name,
        availableValues: getAvailableValues(),
        selectedValues: getSelectedValues(),
        values: []
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
  events: {

  },

  update: function() {
    this.render();
  },

  render: function() {
    // Empty container
    this.$el.empty();
    _.each(this.model.filteredCollection.objects, function(item) {
      var html = _.tpl('item', {
        item: item
      });

      this.$el.append(html);
    }, this);
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
    // Should be rendered just once
    $(this.el).html(_.tpl('browser', {}));

    this.facets = new Ken.Facets({model: this.model, el: this.$('#facets')});

    this.matrix = new Ken.Matrix({model: this.model, el: this.$('#matrix')});
      
    // Initially render the facets
    this.facets.render();

    // Initially render the matrix
    this.matrix.render();

    return this;
  }
});