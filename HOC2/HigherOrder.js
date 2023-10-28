import { useState } from "react";
import { useEffect } from "react";

export default function HigherOrder(title, Component, request) {
  return function HOC() {
    const [data, setData] = useState([]);
    const getData = () => {
      fetch(`https://jsonplaceholder.typicode.com/${request}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    };
    useEffect(() => {
      getData();
    }, []);
    return <p></p>
  };
}
