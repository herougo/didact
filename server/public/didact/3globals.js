let nextUnitOfWork = null;  // next "unit of work" to do
/* What is a unit of work?
   - render a functional component
   - create new fibers for wipFiber children
      -  also set the parent, sibling and child properties to connect them
*/
let currentRoot = null;     // root of the current fiber tree
let wipRoot = null;         // root of the fiber tree to eventually commit
let deletions = null;       // nodes to delete on the next commitRoot


let wipFiber = null;
// A global variable which is set to the current fiber when we updateFunctionComponent.
// That way, useState can access it.
let hookIndex = null        // (similar to wipFiber but for iterating over the hook array)

const G = {
    nextUnitOfWork,
    currentRoot,
    wipRoot,
    deletions,
    wipFiber,
    hookIndex
};

export default G;
