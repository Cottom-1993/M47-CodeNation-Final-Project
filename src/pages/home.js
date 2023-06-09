import "../Master.css"
//Home function which defines the layout of our applications Homepage

//Input bar to search for a title and button to access the APIFetch function
//and get the required data

//Carousel to scroll through latest upcoming but unreleased films

import React from "react";
import './home.css';
import { useState } from "react";


const HomePage = (props) => {
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

    <div className="search">
      <input
        placeholder="search for a film"
        onChange={(event) => props.setSearchTerm(event.target.value)}
      />
      <button onClick={() => props.apiFetch(props.searchTerm)}>
        Click to search for a film
      </button>

      
      <div className="carousel-container">
        {props.movieData?.length > 0
          ? (
              props.movieData.map((movie) => (
                <div className="movieItem" key={movie.id} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  <div className="carouselImage">
                    <img alt="filmImage" src={movie.primaryImage !== null ? movie.primaryImage.url : "https://via.placeholder.com/400"} />
                    <h5>{movie.originalTitleText.text}</h5>
                  </div>

                  <div id="buttonarrow">
                    <button onClick={carouselScrollLeft}> &#8592; </button>
                   
                    <button onClick={carouselScrollRight}> &#8594; </button>
                  </div>
                </div>

              ))
          ) : (
            <h2>No Movies found</h2>
          )

        }
      </div>
    </div>
  )
}

export default HomePage;