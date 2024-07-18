import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is h1"),
    React.createElement("h2", {}, "This is h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "This is h1 inside child2"),
    React.createElement("h2", {}, "This is h2 inside child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
setTimeout(() => {
  root.render(parent);
}, 1000);
