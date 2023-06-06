import React from 'react';
//PAGE TO CREATE FUNCTIONALITY OF THE CAROUSEL


//Access API Data: Upcming Titles
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
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

console.log(upcomingMovies)
//Access Api data in a variable
const apiData = await upcomingMovies.json();


//code for creating carousel
// const Carousel = apiData.map({}) => {

// }
// return {

// }

//Code for scrolling right on the carousel- TO BE UPDATED FOR THIS APP
  const carouselScrollRight = () => {
    if (currentIndex === catPics.length-1){
      setCurrentIndex(0)
    }else{
      setCurrentIndex(currentIndex +1)
    }
  }

  //Code for scrolling left on the carousel- TO BE UPDATED FOR THIS APP
  const carouselScrollLeft = () => {
    if (currentIndex === 0){
      setCurrentIndex(catPics.length-1)
    }else{
      setCurrentIndex(currentIndex -1)
    }
  }


export default Carousel