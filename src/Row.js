import React,  {useState,useEffect}  from 'react';
import "./Row.css";
import axios from './axios';
const image_base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {

  const [movies, setMovies] = useState([]);

  useEffect( ()=>{
//when this information shows up in other words when the information comes then do 
//the effect of fetching data from the API[]

// this function provides data in real time 
async function fectchData (){
  // this tells the function that wait until you have received the data
  const request = await axios.get(fetchUrl);
  
  setMovies(request.data.results);
  return request;
}
fectchData();
//fetch url is outside the blockwe need to tell useeffect so that can reload so that becuase its alwasy changing
  },[fetchUrl])
  console.log(movies);
  return (
    <div>

{/* Title*/}

      <div className="row">

       <h2>{title}</h2>
          <div className="row_posters">
            {/* several row_posters*/}

            {movies.map(movie => (
              <img src={`${image_base_url}${movie.poster_path}`}
              key={movie.id}
               className='row_poster'
               alt="movie.name" />

            ))}
          </div>
      </div>

{/* // posters as well*/}



    </div>
  )
}

export default Row;