import React, { useState } from "react";
import PropsChild from "./PropsChild";

export default function Props() {
  const [name, setName] = useState("Shubharaj");
console.log("Name",name)
  const nameChange = (e) => {
    setName(e);
  };
  return (
    <div>
      <div>{name}</div>
      <PropsChild name={name} nameChange={nameChange} />
    </div>
  );
}
