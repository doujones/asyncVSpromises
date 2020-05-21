import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function App1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersPromise();
  }, []);

  const fetchUsersPromise = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(e => console.log(e));
  };

  const fetchUsersAsync = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    } catch (e) {
      console.log(e);
    }
  };

  console.log(users);

  return (
    <div className="App">
      <h1>Hello CodeSandBox</h1>
      <h2>Start editing</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App1 />, rootElement);
