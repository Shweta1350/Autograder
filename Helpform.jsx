import React from 'react';
import ReactDOM from 'react-dom';
import BannerImg from './BannerImg';
import "./App.scss";


export default class Helpform extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
      return (
    <>
   <div>
        
        <section className="section gray-bg" id="contactus">
          <div className="container box">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>We provide assessment solutions and follow best grading practices</p>
                </div>
              </div>
            </div>
            <div className="row flex-row-reverse">
              <div className="col-md-7 col-lg-8 m-15px-tb">
                <div className="contact-form">
                  <form action="/" method="post" className="contactform contact_form" id="contact_form">
                    <div className="returnmessage valid-feedback p-15px-b" data-success="Your message has been received, We will contact you soon." />
                    <div className="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span></div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input id="name" type="text" placeholder="Full Name" className="form-control" /> 
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input id="email" type="text" placeholder="Email Address" className="form-control" />  
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input id="subject" type="text" placeholder="Subject" className="form-control" /> 
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea id="message" placeholder="Message" className="form-control" rows={3} defaultValue={""} /> 
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="send">
                          <a id="send_message" className="px-btn theme" href="#"><span>Contact Us</span> <i className="arrow" /></a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 m-15px-tb">
                <div className="contact-name">
                  <h5>Mail</h5>
                  <p>info@domainname.com</p>
                </div>
                <div className="contact-name">
                  <h5>Visit Our Office</h5>
                  <p>Alandi,Pune</p>
                </div>
                <div className="contact-name">
                  <h5>Phone</h5>
                  <p>+01 123 654 8096</p>
                </div>
                <div className="social-share nav">
                  <a className="dribbble" href="#">
                    <i className="fab fa-dribbble" />
                  </a>
                  <a className="behance" href="#">
                    <i className="fab fa-behance" />
                  </a>
                  <a className="linkedin" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
    
    );
  }
}