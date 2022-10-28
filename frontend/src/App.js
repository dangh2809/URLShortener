import logo from './logo.svg';
//import './App.css';
import React, {Component, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import HomePage from './components/HomePage';

import ResultPage from './components/ResultPage';

function App() {
  // const [longURL, setLongURL] = useState("");
  // const [shortURL, setShortURL] = useState("");
  // const updateLongURL = (url) =>{
  //   setLongURL(url);
  // }
  // callbackFunction = (url) =>{
  //   setLongURL(url);
  // }
  // const updateShortURL = (url) =>{
  //   setShortURL(url);
  // }
  //const [clicks, setClicks] = useState(0);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} exact>
      </Route>
      <Route path="/resultPage" element={<ResultPage />} exact>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
