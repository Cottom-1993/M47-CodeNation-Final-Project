import React from "react";

const HomePage = (props) => {
    return (
        <div className="search">
        <input
            placeholder="search for a film"
            onChange={(event) => props.setSearchTerm(event.target.value)}
        />
        <button onClick={() => props.apiFetch(props.searchTerm)}>
            Click to search for a film
        </button>
        <div>
          {props.movieData?.length > 0
              ?(
  
                 props.movieData.map((movie)=>(
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
    )
}

export default HomePage;