// const element = document.createElement("h1");
// element.innerText = "Hello, Platzi, My Name Is Jhosep.";

// const container = document.getElementById("app");

// container.appendChild(element);

// const element = React.createElement(
//   "a",
//   { href: "https://www.platzi.com" },
//   "Ir a Platzi"
// );

// const name = "Jhosepito";
// const age = () => 10 + 11;

// const element = React.createElement("h1", {}, `hola, soy ${name}`);

// const jsx=<h1>Hola soy {name} y tengo {age()}</h1>

// const jsx = (
//   <div>
//     <h1>Hola, Soy Jhosep</h1>
//     <p>Soy Ingeniero Front-End.</p>
//   </div>
// );

import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import "./styles/Badge.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App"

const container = document.getElementById("app");

//React.DOM.render(__que__,__donde__);
ReactDOM.render(<App />, container);
