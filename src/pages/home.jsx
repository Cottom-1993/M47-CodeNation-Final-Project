
const HomePage = () => {
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
    )
}

export default HomePage;