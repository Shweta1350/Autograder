import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './index.css';
import {NavLink} from "react-router-dom";
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import web from "../src/images/img2.png";
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';



import FadeIn from 'react-fade-in'

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}


const Home =() => {
  return (
    <>
    <section id="header" className=" d-flex align-items-center ">
    <div className="container-fluid nav_bg">
	 	<div className='row'>
	 	<div className="col-10 mx-auto">
	 	<div className="row ">
	 	
	 	<div className="col-md-6 pt-lg-0 oreder-2 order-lg-1">
	 	<div className="tag">
    	<Bounce left>
          <h1 style={{ fontFamily: "DejaVu Sans Mono, monospace",fontSize: "56px"}}> <strong>Grading at Ease </strong>
	 	</h1>
        </Bounce>
    	<h3> Your Assessment Guide</h3>

  		</div>
	 	
	 	<p>We provide assessment solutions and follow best grading practices</p>
	 	<p className="my-3 para">
	 	Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled 
	 	</p>

	 	<div className="mt-3">

	 	 <NavLink  to="./" className="btn-get-started btn-sm " >
	 	<button type="button" style={{position:'relative',top:'-551px',left:'120px'}} class="btn btn-outline-primary rounded-pill btn-sm">Sign Up</button>
	 	 </NavLink>

	 	 <NavLink  to="./" className="btn-get-started btn-lg  " >
	 	<button type="button" style={{position:'relative',top:'-550px',left:'-78px'}} class="btn btn-outline-primary rounded-pill btn-sm" >Login</button>
	 	 </NavLink>
	 	 </div>
	 	</div>
    
</div>
	 </div>
	 </div>
	 </div>
    </section>
    </>
    );
};

export default Home;
