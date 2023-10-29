import React from "react";
import { userData } from "./useJSONPlaceholder";
const App = () => {
  const { users, posts } = userData();
  return (
    <>
      <div
        style={{ display: "flex", margin: "0 auto", justifyContent: "center",flexDirection:"column" }}
      >
        <h1>USERS</h1>
        <div>
          {users.map((i) => {
            return (
              <ul>
                <li>{i.username}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div
        style={{ display: "flex", margin: "0 auto", justifyContent: "center",flexDirection:'column' }}
      >
        <h1>POSTS</h1>
        <div>
          {posts.map((i) => {
            return (
              <ul>
                <li>{i.title}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
