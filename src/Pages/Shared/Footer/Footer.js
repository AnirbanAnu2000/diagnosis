import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container py-5 footer-top-part"> 
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-left-content mb-4 d-flex align-items-center">
                <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/care/logo.png" className="" alt="" style={{width:"50px"}} />
                <h4 style={{fontSize:"24px"}} className="brand-color text-extra-bold heading-font d-inline-block">Care Diagnosis</h4>
              </div>
              <div>
                <ul style={{paddingLeft:0}} className="contact-social-link">
                <li><i className="fas fa-map-marker-alt me-2 text-white fw-bold"></i> 20, Ahsan Ahmed Road, Khulna</li>
                <li><i className="fas fa-phone-volume me-2 text-white fw-bold"></i> +880 000 000 000 0</li>
                  <li><i className="far fa-envelope me-2 text-white fw-bold"></i> abc.xyz@gmail.com</li>
                  <li className="footer-social-links">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" ><i className="fab fa-facebook-f text-white text-extra-bold"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" ><i className="fab fa-twitter text-white text-extra-bold"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" ><i className="fab fa-linkedin-in text-white text-extra-bold"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" ><i className="fab fa-instagram text-white text-extra-bold"></i></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 footer-important-link">
              <h2 style={{fontSize:"24px"}} className="brand-color text-extra-bold mb-4 footer-important-link-heading">Important Links</h2>
              <div className="footer-middle-content d-flex align-items-center">
                <ul style={{paddingLeft:0,marginRight:"50px"}}>
                  <li className="mb-1"><a className="text-white fw-bold" href="/" target="_blank" rel="noreferrer" >Important Link-01</a></li>
                  <li className="mb-1"><a className="text-white fw-bold" href="/" target="_blank" rel="noreferrer" >Important Link-02</a></li>
                  <li className="mb-1"><a className="text-white fw-bold" href="/" target="_blank" rel="noreferrer" >Important Link-03</a></li>
                  <li className="mb-1"><a className="text-white fw-bold" href="/" target="_blank" rel="noreferrer" >Important Link-04</a></li>
                  <li className="mb-1"><a className="text-white fw-bold" href="/" target="_blank" rel="noreferrer" >Important Link-05</a></li>
                  <li className="mb-1"><a className="text-white fw-bold" href="/" target="_blank" rel="noreferrer" >Important Link-05</a></li>
                </ul>
              </div> 
            </div>

            <div className="col-lg-4 footer-contact-form">
              <h2 style={{fontSize:"24px"}} className="brand-color text-extra-bold mb-4 footer-form-heading">Contact Us</h2>
              <div>
                <form>
                  <div className="mb-3">
                    <input type="text" className="w-100 footer-input-field" id="exampleFormControlInput1" placeholder="Your name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="footer-input-field" id="exampleFormControlInput1" placeholder="Your email address" />
                  </div>
                  <div className="mb-3">
                    <textarea style={{resize:"none"}} className="footer-input-field" id="exampleFormControlTextarea1" placeholder="Your Message" rows="3"></textarea>
                  </div>
                  <div className="footer-submit-btn-div">
                    <button className="brand-bg fw-bold text-white footer-submit-btn">Submit</button>
                  </div> 
                </form>
              </div>
          </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-part text-center m-0 py-3" style={{backgroundColor:"#444"}}>
        <p className="m-0" style={{color:"#fff"}}>Copyright by @Care Diagnosis - 2022</p>
      </div>
    </div>
  );
};

export default Footer;