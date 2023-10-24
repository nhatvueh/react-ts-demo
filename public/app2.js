import React from "react";
import ReactDOMClient from "react-dom";
import singleSpaReact from "single-spa-react";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: () =>
    React.createElement("h1", { className: "app2" }, "Application 2"),
  domElementGetter: () => document.getElementById("app2"),
  errorBoundary: (err, info, props) =>
    React.createElement(
      "h1",
      { className: "error" },
      JSON.stringify({ err, info, props })
    ),
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

export default { bootstrap, mount, unmount };
