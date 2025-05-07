import G from './3globals.js';

function render(element, container) {
  G.wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: G.currentRoot,
  }
  G.deletions = []
  G.nextUnitOfWork = G.wipRoot
}

export { render }