# Questions

### What is the general structure of the code?

```JavaScript
// Global Variables
let nextUnitOfWork = null;  // next "unit of work" to do (a fiber)
let currentRoot = null;     // root of the current fiber tree
let wipRoot = null;         // root of the fiber tree to eventually commit
let deletions = null;       // nodes to delete on the next commitRoot

function performUnitOfWork(fiber) {
    if (isFunctionComponent) {
        updateFunctionComponent(fiber)
    }
    // Create new fibers for fiber children
    // Also set the parent, sibling and child properties to connect them
    reconcileChildren(fiber, fiber.props.children);
}

function workLoop() {
    // Create a new fiber tree one fiber (unit of work) at a time
    while (nextUnitOfWork) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }
    if (wipRoot) {
        commitRoot(); // change the DOM
    }
    
    // requestIdleCallback: runs the callback when browser is idle
    requestIdleCallback(workLoop);  
}

function render(element, container) {
    wipRoot = {
        dom: container,
        props: {
            children: [element],
        },
        alternate: currentRoot,
    };
    deletions = [];
    nextUnitOfWork = wipRoot;
}

requestIdleCallback(workLoop);

render(<Counter />, document.getElementById("root"));
```
