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
            // "facet": true,
            "details": true
          }
        },

        "published_date": {
          "name": "Published Date",
          "type": "date",
          "unique": true
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

        "persons": {
          "name": "Persons",
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

        "section": {
          "name": "Section",
          "type": "string",
          "unique": true,
          "meta": {
            "facet": true,
            "details": true
          }
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
    
    var image = "";
    if (a.media && a.media[0] && a.media[0]["media-metadata"]) {
      
      // Try to find super large thumb
      var asset = _.find(a.media[0]["media-metadata"], function(a){ return a.format === "square320"; });
      // Take smaller thumb
      if (asset) {
        image = asset.url;
      } else {
        asset = _.find(a.media[0]["media-metadata"], function(a){ return a.format === "Standard Thumbnail"; });
        console.log('asset found', asset);

        if (asset) image = asset.url; // a.media[0]["media-metadata"][4].url;
        if (image) image = image.replace(/thumbStandard.*\.jpg$/g, 'square320.jpg');
      }
    }

    if (!image) return; // skip non-image articles
    res.objects.push({
      _id: a.asset_id+"",
      name: a.title,
      abstract: a.abstract,
      section: a.section,
      organiszations: a.org_facet ? a.org_facet : [],
      subjects: a.des_facet ? a.des_facet : [],
      locations: a.geo_facet ? a.geo_facet : [],
      persons: a.per_facet ? a.per_facet : [],
      author: a.byline.trim() ? a.byline : "Anonymous",
      image: image,
      website: a.url,
      published_date: a.published_date
    });
  });

  return res;
}


// Load Items to populate the browser
// ----------------

function loadItems(file, cb) {
  // var path = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.jsonp?api-key=f00d0caa1fee5d169603d9d13596d188:8:67272438'; 
  // var path = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=f00d0caa1fee5d169603d9d13596d188:8:67272438'; 

  $.getJSON(file, function(data) {

    console.log("file", file);

    if (file.indexOf('raw')>=0) {
      var data = convertNYTArticles(data);
    }

    console.log(JSON.stringify(data, null, '  '));
    var collection = new Data.Collection(data);
    var session = new Ken.Session(collection);
    cb(null, session);
  })
  .error(function() { cb('not_found: using defaults'); });

}