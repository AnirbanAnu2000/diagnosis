import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./HomePageSpecialist.css";

export default class HomePageSpecialist extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        }
      ]
    };
    return (
      <div id="home-page-specialist" className="my-5 brand-bg"> 
        <div className="container overflow-hidden">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-white fw-bold text-center specialist-heading pt-3 pb-2" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="50" data-aos-duration="500" data-aos-once="false" data-aos-mirror="true"><i className="fab fa-pagelines"></i> আমাদের বিশেষজ্ঞ চিকিৎসকগণ</h1>
              <Slider {...settings}>
                <div>
                  <div className="card mx-3 specialist-card">
                    <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/8.jpg?raw=true"  alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">বিশেষজ্ঞ ডাক্তারের নাম</h5>
                      <p className="card-text fw-bold brand-color">বিশেষায়িত বিষয়</p>
                      {/*<a href="/" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mx-3 specialist-card">
                    <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/1.jpg?raw=true" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">বিশেষজ্ঞ ডাক্তারের নাম</h5>
                      <p className="card-text fw-bold brand-color">বিশেষায়িত বিষয়</p>
                      {/*<a href="/" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mx-3 specialist-card">
                    <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/3.jpg?raw=true" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">বিশেষজ্ঞ ডাক্তারের নাম</h5>
                      <p className="card-text fw-bold brand-color">বিশেষায়িত বিষয়</p>
                      {/*<a href="/" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mx-3 specialist-card">
                    <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/4.jpg?raw=true" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">বিশেষজ্ঞ ডাক্তারের নাম</h5>
                      <p className="card-text fw-bold brand-color">বিশেষায়িত বিষয়</p>
                      {/*<a href="/" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mx-3 specialist-card">
                    <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/10.jpg?raw=true" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">বিশেষজ্ঞ ডাক্তারের নাম</h5>
                      <p className="card-text fw-bold brand-color">বিশেষায়িত বিষয়</p>
                      {/*<a href="/" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mx-3 specialist-card">
                    <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/6.jpg?raw=true" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">বিশেষজ্ঞ ডাক্তারের নাম</h5>
                      <p className="card-text fw-bold brand-color">বিশেষায়িত বিষয়</p>
                      {/*<a href="/" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mx-3 specialist-card">
                    <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/7.jpg?raw=true" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">বিশেষজ্ঞ ডাক্তারের নাম</h5>
                      <p className="card-text fw-bold brand-color">বিশেষায়িত বিষয়</p>
                      {/*<a href="/" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mx-3 specialist-card">
                    <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/2.jpg?raw=true" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">বিশেষজ্ঞ ডাক্তারের নাম</h5>
                      <p className="card-text fw-bold brand-color">বিশেষায়িত বিষয়</p>
                      {/*<a href="/" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mx-3 specialist-card">
                    <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/9.jpg?raw=true" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">বিশেষজ্ঞ ডাক্তারের নাম</h5>
                      <p className="card-text fw-bold brand-color">বিশেষায়িত বিষয়</p>
                      {/*<a href="/" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                  </div>
                </div>
              </Slider>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}