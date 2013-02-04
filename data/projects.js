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
    
      {
  "_id": "/projects/substance.html",
  "name": "Substance",
  "website": "http://github.com/project/substance",
  "author": "Michael Aufreiter",
  "location": "Linz",
  "abstract": "A data-driven document authoring engine",
  "image":"http://substance-assets.s3.amazonaws.com/7a/6857757c35da07a6c6b0f92ce1c270/politics.png",
  "subjects": ["Visualization","Webdevelopment","Visual effects",]
},
    
      {
  "_id": "/projects/ken.html",
  "name": "ASKKEN",
  "website": "http://github.com/project/ken",
  "author": "Michael Aufreiter",
  "location": "Linz",
  "abstract": "A visual knowledge browser",
  "image":"http://substance-assets.s3.amazonaws.com/83/38c97cb2c7823c6a743d9790c5b7fd/mathematics.png",
  "subjects": ["Visualization","Webdevelopment","Visual effects","silly thing",]
},
    
      {
  "_id": "/projects/project-x.html",
  "name": "Project X",
  "website": "http://github.com/project/x",
  "author": "John Doe",
  "location": "Istanbul",
  "abstract": "Enter project summary",
  "image":"http://substance-assets.s3.amazonaws.com/ee/cc52e29f6a1b90b8443ad296b00c8d/physics.png",
  "subjects": ["3D Modelling","Visual effects",]
},
    
      {
  "_id": "/projects/project-d.html",
  "name": "Polished Off",
  "website": "http://github.com/project/d",
  "author": "John Doe",
  "location": "Linz",
  "abstract": "Donec pellentesque, libero ut pulvinar commodo, orci arcu sagittis metus",
  "image":"http://substance-assets.s3.amazonaws.com/85/362f790f8d0e086731b6d19c5ee7cf/linz.png",
  "subjects": ["Animation","3D Modelling",]
},
    
      {
  "_id": "/projects/project-c.html",
  "name": "Project C",
  "website": "http://github.com/project/c",
  "author": "Jane Doe",
  "location": "London",
  "abstract": "Donec ut arcu urna. Curabitur nisl nisl, condimentum vitae vehicula vitae.",
  "image":"http://substance-assets.s3.amazonaws.com/57/9b6bb915bab1ccf488fcdb13d54e57/vvvvjs_quasiteaser.png",
  "subjects": ["Animation","Visual effects",]
},
    
      {
  "_id": "/projects/project-b.html",
  "name": "Project B",
  "website": "http://github.com/project/b",
  "author": "John Doe",
  "location": "Linz",
  "abstract": "Quisque lectus nisl, porta ac vestibulum vel, blandit at quam",
  "image":"http://substance-assets.s3.amazonaws.com/30/df3a0db5cfd8f4d4c02af7e1a228cb/history.png",
  "subjects": ["Animation","Visual effects",]
},
    
      {
  "_id": "/projects/project-a.html",
  "name": "Project A",
  "website": "http://github.com/project/a",
  "author": "Michael Aufreiter",
  "location": "London",
  "abstract": "Description of project A.",
  "image":"http://substance-assets.s3.amazonaws.com/39/44059bda16aa4e7f4aeaf77d537bce/javascript.png",
  "subjects": ["Animation","Visual effects",]
},
    
  ]
}