import {writeCookie} from "../common/index.js"

const apiFetch = async (searchTerm) => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles/search/akas/${searchTerm}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`, // your api key goes here
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  export const registerUser = async (username, password, email, newUser) => {
    try {
      const response = await fetch("http://localhost:5001/users/register", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          "username": username,
          "password": password,
          "email": email
        })
      })
      const data = await response.json()
      console.log(data)
      newUser(data.user)
    } catch (error) {
      console.log(error)
    }
  }

  export const loginUser = async (username, password, newUser) => {
    try {
      const response = await fetch("http://localhost:5001/users/login", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          "username": username,
          "password": password
        })
      })
      const data = await response.json()
      console.log(data.token)
      writeCookie("jwt_token", data.token, 7)
      newUser(data.user)
    } catch (error) {
      console.log(error)
    }
  }

  export const readUsers = async () => {
    try {
      const response = await fetch("http://localhost:5001/users/readUsers", {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        }
      })
      const data = await response.json()
      const usernames = data.users.map(users => users.username)
      return usernames
    } catch (error) {
      console.log(error)
    }
  }

  export const authCheck = async (token) => {
    try {
      console.log(token)
      const response = await fetch ("http://localhost:5001/users/authCheck", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        }
      })
      const data = await response.json()
      return data.user.user
    } catch (error) {
      console.log(error)
    }
  }

  export const updateUser = async (username, newPassword) => {
    try {
      const response = await fetch ("http://localhost:5001/users/updateUser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": username,
          "newPassword": newPassword
        }),
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  export const deleteUser = async (username) => {
    try {
      const response = await fetch ("http://localhost:5001/users/deleteUser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": username
        }),
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }