import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id :"parent"},
  [React.createElement("div",{id :"child"},
    [React.createElement("h1",{}, "i am an h1 element"),React.createElement("h2",{}, "i am an h2 element")]),React.createElement("div",{id :"child"},
      [React.createElement("h1",{}, "i am an h1 element"),React.createElement("h2",{}, "i am an h2 element")])]); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);