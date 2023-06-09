
//Home function which defines the layout of our applications Homepage

//Input bar to search for a title and button to access the APIFetch function
//and get the required data

//Carousel to scroll through latest upcoming but unreleased films
import "../Master.css"
import React from "react";
import './home.css';
import MovieCard from '../components/MovieCard'
import { useState } from "react";
import Login from "../components/Login"
import Register from "../components/Register"
import Account from "./account"
import Logout from "../components/Logout"

const HomePage = (props) => {
  // console.log("In Homepage component")
  // console.log(props.movieSearchResult)
  const [currentIndex, setCurrentIndex] = useState(0);



   //Code for scrolling right on the carousel
  const carouselScrollRight = () => {
    if (currentIndex === props.movieData.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  //Code for scrolling left on the carousel
  const carouselScrollLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.movieData.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }



  return (
  //Search functionality, connecting to the API through the apiFetch function in "App" file (in Div with classNmae "search")
  //Carousel functionality, connecting to the Upcoming Movies function in Home to get API data. Accessing scroll functions displayed above via the buttons.
  <div>
    <div className="search">
      <div id="SearchBar">
        <input
        placeholder="search for a film"
        
        onChange={(event) => props.setSearchTerm(event.target.value)}
        />
        <button onClick={() => props.apiFetch(props.searchTerm)}>
         Click to search for a film
          </button>
        </div>

        {props.movieSearchResult?.length > 0 ?
            (
              <div className='container'>
                {props.movieSearchResult.map((movie) => (
                  <MovieCard movies={movie} />
                ))}
              </div>
            ) : (
              <div className="noResults">
                <h3>No movies found</h3>
                </div>
            )
          }
             
             <h1 className="Welcome">Welcome to Shodeon!</h1>
      
      <div className="carousel-container">

         {props.movieData?.length > 0
           ? (
                props.movieData.map((movie) => (
                 <div className="movieItem" key={movie.id} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    <div className="carouselImage">
                      <img alt="filmImage" src={movie.primaryImage !== null ? movie.primaryImage.url : "https://via.placeholder.com/400"} />
                      {/* <img alt="filmImage" src={movie.primaryImage !== null ? movie.primaryImage.url : "https://m.media-amazon.com/images/P/B08WZL1T91.01._SCLZZZZZZZ_SX500_.jpg"} /> */}
                      <h5>{movie.originalTitleText.text}</h5>
                    </div>


                 </div>

               ))
            ) : (
             <h2>No Movies found</h2>
            )
            

          }
          <div id="buttonarrow">
           <button onClick={carouselScrollLeft}> &#8592; </button>

           <button onClick={carouselScrollRight}> &#8594; </button>
          </div>

        </div>
        <div className="Register">
          <Register></Register>
          </div>
          <div className="Login">
          <Login newUser={Account.setUser}></Login>
          </div>
          <div className="Logout">
          <Logout></Logout>
          </div>
          
      </div>
  </div>
  )
}



export default HomePage;