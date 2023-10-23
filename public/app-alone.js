import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(
  document.getElementsByClassName("container")?.[0]
);
const elm = () =>
  React.createElement("h1", { className: "greeting" }, "Application 3");
root.render(elm());

export default elm;
