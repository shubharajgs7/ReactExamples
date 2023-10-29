import React from "react";
import Recurrsion from "./Recurrsion";

const App = () => {
  const Family = {
    name: "Harris",
    age: "90",
    children: [
      {
        name: "Chris",
        age: "30",
        children: [
          {
            name: "Ronaldo",
            age: "10",
            children: []
          },
          {
            name: "Messi",
            age: "10",
            children: []
          }
        ]
      },
      {
        name: "Brown",
        age: "40",
        children: [
          {
            name: "Kaan",
            age: "25",
            children: [
              {
                name: "Parris",
                age: "30",
                children: [
                  {
                    name: "Hels",
                    age: "40",
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  return (
    <div >
      <Recurrsion Family={Family} />
    </div>
  );
};

export default App;
