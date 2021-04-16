import React from 'react';
import ClassNames from "./App.module.scss"
import Header from './DefaultLayout/Header/Header';
import Footer from "./DefaultLayout/Footer/Footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutUs from "./Pages/AboutUs/index";
import Locations from "./Pages/Locations/index"
import Careers from './Pages/Careers';


const App = () => {
  return (
    <Router>
      <div className={ClassNames.AppContainer}>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} name="HomePage" />
            <Route path="/about-us/" exact component={AboutUs} name="AboutUs" />
            <Route path="/locations/" exact component={Locations} name="Locations" />
            <Route path="/careers/" exact component={Careers} name="Careers" />
          </Switch>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;