import React from "react";
import {useState, useEffect} from 'react'
import Login from "../components/Login"
import Register from "../components/Register"
import ReadUsers from "../components/ReadUsers"
import UpdateUser from "../components/UpdateUser"
import DeleteUser from "../components/DeleteUser"
import Logout from "../components/Logout"
import {authCheck} from "../utils/index.js"
import {getCookie} from "../common/index.js"

const Account = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        let cookie = getCookie("jwt_token");
    
        if(cookie !== false) {
          loginWithToken(cookie);
        }
    }, []);
    
    const loginWithToken = async (cookie) => {
        try {
            const user = await authCheck(cookie);
            if (user) {
                setUser(user);
            } else {
                setUser(null); // Set user to null if the token is invalid or authCheck fails
            }
        } catch (error) {
            console.log(error);
            setUser(null); // Set user to null if an error occurs
        }
    };

    return (
        <div>
            <h1>Welcome to the Account page!</h1>
            <Register></Register>
            <Login newUser={setUser}></Login>

            {user ?
                <>
                    <h2>Hello {user.user}!</h2>
                    <ReadUsers></ReadUsers>
                    <UpdateUser></UpdateUser>
                    <DeleteUser></DeleteUser>
                    <Logout></Logout>
                </>
                :
                <h2>Please log in above</h2>
            }
        </div>
    );
}

export default Account;