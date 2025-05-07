import G from './3globals.js';

function useState(initial) {
  const oldHook =
    G.wipFiber.alternate &&
    G.wipFiber.alternate.hooks &&
    G.wipFiber.alternate.hooks[G.hookIndex]
  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  }

  const actions = oldHook ? oldHook.queue : []
  actions.forEach(action => {
    hook.state = action(hook.state)
  })

  const setState = action => {
    hook.queue.push(action)
    G.wipRoot = {
      dom: G.currentRoot.dom,
      props: G.currentRoot.props,
      alternate: G.currentRoot,
    }
    G.nextUnitOfWork = G.wipRoot
    G.deletions = []
  }

  G.wipFiber.hooks.push(hook)
  G.hookIndex++
  return [hook.state, setState]
}

export {
    useState
};