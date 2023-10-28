import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RestApi() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const getName = (e) => {
    setName(e.target.value);
  };
  const PostData = () => {
    axios
      .post("https://63394e6d937ea77bfdc905fb.mockapi.io/users", {
        name: name,
        age: 23,
        hobbies: ["cricket", "batminton", "volleyball"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    axios
      .get(`https://63394e6d937ea77bfdc905fb.mockapi.io/users`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const GetUpdate = (id) => {
    axios.put(`https://63394e6d937ea77bfdc905fb.mockapi.io/users/${id}`, {
      name: name,
      age: 23,
      hobbies: ["cricket", "batminton", "volleyball"],
    });
  };

  const GetDelete=(id)=>{
    axios.delete (`https://63394e6d937ea77bfdc905fb.mockapi.io/users/${id}`)
    .then((res)=>{
        console.log(res)
  }).catch((err)=>{
    console.error(err)
  })}

  return (
    <>
      <input type={"text"} onChange={getName} />
      <button onClick={PostData}>PostData</button>
      {data.map((e) => {
        return (
          <>
            <p>{e.name}</p>
            <span>
              {" "}
              <button onClick={()=>GetDelete(e.id)}>Delete</button>
              <button onClick={()=>GetUpdate(e.id)}>Update</button>
            </span>
          </>
        );
      })}
    </>
  );
}
