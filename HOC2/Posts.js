import React, { useEffect, useState } from "react";
import HigherOrder from "./HigherOrder";

function Posts({data}) {

  return (
    <div>
       <h1>Post</h1> 
      {data.slice(0,10).map((e, index) => {
        return (
          <p key={index}>
            {e.title}
          </p>
        );
      })}
    </div>
  );
}

const postData = HigherOrder("Posts", Posts, `posts`)

export default postData
