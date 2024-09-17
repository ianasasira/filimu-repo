//import logo from './logo.svg';
//filimu-11d6a-a8d51.web.app
//firebase login
//firebase init
/*
{
  "hosting": {
    "site": "filimu-11d6a-a8d51",

    "public": "public",
    ...
  }
}
firebase deploy --only hosting:filimu-11d6a-a8d51
*/

import './App.css';
import Row from './Row.js';
import { useState, useEffect } from 'react';
import requests from './requests.js';

function App() {


  return (
    <div className="App">
  <h1>Filimu Movies</h1>
     <Row title="NETFLIX ORIGINAL" 
     fetchUrl={requests.fetchNetflixOriginals} 
     isLargeRow=""
     key=""/> 

     <Row title="TopRated" 
     fetchUrl={requests.fetchTopRated} key=""/>

     <Row title="ActionMovies" 
     fetchUrl={requests.fetchActionMovies} key=""/> 

     <Row title="ComedyMovies" 
     fetchUrl={requests.fetchComedyMovies} key=""/> 

     <Row title="HorrorMovies" 
     fetchUrl={requests.fetchHorrorMovies} key=""/> 

     <Row title="RomanceMovies" 
     fetchUrl={requests.fetchRomanceMovies} key=""/>

     <Row title="Documentaries" 
     fetchUrl={requests.fetchDocumentaries} key=""/>

    </div>
  );
}

export default App;
