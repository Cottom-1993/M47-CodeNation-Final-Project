import {writeCookie} from "../common/index.js"

  export const registerUser = async (username, password, email, newUser) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API_URL}register`, {
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
      const response = await fetch(`${process.env.REACT_APP_REST_API_URL}login`, {
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
      const response = await fetch(`${process.env.REACT_APP_REST_API_URL}readUsers`, {
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
      const response = await fetch (`${process.env.REACT_APP_REST_API_URL}authCheck`, {
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
      const response = await fetch (`${process.env.REACT_APP_REST_API_URL}updateUser`, {
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
      const response = await fetch (`${process.env.REACT_APP_REST_API_URL}deleteUser`, {
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
