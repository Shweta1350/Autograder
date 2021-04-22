import React from "react";
import loginImg from "../src/images/login1.png";
import './index.css';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
      
        <div className="content">
          <div className="logimage">
            <img className="Regimg" src={loginImg} />
          </div>
           <form>
          
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Username :</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="@Username" />
          </div>
         
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
            Register
          </button>
        </div>
      </div>
    );
  }
}


