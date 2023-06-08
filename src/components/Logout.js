import React from "react"

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
} // deletes the token by setting changing the expiry date of it to the date given when the button is pressed

export default Logout