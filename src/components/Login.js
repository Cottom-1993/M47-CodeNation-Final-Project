import React from "react"
import {useState} from "react"
import {loginUser} from "../utils/index.js"
import "../Master.css"

const Login = ({newUser}) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        loginUser(username, password, newUser)
    }
    return (
        <div className="Login">
            <h2>Please Login Here</h2>
            <form onSubmit={submitHandler}>
                <label>Username:
                    <input onChange={(event) => setUsername(event.target.value)}></input>
                </label>
                <br></br>
                <label>Password:
                <input type="password" onChange={(event) => setPassword(event.target.value)}></input>
                </label>
                <br></br>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login