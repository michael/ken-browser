// Sort facets by their document frequency
// ================

VALUES_BY_FREQUENCY = function(item1, item2) {
  return item1.value.referencedObjects.length === item2.value.referencedObjects.length 
    ? 0
    : (item1.value.referencedObjects.length > item2.value.referencedObjects.length ? -1 : 1);
};

// Load Items to populate the browser
// ----------------

// function loadItems(search, cb) {
//   // $.getJSON('data/countries.json', function(data) {
//     var collection = new Data.Collection(projects_fixture);
//     var session = new Ken.Session(collection);
//     cb(null, session);
//   // });
// }

// Convert to desired format

function convertNYTArticles(data) {
  var res = {
    "type": {

      "_id": "/type/article",
      "name": "Projects",
      "properties": {
        "name": {
          "name": "Article Name",
          "type": "string",
          "unique": true
        },

        "author": {
          "name": "Author",
          "type": "string",
          "unique": true,
          "meta": {
            "facet": true,
            "details": true
          }
        },

        "website": {
          "name": "Website",
          "type": "string",
          "unique": true
        },

        "locations": {
          "name": "Locations",
          "type": "string",
          "unique": false,
          "meta": {
            "facet": true,
            "details": true
          }
        },

        "image": {
          "name": "Image",
          "type": "string",
          "unique": true
        },

        "abstract": {
          "name": "Abstract",
          "type": "string",
          "unique": true
        },

        "subjects": {
          "name": "Subjects",
          "type": "string",
          "unique": false,
          "meta": {
            "facet": true,
            "details": true
          }
        }
      }
    },
    objects: []
  };

  _.each(data.results, function(a) {
    console.log("article", a);

    var image = "";
    if (a.media && a.media[0] && a.media[0]["media-metadata"][8]) {
      image = a.media[0]["media-metadata"][8].url;
    }

    res.objects.push({
      _id: a.asset_id+"",
      name: a.title,
      abstract: a.abstract,
      organiszations: a.org_facet ? a.org_facet : [],
      subjects: a.des_facet ? a.des_facet : [],
      locations: a.geo_facet ? a.geo_facet : [],
      author: a.byline.trim() ? a.byline : "Anonymous",
      image: image,
      website: a.url
    });
  });

  return res;
}


// Load Items to populate the browser
// ----------------

function loadItems(search, cb) {
  // var path = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.jsonp?api-key=f00d0caa1fee5d169603d9d13596d188:8:67272438'; 

  $.getJSON('./data/articles.json', function(data) {
    var rawCollection = convertNYTArticles(data);
    var collection = new Data.Collection(rawCollection);
    var session = new Ken.Session(collection);
    cb(null, session);
  })
  .error(function() { cb('not_found: using defaults'); });

}