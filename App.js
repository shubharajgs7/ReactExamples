import { useState } from "react";
import "./styles.css";
import Todos from "./Todos";

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    "goingGym",
    "cycling",
    "running",
    "skipping",
    "jogging"
  ]);
  const increment=()=>{
              setCount(count+1);
  }
  return (
    <div className="App">
      <Todos />
      <div>{count}</div>
      <button onClick={increment}>ClickHERE</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
