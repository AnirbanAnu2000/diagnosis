import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import Marquee from "react-fast-marquee"; 
import "./Header.css";

const Header = () => {  
  return (
    <div>
      <div id="header-top-part"> 
        <div className="container header-top-part-container">
          <div className="row">
            <div className="col-md-2 col-sm-4 header-top-part-col py-3 d-flex align-items-center justify-content-center">
                <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/care/logo.png" className="header-top-logo" alt="" />
            </div>
            <div className="col-md-4 col-sm-8 header-top-part-col d-flex align-items-center justify-content-center justify-content-lg-start brand-color header-brand-name">
              <h1>আব্দুল্লাহ্ প্যাথলজি</h1>
            </div>
            <div className="col-md-3 col-sm-6 header-top-part-col py-3 d-flex align-items-center justify-content-center">
              <div>
                <h5 className="brand-color fw-bold header-top-title"><i className="fas fa-phone-volume"></i> হটলাইন</h5>
                <h6 className="header-top-info">+8801745700747</h6>
                <h5 className="brand-color fw-bold header-top-title"><i className="far fa-envelope"></i> ইমেইল</h5>
                <h6 className="header-top-info">roshedm@yahoo.com</h6>
                <h6 className="header-top-info">abdullahpathology@gmail.com</h6>
              </div> 
            </div>
            <div className="col-md-3 col-sm-6 header-top-part-col py-3 d-flex align-items-center justify-content-center">
              <div>
                <h5 className="brand-color fw-bold header-top-title"><i className="far fa-clock"></i> আমাদের কর্মঘণ্টা</h5>
                <h6 className="header-top-info">
                  শনিবার - বৃহস্পতিবার <br className="mb-2" />
                  শুক্রবার বন্ধ
                </h6>
              </div>
            </div>
          {/*<div className="col-lg-2 col-sm-4 header-top-part-col py-3 d-flex align-items-center justify-content-center">
              <div className="header-top-social-link">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" ><i className="fab fa-facebook-f brand-color text-extra-bold"></i></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" ><i className="fab fa-twitter brand-color text-extra-bold"></i></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" ><i className="fab fa-linkedin-in brand-color text-extra-bold"></i></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" ><i className="fab fa-instagram brand-color text-extra-bold"></i></a>
              </div>
            </div>*/}
          </div>
        </div>

        {/* Special declaration start */}
        {/*<div className="special-declaration">
          <div className="container-fluid px-0">
            <Marquee behavior="scroll" direction="left" speed="60" pauseOnHover="true" gradientWidth="0">
              <h5 className="text-danger fw-bold">ভাল পরিষেবার জন্য আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না। হট লাইন: +880 00000000000, ইমেইল: abcxyz@gmail.com  আমরা আপনার সেবায় ২৪ ঘন্টা নিয়োজিত.</h5>
            </Marquee>
          </div>
        </div> */}
        {/* Special declaration end */}
        
        {/* Top navigation part */}
        <nav className="navbar navbar-expand-md navbar-light brand-bg py-3" id="top-navigation">
          <div className="container pt-1">
            {/*<a className="navbar-brand" href="/">Navbar</a>*/}
            <Link to="/" className="navbar-brand navbar-brand-logo d-lg-none">
              <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/care/logo.png" alt="" />
              <span className="text-white ms-2">আব্দুল্লাহ্ প্যাথলজি</span>
            </Link>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              {/*<span className="navbar-toggler-icon"></span>*/}
              {/*<span className="text-white fw-bold">মেনু</span>*/}
              <i class="fas fa-bars menu-bars-icon"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-lg-auto ms-md-auto mb-2 mb-lg-0"> 
                <li className="nav-item">
                  <NavLink 
                  style={({ isActive }) => {
                    return {
                      padding: "10px 15px 6px",
                      borderRadius: "5px",
                      marginRight: "10px",
                      color: isActive ? "#097a09" : "#ffffff",
                      backgroundColor: isActive ? "#ffffff" :  "transparent",
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
                      padding: "10px 15px 6px",
                      borderRadius: "5px",
                      marginRight: "10px",
                      color: isActive ? "#097a09" : "#ffffff",
                      backgroundColor: isActive ? "#ffffff" :  "transparent",
                    };
                  }}
                  to="/about"
                  className="navbar-link fw-bold" 
                  >পরিচিতি</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                  style={({ isActive }) => {
                    return {
                      padding: "10px 15px 6px",
                      borderRadius: "5px",
                      marginRight: "10px",
                      color: isActive ? "#097a09" : "#ffffff",
                      backgroundColor: isActive ? "#ffffff" :  "transparent",
                    };
                  }}
                  to="/services"
                  className="navbar-link fw-bold" 
                  >সেবা সমূহ</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="hotline-email-wh-mobile-device d-lg-none">
          <div className="container">
            <div className="row">
              <div className="col-5 py-2 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <h5 className="brand-color fw-bold header-mobile-part-title"><i className="fas fa-phone-volume"></i> হটলাইন</h5>
                  <h6 className="header-info-mobile">+8801745700747</h6>
                </div> 
              </div>
              <div className="col-7 py-2 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <h5 className="brand-color fw-bold header-mobile-part-title"><i className="far fa-envelope"></i> ইমেইল</h5>
                  <h6 className="header-info-mobile">abdullahpathology@gmail.com</h6>
                  <h6 className="header-info-mobile">roshedm@yahoo.com</h6>
                </div> 
              </div>
              <hr />
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <h5 className="brand-color fw-bold header-mobile-part-title text-center"><i className="far fa-clock"></i> আমাদের কর্মঘণ্টা</h5>
                  <h6 className="header-info-mobile">
                    শনিবার - বৃহস্পতিবার এবং শুক্রবার বন্ধ
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;