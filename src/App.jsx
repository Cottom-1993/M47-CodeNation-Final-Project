import React from "react";
import {useState, useEffect} from 'react'
// const [filmPic, setFilmPic] = useState([])

//Access API data for search term input box
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




const App = () => { 

  const [searchTerm, setSearchTerm] = useState("")
  const [movieData, setMovieData] = useState()
  useEffect (() => {
    upcomingMovies()
  },[])
  
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
    


  return (
    <div className="search">
    <input
        placeholder="search for a film"
        onChange={(event) => setSearchTerm(event.target.value)}
    />
    <button onClick={() => apiFetch(searchTerm)}>
        Click to search for a film
    </button>
    <div>
      {movieData?.length > 0
          ?(
            
              movieData.map((movie)=>(
                <h1>{movie.originalTitleText.text}</h1>
              ))
            
          ) : (
            <h2>No Movies found</h2>
          )

      }
    </div>
    {/* //  <div className="carousel">
    //   <img alt="filmimage" src={primaryImage.url}/>
    //   <p>{titleText} </p>
    //   <p> {releaseDate} </p>
    // </div> */}

    {/* <div id='buttonarrow'>
      <button onClick={carouselScrollLeft}> &#8592; </button>
      <button onClick={carouselScrollRight}> &#8594; </button>
     </div>  */}

  </div>


  
  );
};



export default App;
