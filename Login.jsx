import React from "react";
import './index.css';
import loginImg from "../src/images/login2.png"; 
import "./App.scss";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        
        <div className="content">
          <div className="logimage">
            <img  className="loginimg" src={loginImg} />
          </div>
          <form>
              
      <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email :</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email Id" />
          </div>


          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          
        </form>
        </div>
        <div className="footer">
          <button type="button" className="btn1">
            Login
          </button>
        </div>
      </div>
    );
  }
}