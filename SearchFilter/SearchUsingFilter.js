import { useEffect, useState } from "react";
import "../QuestionStyle/SearchUsingFilters.css";

export default function SearchUsingFilter() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  console.log("result", typeof result);
  console.log(result);
  console.log(search);
  const searchName = (e) => {
    setSearch(e);
  };
  useEffect(() => {
    if(search)
    {
        const shubh = setTimeout(()=>{
            setResult(
                user.filter((e) => {
                  return Object.values(e)
                    .join("")
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase());
                })
              )
        }, 1000);

        return ()=> clearTimeout(shubh)
    }
    else{
        setResult(user)
    }
  }, [search]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);
  return (
    <>
      <h2>Search</h2>
      <input
        type="text"
        name="Search"
        onChange={(e) => searchName(e.target.value)}
        placeholder="Search by name"
      />
      {search.length > 0 ? (
        <h1 className="root">
          {result.map((e) => {
            return (
              <div className="content">
                <p>{e.name}</p>
                <p>{e.email}</p>
              </div>
            );
          })}
        </h1>
      ) : (
        <h1 className="root">
          {user.map((e) => {
            return (
              <div className="content">
                <p>{e.name}</p>
                <p>{e.email}</p>
              </div>
            );
          })}
        </h1>
      )}
    </>
  );
}
