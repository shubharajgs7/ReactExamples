import { useState } from "react";


export default function State() {
const [count, setCount] = useState(0)
  let changeState = () => {
    
    setCount(count+1)
  };
  return (
    <>
      <div>{count}</div>
      <button  onClick={changeState}>Increment Here</button>
      {console.log("hi",count)}
    </>
  );
}
