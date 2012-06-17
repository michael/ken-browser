# Ken

Ken is a visual browsing interface for exploring resources of different kinds. Let's suppose our first usecase will be browsing student projects in a visual manner.


## The data

One data entry to be shown in Ken will then look like so:

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

Though we have various options here, I would propose a faceted browsing interface using a matrix plot display the results. The visualization will compute a layout to arrange squares (= Student Projects) on the screen in a space-efficient way. Once the selection changes, the screen updates accordingly using smooth transitions.

We can still consider a node-link diagram for the result section, which might be visually more appealing but comes with drawbacks in terms of usability. However additional visual representations can be discussed and added later, based on individual use-cases.


## Faceted Navigation

Instead of attempting to visualize all connections in one go, users decide which facets they are most interested in. Using this approach the number of considered documents can scale up to a high value. The workflow would look like so:

1. Select a entity

Choose the first facet you’re interested in from the entity tab on the left. The entities are ordered by their document frequency. The two bars next to the entities encode document frequency and average term frequency (only considering the matched documents). When hovering over an entity the concerned documents are temporarily highlighted to give you immediate feedback. After the mouse click a color (picked from a color scheme) will be assigned to the selection. The documents containing this entity are highlighted using a marker with that color. Documents that do not match are grayed out. The number of entity-mentions for a specific document is expressed using a number of small squares that conform to the
frequency of all selected entities.

2. Select another facet

By selecting another facet (entity) the screen is updated accordingly. The matching documents for the second entity are tagged with a second color strip. Documents that contain all selected entities are displayed at maximum size while others, that only match one entity, appear smaller. All others are grayed out. The transition will be animated from one state to another to get a rough idea what is changing. This works the same way with 3+ selected entities. With respect to the available screen space we might want to limit the number of selected terms.

3. Project details

Once you have this visual overview in front of you, you’re ready to investigate the details and zoom into the details of one document. The view will change with a smooth zoom-in transition, while the current browsing context (entity selection) is preserved.
Visual Document Explorer 3
￼
You are now exploring the selected entities within one document. You can zap through them using a bookmark analogy. This view is somehow close to actually reading the document. Eliminating the extra hop, from the entity bookmarks to the document viewer would probably make sense. We should talk about the possibility of integrating the Document Viewer with the Entity Bookmark view. The entity selection can be changed independently within both views (Matrix, Entity Bookmarks). You’d usually step back and forth between both views to explore the set of documents. It’s really important to make the current browsing context transparent to the user.

4. Search and Sort

From the Matrix View you’d be able to search within the current set of documents. You’d get immediate visual response to your search term in form of highlighted documents that match. Sorting the documents is also a use-case I identified. You’d be able to reorder the documents based on a sort criterion. The transition would be animated as well.

## Search by keyword

It will be possible to search within the resultset by comparing the searchstring with the project description and assigned attributes.

## Discovering relationships

By selecting and combining facets the data not only can be filtered, also relationships between different entities (projects) may be revealed.

## Details on demand

You can at any time get contextual information to a project shown in the result. This detail view reveals all the meta-information such as the project description, involved people and associated assets (such as videos and images).

## Data Management

In order to maintain the data, in our first phase we're going to use Prose.io to create documents (such as student projects) and specify metadata (such as keywords) that powers the visualization. The data is stored on Github.com as a simple textfile, containing the metadata in a special [format](http://www.yaml.org/).
