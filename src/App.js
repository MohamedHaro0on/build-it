import React from 'react';
import ClassNames from "./App.module.scss"
import Header from './DefaultLayout/Header';
import Footer from "./DefaultLayout/Footer/index";
import {Route , BrowserRouter as Router} from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutUs from "./Pages/AboutUs/index";
import Locations from "./Pages/Locations/index"


function App() {
  return (
    <Router>
      <div className = {ClassNames.AppContainer}>
        <Header/>
            <main>
              <Route path = "/" exact component = {HomePage} name = "HomePage"/>
              <Route path = "/about-us" exact component = {AboutUs} name = "AboutUs"/>
              <Route path = "/locations" exact component = {Locations} name = "AboutUs"/>
            </main>
        </div>
        <Footer/>
    </Router>
  );
}

export default App;