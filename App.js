
import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import main from './main';
import Log from './Log';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Classroom from './Classroom';
import BannerImage from './BannerImage';
import Settings from './Settings';

import {Switch, Route, Redirect} from "react-router-dom";

const App =() => {
  return (
    <>
    <Navbar />
    <main />
   
    <Switch>
    <Route exact path="/"  component={main} />
    <Route exact path="/About"  component={About} />
    <Route exact path="/Service"  component={Service} />
    <Route exact path="/Contact"  component={Contact} />
    <Route exact path="/Log"  component={Log} />
    <Route exact path="/Classroom"  component={Classroom} />
     <Route exact path="/Settings"  component={Settings} />
    <Redirect to="/" />
      
    </Switch>
    </>
    );
};

export default App;
