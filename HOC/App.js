import { useState } from "react";
import "./styles.css";
import HOC from "./Hoc";

function App({ details }) {
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>My name is {details.name} </p>
      <p>Im working as an {details.role} </p>
      <p>at {details.company} </p>
    </div>
  );
}

export default HOC(App);
