import "./App.css";
// import PropTypes from 'prop-types'
import { useState } from "react";


import React from "react";
import  Navigation  from "./components/Navigation";
import News from "./components/News";
import {  Route, Routes, BrowserRouter } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

 const App = (props)=> {
  const apiKey = process.env.REACT_APP_NEWSAPP_API;
  // const apiKey = "380b62410de9465cbb3731ca4c7868ee";
  const [progress, setProgress] = useState(0);

  
 
    return (
      <div>
        
        <BrowserRouter>
          <Navigation />
          <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
      
        />
        
          <Routes>
            <Route
              exact path="/"
              element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={6} key='home' category="general" />}
            />
            <Route
              exact path="/business"
              element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={6} key='business' category="business" />}
            />
            <Route
              exact path="/entertainment"
              element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={6} key='entertainment' category="entertainment" />}
            />
          
            <Route
              exact path="/health"
              element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={6} key='health' category="health" />}
            />
            <Route
              exact path="/science"
              element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={6} key='science' category="science" />}
            />
            <Route
              exact path="/sports"
              element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={6} key='sports' category="sports" />}
            />
            <Route
              exact path="/technology"
              element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={6} key='technology' category="technology" />}
            />
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
export default App;
