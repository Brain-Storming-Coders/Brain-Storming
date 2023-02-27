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

// BUNDLERS alternatives - Webpack, Vite, Parcel 
// NPM - Nhi Peeni Mujhe, Nhi Pta Manager
// -D development dependency 
// Node modules in our machine can be regenerated in our server using package-lok.json file.

// Beauty of Parcel
// Hot Module Replacement (HMR)
// A file watcher algorithm written in C++
// Bundling and minifying code, Compression
// Cleaning our code 
// Tree shaking!
// Media/Image Optimization
// Caching while development only.
// Browser compatibility 

// Parcel is BEAST 🔥 Finally!

// Transitive dependencies.

// npx create-react-app my-app, webpack bundler with babel.

