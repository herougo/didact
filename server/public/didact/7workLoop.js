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

  // avoid committing in the middle of figuring what to commit
  const isInMiddleOfWork = G.nextUnitOfWork;
  const hasChangesToCommit = G.wipRoot;
  if (!isInMiddleOfWork && hasChangesToCommit) {
    commitRoot()
  }

  requestIdleCallback(workLoop)
}

export { workLoop };