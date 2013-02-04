
// Stacks
// ------------

function htmlId(id) {
  return id.replace(/\//g, '_').replace(/_/, '');
}

var collections = {};

// Stack Cells
// ------------

collections.cells = {
  enter: function(items) {
    _.each(items, function(item) {

      var randPos = {
        x: parseInt(Math.random()*900, 10),
        y: parseInt(Math.random()*400, 10)
      };

      $cell = $(templates.cell(_.extend(randPos, {
        item: item,
        id: htmlId(item._id)
      })))
      .css({
        'width': item.pos.dx,
        'height': item.pos.dy,
        'left': randPos.x+'px',
        'top': randPos.y+'px'
      });

      $('#canvas').append($cell);
    });

    this.collections.cells.update(items);
  },

  update: function(items) {
    var that = this;

    _.each(items, function(item) {
      var cell = '#' + htmlId(item._id);

      $(cell).css({
        'left': item.pos.x+'px',
        'top': item.pos.y+'px',
        'width': item.pos.dx+'px',
        'height': item.pos.dy+'px',
        'opacity': item.pos.active ? 0.9 : 0.25
      });

      if (item.pos.dx <= 19) {
        $(cell).find('.label span').hide();
      } else {
        $(cell).find('.label span').show();
      }

      if (item.pos.highlighted) {
        $(cell).addClass('highlighted');
      } else {
        $(cell).removeClass('highlighted');
      }

    });
  },

  exit: function(items) {

    function remove() {
      _.each(items, function(item) {
        $('#'+htmlId(item._id)).remove();
      });
    }

    _.each(items, function(item) {
      var randPos = {
        x: parseInt(Math.random()*1800-900, 10),
        y: parseInt(Math.random()*800-400, 10)
      };

      // console.log('remove', $('#'+htmlId(item._id)).find('.name'));
      $('#'+htmlId(item._id)).find('.name').remove();

      $('#'+htmlId(item._id)).css({
        'left': randPos.x+'px',
        'top': randPos.y+'px',
        'width': '0px',
        'height': '0px'
      });
    });

    _.delay(remove, 1000);
  }
};


// Stacks Visualization
// ------------

views.Stacks = Dance.Performer.extend({

  // Register data collections
  collections: collections,

  // Run the stacks layouting algorithm
  // ------------

  layout: function(getter, activeFn, highlightedFn) {

    var stacks = this.stacks = this.extractGroups(this.data.cells, getter);

    var width = $('#canvas').width()+5,
        margin = 20,
        height = $('#canvas').height()-60-margin*2,
        size;

    if (!stacks) {
      this.data.cells = [];
      $('.nodata').css('opacity', 1);
      return;
    } else {
      $('.nodata').css('opacity', 0);
    }

    // Computes a suitable column count to fit the stack
    function computeCols(n, width, height) {
      var cols = 1, // number of cols
          a, // edge length
          rows; // number of rows

      while(true) {
        a = width / cols;
        rows = Math.ceil(n/cols);
        if (rows*a <= height && n*a*a <= width*height)
          return cols;
        else {
          cols += 1;
        }
      }
    }

    // Perform actual layout calculations
    var maxCount = Math.max.apply(this, _.map(stacks, function(s) {
      return Math.max.apply(this, _.map(s.groups, function(g) { return g.length; }));
    }));

    var numStacks  = _.keys(stacks);
    var stackWidth = Math.floor(width/numStacks.length);
    var innerWidth = (width/numStacks.length)-margin*2;

    var numGroups  = 3; // make dynamic
    var groupWidth = stackWidth / numGroups;
    var innerGroupWidth = Math.floor(innerWidth / numGroups);

    var cols = computeCols(maxCount, innerGroupWidth, height);

    size = Math.floor(innerGroupWidth / cols);
    _.each(stacks, function(stack, stackIndex) {
      stack.pos = {
        x: stackIndex*stackWidth,
        dx: stackWidth
      };

      var groupIndex = 0;
      _.each(stack.groups, function(group) {
        _.each(group, function(item, i) {
          var offset = Math.floor((stackWidth - cols*size*numGroups) / 2);

          item.pos = {
            active: activeFn(item),
            highlighted: highlightedFn(item),
            x: offset+stackWidth * stackIndex + (size*cols)*groupIndex + parseInt((i % cols)*size, 10),
            y: (10 - margin + Math.floor(i / cols)*size)*-1+height,
            dx: size-1,
            dy: size-1
          };
        });
        groupIndex += 1;
      });
    });
  },


  // Extract group memberships
  // ------------

  extractGroups: function(items, getter) {
    var that = this;
    var stacks = {};
    var recordCount = 0;

    _.each(this.mappings.objects, function(coding, index) {
      stacks[coding.get('code')] = {groups: {}, coding: coding};
    });

    _.each(items, function(item) {
      var val = getter(item);
      var stack = stacks[val];
      if (stack) {
        // Create group
        var group = stack.groups[that.accessors.group(item)];
        if (!group) group = stack.groups[that.accessors.group(item)] = [];

        group.push(item);
        recordCount ++;
      } else {
        if (val !== undefined) console.log('no stack registered for value: ' + val);
      }
    });

    return recordCount > 0 ? _.values(stacks) : null;
  },

  initialize: function(options) {
    options = options || {};
    this.epsilon = options.epsilon || 19;
  },

  // Update visualization (new property selection)
  // ------------

  renderStacks: function() {
    var $legend = $('#canvas .legend').empty();
    _.each(this.stacks, function(stack, key) {
      $legend.append(templates.stack(_.extend(stack.pos, {
        v: stack.coding,
        no_subtitles: this.stacks.length <= 3
      })));
    }, this);
  },

  update: function(items, mappings, getter, activeFn, highlightedFn) {
    this.data.cells = items;

    this.mappings = mappings;

    this.accessors = {
      getter: getter,
      active: activeFn,
      highlighted: highlightedFn,
      group: function(obj) {
        return obj.get('grade_level')._id;
      }
    };

    this.layout(getter, activeFn, highlightedFn);

    $('#canvas .stack').remove();
    this.renderStacks();
    this.refresh();
  },

  render: function() {
    return this;
   }
});
