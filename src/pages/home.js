import React from "react";

//Home function which defines the layout of our applications Homepage

//Input bar to search for a title and button to access the APIFetch function
//and get the required data


//CAROUSEL FUNCTIONALITY TO BE ADDED IN PLACE OF LINES 25-30. LISTING IMAGES RATHER THAN TEXT
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