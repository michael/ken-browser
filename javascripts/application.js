// The Router
// -----------------

var Router = Backbone.Router.extend({
  initialize: function() {
    // Using this.route, because order matters
    this.route("documents", 'documents', app.documents);
    this.route("documents/:search", 'documents', app.documents);
    this.route("documents/:search/:document", 'documents', app.documents);
    this.route("", "start", app.documents);
  }
});

// Application
// -----------------

var Application = Backbone.View.extend({
  events: {
    'submit #search_form': '_search'
  },
  
  el: '#container',
  
  initialize: function(options) {
    _.bindAll(this, 'documents');
  },

  _search: function() {
    var searchstr = $('#searchstr').val();
    this.documents(searchstr);
    router.navigate('documents'+ (searchstr ? '/'+searchstr : ''), false);
    return false;
  },

  // Helpers
  // -------

  replaceMainView: function (name, view) {
    $('body').removeClass().addClass('current-view '+name);
    if (this.mainView) {
      this.mainView.remove();
    }

    this.mainView = view;
    this.$('#main').empty();
    $(view.el).appendTo(this.$('#main'));
  },

  // The Explore View
  // -------

  documents: function(search, doc) {
    var that = this;

    $('#main').html('<div class="loading-docs"><span>Loading documents ...</span></div>');
    loadDocuments(search, null, function(err, documents) {
      that.replaceMainView("browser", new Browser({collection: documents, search: search ? search : "all", id: 'browser'}).render());
      if (doc) that.mainView.showDocument(doc);
    });
    $('#header .menu .button').removeClass('active');
    $('#header .menu .button.documents').addClass('active');
  },

  render: function() {
    return this;
  }
});

// Colors
// ------------

var COLOR_PALETTES = {
  "greenish": ["#afc59c", "#bcc97b", "#d8c46f"],
  "blueish": ["#a377b8", "#6c6db4", "#6c9db4"],
  "redish": ["#e3ae78", "#df8682", "#cb829b"]
};



// Facets
// -----------------

var Facets = Backbone.View.extend({
  events: {
    'click a.add-value': 'addValue',
    'click a.remove-value': 'removeValue'
  },
  
  // el: '#facets',
  
  // Set a new filter
  addValue: function(e) {
    var property = $(e.currentTarget).attr('property'),
        value = $(e.currentTarget).attr('val');
    this.filters.get(property).selectedValues.set(value, "bla");
    this.filterValueCount += 1;
    this.trigger('filter:changed');
    this.render();
    return false;
  },
  
  // Set a new filter
  removeValue: function(e) {
    var property = $(e.currentTarget).attr('property'),
        value = $(e.currentTarget).attr('val');

    this.filters.get(property).selectedValues.del(value);
    this.filterValueCount -= 1;
    this.trigger('filter:changed');
    this.render();
    return false;
  },
  
  initialize: function(options) {
    var that = this;
    this.browser = options.browser;
    
    this.colors = new ColorPool(COLOR_PALETTES);

    this.filterValueCount = 0;
    
    // Register available facets
    this.filters = new Data.Hash();
    this.browser.collection.properties().select(function(p, key) {
      if (p.meta.facet) {
        that.filters.set(key, {
          property: p,
          color: that.colors.getNext(),
          selectedValues: new Data.Hash()
        });
      }
    });
  },
  
  render: function() {
    $(this.el).html(_.tpl('facets', {
      filters: this.filters
    }));

    this.delegateEvents();
    return this;
  }
});


// Browser
// -----------------

var Browser = Backbone.View.extend({
  events: {
    'click .toggle-document': "_showDocument",
    'click .hide-details': "_hideDocument"
  },
    
  _hideDocument: function() {
    this.$('#document_details').hide();
    router.navigate('documents/'+this.options.search, false);
    return false;
  },

  _showDocument: function(e) {
    this.showDocument($(e.currentTarget).attr('document'));

    return false;
  },

  showDocument: function(id) {
    var that = this;

    var document = this.collection.get(id);
    // Inject details
    this.$('#document_details')
        .empty()
        .append(new Document({model: document}).render().el)
        .show();
    router.navigate('documents/'+this.options.search+'/'+id, false);
    $('div.mask').unbind().click(function() {
      that._hideDocument();
    });
  },
  
  // el: '#browser',
  
  initialize: function(options) {
    this.filteredCollection = this.collection;
  },
  
  // Perform filter operation based on facets selection
  filter: function() {
    var that = this;
    if (this.facets.filterValueCount>0) {
      this.filteredCollection = new Data.Collection({
        properties: this.collection.properties(),
        items: {}
      });
      
      var objects = new Data.Hash();
      // For all filters calculate objects
      this.facets.filters.each(function(f) {
        if (f.selectedValues.length > 0) {
          var qry = {};
          qry[f.property.key+"|="] = f.selectedValues.keys()
          objects = objects.union(that.collection.find(qry));
          that.filteredCollection.g.replace('')
        }
      });
      
      // Register matched objects on the filtered collection
      objects.each(function(o, key) {
        that.filteredCollection.g.all('objects').set(key, o);
      });
    } else {
      that.filteredCollection = that.collection;
    }
    this.update();
  },
  
  // Update plot and facets
  update: function() {
    this.documents.update({
      collection: this.filteredCollection,
      filters: this.facets.filters
    });
  },
  
  render: function() {
    // Should be rendered just once
    $(this.el).html(_.tpl('browser', {}));

    if (this.options.search !== 'all');
    $('#searchstr').val(this.options.search);

    this.facets = new Facets({browser: this, el: this.$('#facets')});
    this.documents = new Documents({el: this.$('#documents')});

    this.facets.bind('filter:changed', function() {
      this.filter();
    }, this);
    
    this.facets.render();
    
    // Update plot
    this.documents.update({
      collection: this.filteredCollection,
      filters: this.facets.filters
    });
    
    return this;
  }
});


// Documents
// -----------------

var Documents = Backbone.View.extend({

  prepareData: function() {
    var that = this;

    _.each(this.collection.items(), function(item) {
      var matches = [];
      that.filters.each(function(f) {
        f.selectedValues.each(function(val, key) {
          if (item.all(f.property.key).get(key)) {
            matches.push({
              value: key,
              color: f.color
            });
          }
        });
      });

      item.matches = matches;
    });
  },

  // Does a full re-render for now
  update: function(options) {
    this.collection = options.collection;
    this.filters = options.filters;
    this.prepareData();
    this.render();
  },

  render: function() {
    $(this.el).html(_.tpl('documents', {
      documents: this.collection.items()
    }));
    return this;
  }
});

// Document
// -----------------

var Document = Backbone.View.extend({
  events: {
    
  },

  render: function() {
    $(this.el).html(_.tpl('document', {
      document: this.model
    }));
    return this;
  }
});


