import React from "react";
import {useState} from 'react'



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

//Light Toggle Function



function changeShade() {
  let grey = document.getElementById('rangeGrey').value;
 
  let color = 'rgb('+ grey + ',' + grey + ',' + grey + ')';
  document.body.style.backgroundColor = color;
 
  if (grey > 128)
  {
    //document.body.style.color = 'rgba(0,0,0,1.0)';
    document.getElementById("colortext").style.color = 'rgba(0,0,0)';
    
  }
  else
  {
    //document.body.style.color = 'rgba(255,255,255,1.0';
    document.getElementById("colortext").style.color = 'rgba(255,255,255)';
  }
  
 }





const App = () => { 

  const [searchTerm, setSearchTerm] = useState("")

 

  return (
    <div className="search">
    <input
        placeholde="search for a film"
        onChange={(event) => setSearchTerm(event.target.value)}
    />
    <button onClick={() => apiFetch(searchTerm)}>
        Click to search for a film
    </button>
   
    

{/*Light Slider*/}
<h2 id = "colortext">Select Shade<span id ="colorOutput"></span></h2>
<libel>grey: </libel>
<input type="range" id="rangeGrey" class ="slider" defaultValue="128" min="0" max="255" onChange={() => changeShade() }/>

  </div>
  
  );
};

export default App;
