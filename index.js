import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";


ReactDOM.render(
  <>

  <BrowserRouter>
    <App />
   </BrowserRouter>
   
  </>,
  document.getElementById('root')
);

