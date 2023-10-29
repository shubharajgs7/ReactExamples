import React, { useEffect } from "react";

export default function Zomato() {
  const fnArr =[function a(a,b){
    return a+b
  }, function a(a,b){
    return a-b
  }, function a(a,b){
    return a*b
  },function a(a,b){
    return a/b
  }]
   
  const mainFn=()=>{
    const data=fnArr.map((fn)=>{
        return fn(2, 3)
    })
    console.log(data)
  }
  {
    mainFn();
  }
  return (
    <div>
      Write a function which takes array of multiple fuction and execute them
      one by one in oder from left to right?__by Zomato
    </div>
  );
}
