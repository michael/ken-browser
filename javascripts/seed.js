// Ajdust this file according to your metadata structure.
// ------------
// 
// The document browser looks for a meta.facet: true flag.

var seed = {
  "properties": {
    "title": {
      "name": "Document Title",
      "type": "string",
      "unique": true
    },

    "description": {
      "name": "Description",
      "type": "string",
      "unique": true
    },

    "updated_at": {
      "name": "Updated at",
      "type": "string",
      "unique": true
    },

    "created_at": {
      "name": "Updated at",
      "type": "string",
      "unique": true
    },

    "pdf": {
      "name": "PDF URL",
      "type": "string",
      "unique": true
    },

    "thumbnail": {
      "name": "Thumbnail",
      "type": "string",
      "unique": true
    },

    "pages": {
      "name": "Page count",
      "type": "number",
      "unique": true
    },

    "countries": {
      "name": "Countries",
      "type": "string",
      "unique": false,
      "meta": {
        "facet": true
      }
    },

    "company": {
      "name": "Company",
      "type": "string",
      "unique": false,
      "meta": {
        "facet": true
      }
    },

    "agency": {
      "name": "Agency",
      "type": "string",
      "unique": false,
      "meta": {
        "facet": true
      }
    },

    "individuals": {
      "name": "Individuals",
      "type": "string",
      "unique": false,
      "meta": {
        "facet": true
      }
    },

    "image": {
      "name": "Image URL",
      "type": "string",
      "unique": true
    }
  },

  "items": {
  }
};

var teasers = {
  "country": {
    "searchterm": "Nigeria",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  "topic": {
    "searchterm": "Environment",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  "social": {
    "searchterm": "Jobs",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  }
};