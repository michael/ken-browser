// Load Documents
// ================
// 
// Sucks documents from documentcloud.org

function loadDocuments(searchstr, facets, cb) {
  return cb(null, new Data.Collection(documents_fixture));
}

// Sort facets by their document frequency
// ================

VALUES_BY_FREQUENCY = function(item1, item2) {
  return item1.value.referencedObjects.length === item2.value.referencedObjects.length 
    ? 0
    : (item1.value.referencedObjects.length > item2.value.referencedObjects.length ? -1 : 1);
};