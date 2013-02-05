// The Router
// -----------------

var Router = Backbone.Router.extend({
  initialize: function() {
    // Using this.route, because order matters
    // this.route("documents", 'documents', app.documents);
    // this.route("documents/:search", 'documents', app.documents);
    // this.route("documents/:search/:document", 'documents', app.documents);
    this.route("", "start", app.items);
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
    this.dataset = options.dataset;
    _.bindAll(this, 'items');
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

  items: function(search, doc) {
    var that = this;

    search = search || this.dataset;
    
    $('#main').html('<div class="loading-docs"><span>Loading items ...</span></div>');

    loadItems(search, function(err, session) {
      that.replaceMainView("browser", new Ken.Browser({model: session, id: 'browser'}).render());
    });
  },

  render: function() {
    return this;
  }
});