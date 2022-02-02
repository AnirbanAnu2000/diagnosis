import React from 'react';
// import { Carousel, Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './HomePageBanner.css';

const HomePageBanner = () => {
  return (
    <div id="home-page-banner-part">

      {/*<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active slide-item" data-bs-interval="5000">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/care/banner/banner1.jpg" className="d-block w-100" alt="..." />
            <div className="slide-item-overlay d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 py-4">
                    <div className="text-center">
                      <h1 className="banner-heading">আপনার সবচেয়ে বিশ্বস্ত স্বাস্থ্য সঙ্গী</h1>
                      <p className="text-white mb-5">আপনি যদি সেরা চিকিৎসা পরিষেবা খুঁজছেন, আপনি সঠিক জায়গায় আছেন</p>
                      <button className="btn brand-bg text-white fw-bold" size="lg">আরো পড়ুন <i className="fas fa-angle-right"></i></button>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item slide-item" data-bs-interval="5000">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/care/banner/banner4.jpg" className="d-block w-100" alt="..." />
            <div className="slide-item-overlay d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 py-4">
                    <div className="text-center">
                      <h1 className="banner-heading">আমরা আপনার সুস্থ স্বাস্থ্যের যত্ন নিই</h1>
                      <p className="text-white mb-5">আমরা আমাদের রোগীদের সর্বোচ্চ স্তরের সন্তুষ্টি যত্ন এবং পরিষেবা প্রদান করি। একটি স্বাস্থ্যকর পরিবেশ গড়ে তোলা যা সম্প্রদায়ের উন্নয়নে সহায়তা করে।</p>
                      <button className="btn brand-bg text-white fw-bold" size="lg">আরো পড়ুন <i className="fas fa-angle-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item slide-item" data-bs-interval="5000">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/care/banner/banner3.jpg" className="d-block w-100" alt="..." />
            <div className="slide-item-overlay d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 py-4">
                    <div className="text-center">
                      <h1 className="banner-heading">আমাদের লক্ষ্য হল আপনার স্বাস্থ্যের যত্ন নেওয়া</h1>
                      <p className="text-white mb-5">আমরা আমাদের রোগীদের সর্বোচ্চ স্তরের সন্তুষ্টি যত্ন এবং পরিষেবা প্রদান করি। একটি স্বাস্থ্যকর পরিবেশ গড়ে তোলা যা সম্প্রদায়ের উন্নয়নে সহায়তা করে।</p>
                      <button className="btn brand-bg text-white fw-bold" size="lg">আরো পড়ুন <i className="fas fa-angle-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon text-danger" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>*/}

      {/* Cross fade */}
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active slide-item" data-bs-interval="5000">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/care/banner/banner1.jpg" className="d-block w-100" alt="..." />
            <div className="slide-item-overlay d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 py-4">
                    <div className="text-center">
                      <h1 className="banner-heading">আপনার সবচেয়ে বিশ্বস্ত স্বাস্থ্য সঙ্গী</h1>
                      <p className="text-white mb-5">আপনি যদি সেরা চিকিৎসা পরিষেবা খুঁজছেন, আপনি সঠিক জায়গায় আছেন</p>
                      <button className="btn brand-bg text-white fw-bold" size="lg">আরো পড়ুন <i className="fas fa-angle-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item slide-item" data-bs-interval="5000">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/care/banner/banner4.jpg" className="d-block w-100" alt="..." />
            <div className="slide-item-overlay d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 py-4">
                    <div className="text-center">
                      <h1 className="banner-heading">আমরা আপনার সুস্থ স্বাস্থ্যের যত্ন নিই</h1>
                      <p className="text-white mb-5">আমরা আমাদের রোগীদের সর্বোচ্চ স্তরের সন্তুষ্টি যত্ন এবং পরিষেবা প্রদান করি। একটি স্বাস্থ্যকর পরিবেশ গড়ে তোলা যা সম্প্রদায়ের উন্নয়নে সহায়তা করে।</p>
                      <button className="btn brand-bg text-white fw-bold" size="lg">আরো পড়ুন <i className="fas fa-angle-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item slide-item" data-bs-interval="5000">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/care/banner/banner3.jpg" className="d-block w-100" alt="..." />
            <div className="slide-item-overlay d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 py-4">
                    <div className="text-center">
                      <h1 className="banner-heading">আমাদের লক্ষ্য হল আপনার স্বাস্থ্যের যত্ন নেওয়া</h1>
                      <p className="text-white mb-5">আমরা আমাদের রোগীদের সর্বোচ্চ স্তরের সন্তুষ্টি যত্ন এবং পরিষেবা প্রদান করি। একটি স্বাস্থ্যকর পরিবেশ গড়ে তোলা যা সম্প্রদায়ের উন্নয়নে সহায়তা করে।</p>
                      <button className="btn brand-bg text-white fw-bold" size="lg">আরো পড়ুন <i className="fas fa-angle-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </div>
  );
};

export default HomePageBanner;