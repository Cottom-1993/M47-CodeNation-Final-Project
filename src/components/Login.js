import React from "react"
import {useState} from "react"
import {loginUser} from "../utils/index.js"

const Login = ({newUser}) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        loginUser(username, password, newUser)
    }
    return (
        <div className="Login">
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