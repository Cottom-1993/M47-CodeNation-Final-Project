import React from "react"


const MovieCard = ({movies}) => {
    // console.log("In MovieCard component")
    console.log(movies)
    return (
        <div className='movie'>
            
            <div>
                <img src={movies.primaryImage !== null ? movies.primaryImage.url : "https://via.placeholder.com/400"} alt="no poster available"/>
            </div>

            <span>{movies.Type}</span>
            <h3>{movies.originalTitleText.text}</h3>
            <div>
                <p>{movies.caption}</p>
            </div>
            
        </div>
    )
}

export default MovieCard