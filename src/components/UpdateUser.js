import React from "react";
import { useState } from "react";
import { updateUser } from "../utils/index";
import "../Master.css"

const UpdateUser = () => {
    const [username, setUsername] = useState()
    const [newPassword, setNewPassword] = useState()
    const [updated, setUpdated] = useState(false);
    const [error, setError] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault()
        try {
            await updateUser(username, newPassword);
            setUpdated(true);
            setError(false);
          } catch (error) {
            setUpdated(false);
            setError(true);
            console.log(error);
          }
        };

    return (
        <div className="Update">
            <h2>Update Password:</h2>
            <form onSubmit={submitHandler}>
                <label>Confirm Username:
                    <input onChange={(event) => setUsername(event.target.value)} required></input>
                </label>
                <br></br>
                <label> New Password:
                    <input type="password" onChange={(event) => setNewPassword(event.target.value)} required></input>
                </label>
                <br></br>

                <button type="submit">Update</button>
            </form>

            {updated && <h3>Password successfully updated</h3>}
            {error && <h3>Failed to update. Please try again and check their your details are correct</h3>}
        </div>
    )
}

export default UpdateUser