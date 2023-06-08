//Import React, useState & useEffect for rendering API data
//Import React Router Dom for 

import React from "react";
import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/home";
import Account from "./pages/account"
import {authCheck} from "./utils/index.js"
import {getCookie} from "./common/index.js"
// const [filmPic, setFilmPic] = useState([])

//Access API data for search term input box

const App = () => { 
  const [user, setUser] = useState()

  useEffect (() => { // if cookie is found, login user automatically
    let cookie = getCookie("jwt_token")

    if(cookie !== false) {
      loginWithToken(cookie)
    }
  }, [])

  const loginWithToken = async (cookie) => {
    let user = await authCheck(cookie)
    setUser(user)
  }
  
  //API function to get movie data for our search bar
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
  const [searchTerm, setSearchTerm] = useState("")
  const [movieData, setMovieData] = useState()
  useEffect (() => {
    upcomingMovies()
  },[])
  

  //API function to access upcoming movie data for our carousel
  const upcomingMovies = async () =>{
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setMovieData(result.results)
    } catch (error) {
      console.error(error);
    }
  }
    
//React Router DOM layout for our routes.
  return (
    <BrowserRouter>

    {/* Linking specific routes to specific paths */}
    <Link to="/home">Homepage</Link>
    <Link to="/account">Account</Link>

    {/* Specifying the paths and associating them with various files to display different pages */}
    <Routes>
      <Route path="/home" element={<HomePage movieData={movieData} apiFetch={apiFetch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
      <Route path="/account" element={<Account></Account>}></Route>
    </Routes>

    </BrowserRouter> 

  );
};

export default App;