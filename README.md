# Ken

Ken is a visual browsing interface for exploring resources of different kinds. Let's suppose our first usecase will be browsing student projects in a visual manner.

![](http://f.cl.ly/items/1R3P0C3V2R0k3b1l3L00/ken.png)

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

You don't need to know what you're looking at first. The visualization guides you through the dataset. You can pick aspects that match the current dataset to make sense of the data shown.

### Search by keyword

It will be possible to search within the resultset by comparing the searchstring with the project description and assigned attributes. Results will show up as you type.

### Discovering relationships

By selecting and combining facets the data not only can be filtered, also relationships between different entities (projects) may be revealed. Or in other words, users might find related projects without explictly searching for them, which can be very useful.

### Details on demand

You can at any time get contextual information to a project shown in the resultset. This detail view reveals all the meta-information such as the project description, involved people and associated assets (such as videos and images).



## Visualize your own data

Ken has been built for arbitary data-sets. So you should use it to display your own collection of things. It does not matter if it's a set of projects, a list of publications or a selection of products your company offers.


### Check out the source code

First off, you should create your own fork on Github, in order to maintain your customized application of Ken. Once you have done that, clone the repo.

    $ git clone git@github.com:your_user/ken.git
    
    
### Adjust data

By default Ken loads a static data-set, that can be found in `data/projects.json`. You can edit this file directly to make yourself comfortable with the data format.

Ken gets powered by a so called `Data.Collection` a simple data format, that can be exchanged as JSON. A data-collection involves a `type` declaration and a sequence `objects` that are instances of the described type.

### Adjust the data-type

