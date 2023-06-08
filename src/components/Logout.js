import React from "react"
import {useState} from "react"

const Logout = () => {

    const submitHandler = async () => {
        let name = "jwt_token"
        document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <button type="submit">Logout</button>
            </form>
        </div>
    )
}

export default Logout