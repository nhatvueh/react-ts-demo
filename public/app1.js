import React from "react";
import ReactDOMClient from "react-dom";
import singleSpaReact from "single-spa-react";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: () =>
    React.createElement("h1", { className: "app1" }, "Application 1"),
  domElementGetter: () => document.getElementById("app1"),
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
