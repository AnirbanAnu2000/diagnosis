import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageServices.css';

const HomePageServices = () => {
  return (
    <div id="home-page-services-part"> 
      <div className="container pb-5 home-page-services-container"> 
        <h1 className="services-part-heading text-center fw-bold brand-color"><i className="fab fa-pagelines"></i> আমাদের সেবা সমূহ</h1>
        <div className="row">
          <div className="col-lg-4 col-sm-6 service-card-col">
            <div className="card service-card">
              <img src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/about/about3.jpg?raw=true" className="card-img-top service-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold brand-color">প্যাথলজি</h5>
                <p className="card-text">আমাদের প্যাথলজি বিভাগ বিভিন্ন ধরণের রোগ নির্ণয়, ব্যবস্থাপনা এবং প্রতিরোধের জন্য পরীক্ষাগার পরীক্ষার একটি বিস্তৃত পরিসর সরবরাহ করে।</p>
                <Link to="/">
                  <button className="btn brand-bg fw-bold text-white">আরো পড়ুন <i class="fas fa-angle-double-right"></i></button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 service-card-col"> 
            <div className="card service-card">
              <img src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/about/about3.jpg?raw=true" className="card-img-top service-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold brand-color">প্যাথলজি</h5>
                <p className="card-text">আমাদের প্যাথলজি বিভাগ বিভিন্ন ধরণের রোগ নির্ণয়, ব্যবস্থাপনা এবং প্রতিরোধের জন্য পরীক্ষাগার পরীক্ষার একটি বিস্তৃত পরিসর সরবরাহ করে।</p>
                <Link to="/">
                  <button className="btn brand-bg fw-bold text-white">আরো পড়ুন <i class="fas fa-angle-double-right"></i></button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 service-card-col">
            <div className="card service-card">
              <img src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/about/about3.jpg?raw=true" className="card-img-top service-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold brand-color">প্যাথলজি</h5>
                <p className="card-text">আমাদের প্যাথলজি বিভাগ বিভিন্ন ধরণের রোগ নির্ণয়, ব্যবস্থাপনা এবং প্রতিরোধের জন্য পরীক্ষাগার পরীক্ষার একটি বিস্তৃত পরিসর সরবরাহ করে।</p>
                <Link to="/">
                  <button className="btn brand-bg fw-bold text-white">আরো পড়ুন <i class="fas fa-angle-double-right"></i></button>
                </Link>
              </div>
            </div>
          </div>
          {/*<div className="col-lg-4">
            <div className="card service-card">
              <img src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/about/about3.jpg?raw=true" className="card-img-top service-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold brand-color">প্যাথলজি</h5>
                <p className="card-text">আমাদের প্যাথলজি বিভাগ বিভিন্ন ধরণের রোগ নির্ণয়, ব্যবস্থাপনা এবং প্রতিরোধের জন্য পরীক্ষাগার পরীক্ষার একটি বিস্তৃত পরিসর সরবরাহ করে।</p>
                <Link to="/">
                  <button className="btn brand-bg fw-bold text-white">আরো পড়ুন <i class="fas fa-angle-double-right"></i></button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card service-card">
              <img src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/about/about3.jpg?raw=true" className="card-img-top service-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold brand-color">প্যাথলজি</h5>
                <p className="card-text">আমাদের প্যাথলজি বিভাগ বিভিন্ন ধরণের রোগ নির্ণয়, ব্যবস্থাপনা এবং প্রতিরোধের জন্য পরীক্ষাগার পরীক্ষার একটি বিস্তৃত পরিসর সরবরাহ করে।</p>
                <Link to="/">
                  <button className="btn brand-bg fw-bold text-white">আরো পড়ুন <i class="fas fa-angle-double-right"></i></button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card service-card">
              <img src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/about/about3.jpg?raw=true" className="card-img-top service-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold brand-color">প্যাথলজি</h5>
                <p className="card-text">আমাদের প্যাথলজি বিভাগ বিভিন্ন ধরণের রোগ নির্ণয়, ব্যবস্থাপনা এবং প্রতিরোধের জন্য পরীক্ষাগার পরীক্ষার একটি বিস্তৃত পরিসর সরবরাহ করে।</p>
                <Link to="/">
                  <button className="btn brand-bg fw-bold text-white">আরো পড়ুন <i class="fas fa-angle-double-right"></i></button>
                </Link>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default HomePageServices; 