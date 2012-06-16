# Ken

Ken is a visual browsing interface for exploring resources of different kinds. Let's suppose our first usecase will be browsing student projects in a visual manner.


## The data

One data entry to be shown in Ken will then look like so:

```
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


### Faceted Navigation

## Search by keyword

It will be possible to search within the resultset by comparing the searchstring with the project description and assigned attributes.

## Discovering relationships

By selecting and combining facets the data not only can be filtered, also relationships between different entities (projects) may be revealed.

## Details on demand

You can at any time get contextual information to a project shown in the result. This detail view reveals all the meta-information such as the project description, involved people and associated assets (such as videos and images).


## Data Management

In order to maintain the data, in our first phase we're going to use Prose.io to create documents (such as student projects) and specify metadata (such as keywords) that powers the visualization. The data is stored on Github.com as a simple textfile, containing the metadata in a special [format](http://www.yaml.org/).
