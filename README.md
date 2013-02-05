# Ken

Ken is a visual browsing interface for exploring resources of different kinds. Let's suppose our first usecase will be browsing student projects in a visual manner.

![](http://f.cl.ly/items/1R3P0C3V2R0k3b1l3L00/ken.png)


## Integrate With Your Own Data

Ken has been built for arbitary data-sets. So you should use it to display your own collection of things. It does not matter if it's a set of projects, a list of publications or a selection of products your company offers.


### Check Out The Source Code

First off, you are encouraged to create your own fork on Github, in order to maintain your customized application of Ken. Once you have done that, just clone the fresh repo.

```bash
$ git clone git@github.com:your_user/ken.git
```
    
### Run Locally

When developing locally, note that your browser may enforce strict permissions for reading files out of the local file system. So in order to run Ken on your computer, you must have a local web server. For example, you can run Python's built-in server:

```bash
$ cd ken
$ python -m SimpleHTTPServer 8888 &
```
    
### Adjust The Data

By default Ken loads a static data-set, that can be found in `data/projects.json`. You can edit this file directly and make yourself comfortable with the data format.

Ken gets powered by a so called `Data.Collection` a simple data format, that can be exchanged as JSON. A data-collection involves a `type` declaration and a sequence `objects` that are instances of the specified type.

### Data Type

In order to use your own domain data, you need to justify the data type. A data type consists of a number of property declarations. Supposing your dataset contains keywords associated with each object, a property definition could look like this:
	
```js
...
"subjects": {
  "name": "Keywords",
  "type": "string",
  "unique": false,
  "meta": {
    "facet": true,
    "details": true
  }
},
...
```

Property definitions are pretty straight forward, the key determines the internal property identifier. `name` is a human readable description of the property. `type` defines the allowed values for that property. It can be `string`, `number` or `boolean`. `unique` then specifies whether there can be one value `true` or multiple values `false` for that property. `facet` and `details` are specific to Ken. They define where a property should be exposed as a facet in the Ken interface, and if it should be shown in the details dialog.

### Data Objects

According to your type definition you can now populate the collection with concrete objects you wanna display. Here's an example of an object in our projects collection.

```js
...
{
  "_id": "project-a",
  "name": "Project A",
  "keywords": ["3D Modelling", "Visualization"],
  "locations": ["Linz", "Vienna", "London"],
  "image": "http://example.com/image.png",
  "abstract": "Project A is there to demonstrate how a visual knowledge browser can be populated with custom data"
}
...
``` 
    
### Predefined Properties

There are a number of required properties that are used by the Ken interface. Those are:

- `name` (required) - A human readable title of the object
- `abstract` (optional) - A short description (shown in the details panel)
- `website` (optional) - A URL pointing to an external webpage
- `image` (option) - A image URL idaelly 1:1 aspect ratio. Shown in the plot and on the detail page.


## Data Proxy

You probably have a data-service already. However, the data needs to be converted into the Data.Collection format, so Ken can read it. This is rather simple. We wrote such a proxy ourself, in order to turn the output of the New York Times Most Popular API into a representation our browser understands. We also use the proxy to generate a bigger dataset (we need multiple requests against the NYTimes API) which we cache so initial loading is fast. Every hour we regenerate the dataset so users see the latest stories of the New York times.


## Adjust Stylesheets

You can adjust the style of your knowledge browser.

- `stylesheets/style.css` - Contains the page layout
- `stylesheets/ken.css` - Contains the styles for the visualization


## Adjust Javascript

Feel free to touch the Javascript code as well and adapt to your needs. If you think your contribution could be useful for the main project, please submit a pull request via GitHub.


## Keep in sync with the original repo

Make sure you pull in changes from the original repo from time to time, so you can utilize the latest features and benefit from bugfixes.