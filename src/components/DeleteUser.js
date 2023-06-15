import React from "react";
import { useState } from "react";
import { deleteUser } from "../utils/index";
import "../Master.css"

const DeleteUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = async () => {
    try {
      await deleteUser(username, password);
      setDeleted(true);
      setError(false);
    } catch (error) {
      setDeleted(false);
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="delete">
      <h2>Please enter the required details below to delete your account</h2>

      <form onSubmit={submitHandler}>
        <label> Username:
          <input onChange={(event) => setUsername(event.target.value)} required></input>
        </label>

        <br />

        <label> Password:
          <input type="password" onChange={(event) => setPassword(event.target.value)} required ></input>
        </label>

        <br />

        <button type="submit">Delete account</button>
      </form>

      {deleted && <h3>Account successfully deleted.</h3>}
      {error && <h3>Failed to delete account. Please try again.</h3>}
    </div>
  );
};

export default DeleteUser;