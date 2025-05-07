import Counter from "./Counter.js";
import Didact from "./didact/index.js";

const element = Didact.createElement(Counter, {});
const container = document.getElementById("root");
Didact.render(element, container);
