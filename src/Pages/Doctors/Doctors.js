import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import "./Doctors.css";

const Doctors = () => {
  return (
    <div id="doctors-page">
      <Header></Header>
      {/*doctors page banner start*/}
      <div id="doctors-page-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              
            </div>
          </div>
        </div>
      </div>
      {/*doctors page banner end*/}
      <Footer></Footer>
    </div>
  );
};

export default Doctors;