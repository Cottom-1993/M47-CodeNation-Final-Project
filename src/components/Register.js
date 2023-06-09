import React from "react"
import {useState} from "react"
import {registerUser} from "../utils/index.js"
import "../Master.css"

const Register = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await registerUser(username, password, email)
    }

    return (
        <div className="Register">
            <h2>Register below</h2>
            <form onSubmit={submitHandler}>
                <label>Username:
                    <input onChange={(event) => setUsername(event.target.value)} required></input>
                </label>
                <br></br>
                <label>Password:
                    <input type="password" onChange={(event) => setPassword(event.target.value)} required></input>
                </label>
                <br></br>
                <label>Email:
                    <input onChange={(event) => setEmail(event.target.value)} required></input>
                </label>
                <br></br>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register