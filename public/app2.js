import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";

const elm = () =>
  React.createElement("h1", { className: "greeting" }, "Application 2");

export const navBar = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: elm,
  domElementGetter,
});

function domElementGetter() {
  return document.getElementsByClassName("container")?.[0];
}
