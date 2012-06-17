# Ken

Ken is a visual browsing interface for exploring resources of different kinds. Let's suppose our first usecase will be browsing student projects in a visual manner.

![](https://github.com/michael/ken/raw/master/assets/layout.png)


## The data

One data entry to be shown in the browser will then look like so:

```yml
---
type: project
name: "Polished Off"
image: "http://f.cl.ly/items/1o363t351s47371R3X2f/polished-off.png"
subjects:
- Animation
- Visual effects
assets:
  videos:
  - http://vimeo.com/video1
  images:
  - http://example.com/image2
  documents: 
  - http://example.com/document1.pdf
  - http://example.com/document2.pdf
---

A detailed project description, that can be formatted using [Markdown](http://daringfireball.net/projects/markdown/).
```

## The visualization

Though we have various options here, I would propose a faceted browsing interface using a matrix plot to display the results. The visualization will compute a layout to arrange squares (= Student Projects) on the screen in a space-efficient way. Once the selection changes, the screen updates accordingly using smooth transitions.

We can still consider a [Node Link Diagram](http://mbostock.github.com/d3/ex/force.html) (instead or in addition to the Matrix Plot), but we should be aware that they come with drawbacks in terms of usability. However, additional visual representations can be discussed and added later, based on individual use-cases.


### Faceted data exploration

Instead of attempting to visualize all connections in one go, users decide which aspects they are most interested in. Using this approach the number of considered documents can scale up to a high value. This concept is referred to in literature as [Faceted Search](http://en.wikipedia.org/wiki/Faceted_search). A possible user workflow would look like so:


1. Select a facet from the filters on the left
   
   Choose the first facet you’re interested in from the entity tab on the left. The entities are ordered by their project frequency. When hovering over an entity the concerned documents are temporarily highlighted to give you immediate feedback. After a mouse click a color (picked from a color palette) will be assigned to the selection. The documents containing this entity are highlighted using a marker with that color.

2. Select another facet

   By selecting another facet (entity) the screen is updated accordingly. The matching project for the second entity are tagged with a second color strip. Documents that contain all selected entities are displayed at maximum size while others, that only match one entity, appear smaller. The transition will be animated from one state to another to get a rough idea what is changing. This works the same way with 3+ selected entities. With respect to the available screen space we might want to limit the number of concurrently selected terms.

3. Project details

   Once you have this visual overview in front of you, you’re ready to investigate the details and zoom into the details of one project. The view will change with a smooth zoom-in transition, while the current browsing context (entity selection) is preserved.
￼

4. Search and Sort

   From the Matrix View you’d be able to search within the current set of projects. You’d get immediate visual response to your search term in form of highlighted project that match. Sorting the documents is also a use-case I've identified. You’d be able to reorder the documents based on a sort criterion. The transition would be animated as well.

## Tasks

Here's a number of tasks concern users of the system. We're going to optimize the system according to those tasks.

### Guided exploration

You don't need to know what you're looking for first. The visualization guides you through the dataset. You can pick aspects that match the current dataset to make sense of the data shown.

### Search by keyword

It will be possible to search within the resultset by comparing the searchstring with the project description and assigned attributes. Results will show up as you type.

### Discovering relationships

By selecting and combining facets the data not only can be filtered, also relationships between different entities (projects) may be revealed. Or in other words, users might find related projects without explictly searching for them, which can be very useful.

### Details on demand

You can at any time get contextual information to a project shown in the resultset. This detail view reveals all the meta-information such as the project description, involved people and associated assets (such as videos and images). I'm going to mockup this dialogue as well, but let's talk first.

## Data Management

In order to maintain the data, in our first phase we're going to use Prose.io to create and maintain data-entries (such as student projects) and specify metadata (such as related subjects and involved people) that powers the visualization. The data will be securely stored in a Git Repository on Github. Actually it is stored as a simple textfile, containing the metadata in a special [format](http://www.yaml.org/) so we can automatically parse that files and populate the browser.

![](https://github.com/michael/ken/raw/master/assets/data-editor.png)

I think this is a pretty good way to start, since it's very flexible. We can add new metadata on demand etc. and include new entity types, such as research papers. In future, a more intuitive interface might be possible built on top of the Substance technology stack. But that will not be part of our first iteration.

Please bring in your feedback and create [tickets](http://github.com/michael/ken) on Github, so we can discuss certain aspects independently.
