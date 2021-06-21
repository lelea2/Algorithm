#### Design virtual scrolling

- In virtual scrolling, we don't display the entire content on the screen, to reduce the amount of DOM node rendering and calulations
- Only render a part inside the view port window and a bit more on the top and bottom to ensure smooth transitions

We need:
1) Render the entire content as empty container
2) render the current vibile node
3) shift them down where they should be
* When we render the visible nodes inside the container, they render at the top of the container. 
What we need to do now is shift them down to their correct position, and leave an empty space.
* To shift the nodes down, it's best to use transform: `translateY` to offset the first node, as it will run on the GPU. 
This will ensure faster repaints and better performance than, for example, absolute positioning. The `offsetY` is just the start node times the row height

What we know
* viewport height
* total number of items
* row height (easier if it's a fixed height)
* current scrollTop position of the viewport

What can be calculate
* totalHeight = rowHeight * # of items
* startNode = scrollTop / rowHeight - nodePadding
* visibleNodeCount = viewPortHeight/rowHeight + 2 * nodePadding

```js
const VirtualScroll = ({
  renderItem,
  itemCount,
  viewportHeight,
  rowHeight,
  nodePadding,
}) => {
  const totalContentHeight = itemCount * rowHeight;

  let startNode = Math.floor(scrollTop / rowHeight) - nodePadding;
  startNode = Math.max(0, startNode);

  let visibleNodesCount = Math.ceil(viewportHeight / rowHeight) + 2 * nodePadding;
  visibleNodesCount = Math.min(itemCount - startNode, visibleNodesCount);

  const offsetY = startNode * rowHeight;

  const visibleChildren = new Array(visibleNodeCount)
    .fill(null)
    .map((_, index) => renderItem(index + startNode));

  return `
    <div ${/* viewport */}
      style="
        height: ${viewportHeight};
        overflow: "auto";
      "
    >
      <div ${/* content */}
        style="
          height: ${totalContentHeight};
          overflow: "hidden";
        "
      >
        <div ${/* offset for visible nodes */}
          style="
            transform: translateY(${offsetY}px);
          "
        >
          ${visibleChildren}  ${/* actual nodes */}
        </div>
      </div>
    </div>
  );
};
```

##### Advance with dynamic node height
* Use binary search to get the first node whose position is larger than the current scrollTop
* Simply add node where it reaches > scrollTop + viewport height

##### Optimization:
1) throttle the scroll event callback
2) requestAnimationFrame