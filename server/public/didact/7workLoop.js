import G from './3globals.js';
import { commitRoot } from './4commit.js';
import { performUnitOfWork } from './6performUnitOfWork.js';

function workLoop(deadline) {
  let shouldYield = false
  while (G.nextUnitOfWork && !shouldYield) {
    G.nextUnitOfWork = performUnitOfWork(
      G.nextUnitOfWork
    )
    shouldYield = deadline.timeRemaining() < 1
  }

  if (!G.nextUnitOfWork && G.wipRoot) {
    commitRoot()
  }

  requestIdleCallback(workLoop)
}

export { workLoop };