import React, { useEffect, useState } from "react";
import HigherOrder from "./HigherOrder";

function Users({data}) {

  return (
    <div>
       <h1>USER</h1> 
      {data.map((e, index) => {
        return (
          <p key={index}>
            {e.name}
          </p>
        );
      })}
    </div>
  );
}


const userData = HigherOrder("User", Users, `users`)

export default userData
