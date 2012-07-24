// Load Documents
// ================
// 
// Sucks documents from documentcloud.org

function loadDocuments(searchstr, facets, cb) {

  // Remove to get the DocumentCloud stuff
  return cb(null, new Data.Collection(countries_fixture));

  if (searchstr == "all") searchstr = "";
  $.ajax({
    type: "GET",
    url: 'https://www.documentcloud.org/api/search.json?per_page=100&order=score&q='+encodeURI(searchstr || "")+'%20group%3A+revenuewatch&data=true',
    dataType: "jsonp",
    success: function(res) {
      if(res.error) return cb(res.error);
      
      var documents = {};
      _.each(res.documents, function(doc) {
        documents[doc.id] = {
          "title": doc.title,
          "image": "images/kevin.png",
          "description": doc.description,
          "countries": doc.data["countries"] ? doc.data["countries"].split(',') : [],
          "individuals": doc.data["individuals"] ? doc.data["individuals"].split(',') : [],
          "company": doc.data["company"] ? [doc.data["company"]] : [],
          "agency": doc.data["agency"] ? [doc.data["agency"]] : [],
          "updated_at": doc.updated_at,
          "thumbnail": doc.resources.thumbnail,
          "pdf": doc.resources.pdf,
        }
      });

      cb(null, new Data.Collection(_.extend(seed, {"items": documents})));
    },
    error: function(err) {
      cb(err);
    }
  });
}

// Sort facets by their document frequency
// ================

VALUES_BY_FREQUENCY = function(item1, item2) {
  return item1.value.referencedObjects.length === item2.value.referencedObjects.length 
    ? 0
    : (item1.value.referencedObjects.length > item2.value.referencedObjects.length ? -1 : 1);
};