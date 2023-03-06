// npm init ---> package.json
// installing bundler --> parcel --> zero config --> npm install -D parcel
// npm install react
// npm install react-dom
// What parcel do for us
//1. creating a server
//2. Hot Module Replacement
//3. File watcher algorithm --> written in C++
//4. Bundling
//5. Minify our code // works while production/build
//6. Compress our code // works while production/build
//7. Development and Production Build
//8. Super Fast Build algorithm
//9. Media Optimization
//10. Caching while development
//11. Zero Config
//12. Tree shaking __> Removing unwanted code from other librarries used
//13. Transitive Dependencies

// Array.reduce() --> ES6
// pollyfill --> Babel
// 2010 -- > Array.reduce() ❌

// import React from "react";
import ReactDOM from "react-dom/client";
import { createElement as r } from "react";

// const heading1 = React.createElement(
//   "h2",
//   {
//     id: "heading",
//   },
//   "Welcome to the world of NextJS"
// );
// console.log("I am a console.log(). Give me some space");

// // object ---> React Dom (HTML)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading1);
// const list1 = React.createElement("li", { id: "Riya-1" }, "Riya Tiwari");
// const list2 = React.createElement("li", { id: "Riya-2" }, "Riya Tiwari");
// const list3 = React.createElement("li", { id: "Riya-3" }, "Riya Tiwari");
// const list4 = React.createElement("li", { id: "Riya-4" }, "Riya Tiwari");

// const ul = React.createElement("ul", { id: "RiyaList" }, [
//   list1,
//   list2,
//   list3,
//   list4,
// ]);

// const div = React.createElement('div',{id:'divContainer'},ul);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(div);

// const list1 = React.createElement("li", { id: "Riya-1" }, "Riya Tiwari");
// const list2 = React.createElement("li", { id: "Riya-2" }, "Riya Tiwari");
// const list3 = React.createElement("li", { id: "Riya-3" }, "Riya Tiwari");
// const list4 = React.createElement("li", { id: "Riya-4" }, "Riya Tiwari");

// const div = React.createElement('div',{id:'divContainer'}, React.createElement("ul", { id: "RiyaList" }, [
//   React.createElement("li", { id: "Riya-1" }, "Riya Tiwari"),
//   React.createElement("li", { id: "Riya-2" }, "Riya Tiwari"),
//   React.createElement("li", { id: "Riya-3" }, "Riya Tiwari"),
//   React.createElement("li", { id: "Riya-4" }, "Riya Tiwari"),
// ]));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   r(
//     "div",
//     { id: "divContainer" },
//     r("ul", { id: "RiyaList" }, [
//       r("li", { id: "Riya-1" }, "Riya Tiwari"),
//       r("li", { id: "Riya-2" }, "Riya Tiwari"),
//       r("li", { id: "Riya-3" }, "Riya Tiwari"),
//       r("li", { id: "Riya-4" }, "Riya Tiwari"),
//     ])
//   )
// );

{
  /* <div>
  <ul>
    <li>Riya Tiwari</li>
    <li>Riya Tiwari</li>
    <li>Riya Tiwari</li>
    <li>Riya Tiwari</li>
  </ul>
</div> */
}

//JSX --> JavaScript XML

// const heading1 = React.createElement(
//   "h2",
//   {
//     id: "heading",
//   },
//   "Welcome to the world of NextJS"
// );

// const heading2 = (
//   <h2 id="heading2" className="Riyakiclass">
//     "Welcome to the world of NextJS"
//   </h2>
// ); //JSX
// console.log(heading2);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading2);

// //React component

// const xyz = () => {
//   return "xyx";
// };
// const vvb = () => "xych";
// const Comp2 = () => {
//   return (
//     <div>
//       <ul>
//         <li>Laxmi Jaishi </li>
//         <li>Laxmi Jaishi </li>
//         <li>Laxmi Jaishi </li>
//         <li>Laxmi Jaishi </li>
//       </ul>
//     </div>
//   );
// };

// const Comp1 = () => {
//   return (
//     <div>
//       <ul>
//         {heading2}
//         {/* {<Comp2 />} */}
//         {Comp2()}
//         <li>Riya Tiwari 420 </li>
//         <li>Riya Tiwari</li>
//         <li>Riya Tiwari</li>
//         <li>Riya Tiwari</li>
//       </ul>
//     </div>
//   );
// };

// root.render(<Comp1 />);

// < Comp1 />
// Comp()
// <Comp1></Comp1>

// JSX---> React.createElement() (Babel)
// React.createElement --> {} ---> HTML (ReactDom)

const list001 = <li>List-001</li>;
const list002 = <li>List-002</li>;

const Data = () => (
  <ul>
    {list001}
    <li>List-002</li>
  </ul>
);

console.log(Data);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Data />);
