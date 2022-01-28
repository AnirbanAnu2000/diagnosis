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
      speed: 2000,
      autoplaySpeed: 4000,
    };
    return (
      <div id="home-page-specialist" className="my-5">
        <div className="container p-0">
          <h2> Multiple items </h2>
          <Slider {...settings}>
            <div>
              <div className="card mx-3">
                <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/8.jpg?raw=true"  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div>
              <div className="card mx-3">
                <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/1.jpg?raw=true" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div>
              <div className="card mx-3">
                <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/3.jpg?raw=true" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div>
              <div className="card mx-3">
                <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/4.jpg?raw=true" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div>
              <div className="card mx-3">
                <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/10.jpg?raw=true" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div>
              <div className="card mx-3">
                <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/6.jpg?raw=true" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div>
              <div className="card mx-3">
                <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/7.jpg?raw=true" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div>
              <div className="card mx-3">
                <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/2.jpg?raw=true" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div>
              <div className="card mx-3">
                <img className="card-img-top specialist-card-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/doctor/9.jpg?raw=true" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}