import React from "react"
import {useState} from "react"
import {logoutUser} from "../utils/index.js"

const Logout = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        logoutUser(username, password)
    }
    return (
        <div></div>
    )
}

export default Logout