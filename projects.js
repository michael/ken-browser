---
---

var projects_fixture = {
  "type": {
    "_id": "/type/project",
    "name": "Projects",
    "properties": {
      "name": {
        "name": "Project Name",
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

      "location": {
        "name": "Location",
        "type": "string",
        "unique": true,
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

  "objects": [
    {% for item in site.categories.projects %}
      {% include document.json %},
    {% endfor %}
  ]
}