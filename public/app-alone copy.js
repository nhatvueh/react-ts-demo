import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(
  document.getElementsByClassName("container")?.[0]
);
const elm = () =>
  React.createElement("h1", { className: "greeting" }, "Application 2");
root.render(elm());

export default elm;
