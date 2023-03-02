import React from "react";
import ReactDOM from "react-dom";

<div id="container">
        <h1 id="title1">Heading One</h1>
        <h1 id="title2">Heading Two</h1>
</div> 

const heading1 = React.createElement("h1", {
    id : "title1",
}, "Heading One.")

const heading2 = React.createElement("h2", {
    id : "title2",
}, "Heading Two.")

const container = React.createElement("div", {
    id: "container"
}, [heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)