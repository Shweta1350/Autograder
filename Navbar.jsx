import React from 'react';
import {NavLink} from "react-router-dom";
import './index.css';
import 'antd/dist/antd.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Button, notification, Tooltip } from "antd";
import  SearchOutlined  from '@ant-design/icons';


const openNotification = () => {
  notification.open({
    message: "Predictive Analytics",
    description:
      "Apriori Algorithm Implementation ",
    onClick: () => {
      console.log("Notification Clicked!");
    }
  });
};


const Navbar = () =>  {
	return (
	 <>

	 <div className="container-fluid nav_bg">
	 	<div className='row'>
	 	<div className="col mx-auto">
	 	

	 
    <nav className="navbar navbar-light navbar-custom navbar-expand-xl" style={{backgroundColor: '#a2d5f2'}}>
  <NavLink className="navbar-brand" to="/" >@Grader</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    

    

    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/Log">
        Login
        </NavLink>
      </li>

      <li className="nav-item active">
        <NavLink activeClassName='menu_active'
        exact className="nav-link" to="/">
        Home 
        <span className="sr-only"></span></NavLink>
      </li>

      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/About">
        Main
        </NavLink>
      </li>

       <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/Contact">
        Classroom
        </NavLink>
      </li>



      <li className="nav-item active">
        <NavLink activeClassName='menu_active'
        exact className="nav-link" to="/Classroom">
          Contact
        <span className="sr-only"></span></NavLink>
      </li>


      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/Service">
        Services
        </NavLink>
      </li>
      
     
       <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/Settings">
       Settings
        </NavLink>
      </li>

    </ul>
  </div>
  
<Tooltip title="notifications">
    <Button
      type="primary" 
      shape="circle"
      icon={<SearchOutlined fill="red" />}
      onClick={openNotification}
    />

  </Tooltip>
   
</nav>

</div>
	 </div>
	  </div>
 	 </>
	)
}

export default Navbar;
