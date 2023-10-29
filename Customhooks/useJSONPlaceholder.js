import React from "react";
import { useEffect, useState } from "react";

export function userData() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((response) => setUsers(response));
  };
  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((response) => setPosts(response));
  };

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);
  return { users, posts };
}
