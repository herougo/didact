import Didact from "./didact/index.js";

function Counter() {
  const [state, setState] = Didact.useState(1)
  /*
  return (
    <h1 onClick={() => setState(c => c + 1)}>
      Count: {state}
    </h1>
  )*/
  return (
    Didact.createElement(
      "h1",
      {
        onClick:() => {
          setState(c => c + 1);
          console.log("onClick");
        }
      },
      `Count: ${state}`
    )
  );
}

export default Counter;