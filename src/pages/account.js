import React from "react";
import {useEffect} from 'react'
import ReadUsers from "../components/ReadUsers"
import UpdateUser from "../components/UpdateUser"
import DeleteUser from "../components/DeleteUser"
import Logout from "../components/Logout"
import {authCheck} from "../utils/index.js"
import {getCookie} from "../common/index.js"
import "../Master.css"

const Account = ({user,setUser}) => { 
    // const [user, setUser] = useState();

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
            <h1 className="accountpage">Welcome to the Account page!</h1>


            {user ?
                <>
                    <h2 id="UserList">Hello {user}!</h2>
                    <ReadUsers></ReadUsers>
                    <UpdateUser></UpdateUser>
                    <DeleteUser></DeleteUser>
                    <Logout></Logout>
                </>
                :
                null
            }
        </div>
    );
}

export default Account;