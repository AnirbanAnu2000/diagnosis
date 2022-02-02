import React from 'react';
import { NavLink } from 'react-router-dom';
// import Marquee from "react-fast-marquee"; 
import "./Header.css";

const Header = () => {  
  return (
    <div>
      <div id="header-top-part"> 
        <div className="container header-top-part-container">
          <div className="row">
            <div className="col-md-3 col-sm-6 header-top-part-col py-3 d-flex align-items-center justify-content-center">
                <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/care/logo.png" className="header-top-logo" alt="" />
            </div>
            <div className="col-md-3 col-sm-6 header-top-part-col py-3 d-flex align-items-center justify-content-center">
              <div>
                <h5 className="brand-color fw-bold header-top-title"><i className="fas fa-phone-volume"></i> Hotline</h5>
                <h6 className="header-top-info">000 000 000 000</h6>
                <h5 className="brand-color fw-bold header-top-title"><i className="far fa-envelope"></i> Email</h5>
                <h6 className="header-top-info">abcxyz@gmail.com</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 header-top-part-col py-3 d-flex align-items-center justify-content-center">
              <div>
                <h5 className="brand-color fw-bold header-top-title"><i className="far fa-clock"></i> Working Hour</h5>
                <h6 className="header-top-info">We are open 24 X 7</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 header-top-part-col py-3 d-flex align-items-center justify-content-center">
              <div className="header-top-social-link">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" ><i className="fab fa-facebook-f brand-color text-extra-bold"></i></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" ><i className="fab fa-twitter brand-color text-extra-bold"></i></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" ><i className="fab fa-linkedin-in brand-color text-extra-bold"></i></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" ><i className="fab fa-instagram brand-color text-extra-bold"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Special declaration  */}
        {/*<div className="special-declaration">
          <div className="container-fluid px-0">
            <Marquee behavior="scroll" direction="left" speed="60" pauseOnHover="true" gradientWidth="0">
              <h5 className="text-danger fw-bold">ভাল পরিষেবার জন্য আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না। হট লাইন: +880 00000000000, ইমেইল: abcxyz@gmail.com  আমরা আপনার সেবায় 24 ঘন্টা নিয়োজিত.</h5>
            </Marquee>
          </div>
        </div>*/}
        
        {/* Top navigation part */}
        <nav className="navbar navbar-expand-md navbar-light brand-bg py-3" id="top-navigation">
          <div className="container">
            {/*<a className="navbar-brand" href="/">Navbar</a>*/}
            <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              {/*<span className="navbar-toggler-icon"></span>*/}
              <span className="text-white fw-bold">মেনু</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0"> 
                <li className="nav-item">
                  <NavLink 
                  style={({ isActive }) => {
                    return {
                      padding: "10px 15px",
                      borderRadius: "5px",
                      marginRight: "10px",
                      color: isActive ? "#097a09" : "#ffffff",
                      backgroundColor: isActive ? "#ffffff" :  "transparent"
                    };
                  }}
                  to="/home"
                  className="navbar-link fw-bold" 
                  >হোম</NavLink> 
                </li>
                <li className="nav-item">
                  <NavLink 
                  style={({ isActive }) => {
                    return {
                      padding: "10px 15px",
                      borderRadius: "5px",
                      marginRight: "10px",
                      color: isActive ? "#097a09" : "#ffffff",
                      backgroundColor: isActive ? "#ffffff" :  "transparent"
                    };
                  }}
                  to="/about"
                  className="navbar-link fw-bold" 
                  >পরিচিতি</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
  );
};

export default Header;