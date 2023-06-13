//Import React, useState & useEffect for rendering API data
//Import React Router Dom for 

import React from "react";
import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/home";
import Account from "./pages/account"
import {authCheck} from "./utils/index.js"
import {getCookie} from "./common/index.js"
import logo from "./image/shodeon.jpeg"
import FacebookLogo from "./image/Facebook Logo.png"
import InstagramLogo from "./image/Instagram Logo.png"
import TwitterLogo from "./image/Twitter logo.png"
import "./Master.css"

// const [filmPic, setFilmPic] = useState([])
function changeShade() {
  let grey = document.getElementById('rangeGrey').value;
 
  let color = 'rgb('+ grey + ',' + grey + ',' + grey + ')';
  document.body.style.backgroundColor = color;
 
  if (grey > 128)
  {
    //document.body.style.color = 'rgba(0,0,0,1.0)';
    document.getElementsByClassName("colortext")[0].style.color = 'rgba(0,0,0)';
    
  }
  else
  {
    //document.body.style.color = 'rgba(255,255,255,1.0';
    document.getElementsByClassName("colortext")[0].style.color = 'rgba(255,255,255)';
  }
  
 }

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
  
 
  const [searchTerm, setSearchTerm] = useState("")
  const [movieData, setMovieData] = useState()
  const [movieSearchResult, setMovieSearchResult] = useState()
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
      // console.log(result);
      setMovieSearchResult(result.results)
    } catch (error) {
      console.error(error);
    }
  }
    
//React Router DOM layout for our routes.
  return (
    <BrowserRouter>

      <img className="Logo" src={logo} alt="Company Logo"></img>
      

      

    {/* Linking specific routes to specific paths */}
    <div className="navigationLinksHome">
    <Link to="/">Homepage</Link>
    </div>
    <div className="navigationLinksAccount">
    <Link to="/account">Account</Link>
    </div>
    
   
    
    {/*Light Slider*/}
    
    <div id="SliderBar">
    <h2 className = "colortext">Slide to choose dark/light Mode---<span id ="colorOutput"></span></h2>
    {/* <libel>grey: </libel> */}
    <input type="range" id="rangeGrey" class ="slider" defaultValue="128" min="0" max="255" onChange={() => changeShade() }/>
    </div>

    {/* Specifying the paths and associating them with various files to display different pages */}
    <Routes>

      <Route path="/" element={<HomePage movieData={movieData} movieSearchResult={movieSearchResult} apiFetch={apiFetch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />

      <Route path="/account" element={<Account></Account>}></Route>
    </Routes>


    <div className="SocialMediaLinks">
      <a href="https://www.facebook.com/login/" target="_blank" >
        <img src={FacebookLogo} alt="Facebook Logo"></img>
      </a>
      <a href="https://www.instagram.com/accounts/login/" target="_blank" >
        <img src={InstagramLogo} alt="Instagram logo"></img>
      </a>
      <a href="https://twitter.com/i/flow/login" target="_blank" >
        <img src={TwitterLogo} alt="Instagram logo"></img>
      </a>
  
    </div>

    </BrowserRouter>  

    
  );
};

export default App;