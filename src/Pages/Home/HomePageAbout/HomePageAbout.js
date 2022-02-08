import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePageAbout.css";

const HomePageAbout = () => {
  return (
    <div>
      {/* Home page about part*/}
      <div id="home-page-about-part">
        <div className="container-fluid bg-light"> 
          <div className="row">
            <div className="col-lg-6 px-0 home-about-part-left order-lg-0 order-1"> 
              <img className="w-100 about-img" src="https://github.com/AnirbanAnu2000/img-storage/blob/main/care/about/about3.jpg?raw=true" alt="" />
            </div>
            <div className="col-lg-6 px-0 order-lg-1 order-0">
              <div className="home-about-part-right">
                <h1 className="brand-color fw-bold" data-aos="fade-down-right" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"><i className="fab fa-pagelines"></i> আমাদের পরিচিতি</h1>
                <p className="home-about-text">আমাদের লক্ষ্য হল আমাদের সমস্ত ক্লায়েন্টদের তাদের প্রত্যাশা পূরণের জন্য নিষ্ঠার সাথে চমৎকার স্বাস্থ্যসেবা পরিষেবা প্রদান করা। 1993 সালে উদ্বোধনের পর Care উন্নত স্বাস্থ্যসেবা পরিষেবা প্রদানে নেতৃত্ব দিতে শুরু করে। পেশাদার মান এবং স্বাস্থ্যসেবা সুবিধার দক্ষতা কমফোর্টের সাফল্যের স্তম্ভ। এটা লক্ষণীয় যে বাংলাদেশে রোগীর প্রত্যাশা এবং প্রদত্ত স্বাস্থ্যসেবা পরিষেবার মধ্যে একটি ব্যবধান বিদ্যমান। ফলস্বরূপ, উল্লেখযোগ্য সংখ্যক মানুষ মানসম্পন্ন চিকিৎসা সেবা পেতে বিদেশে যান। এই ঘটনাটি বুঝতে পেরে, কমফোর্ট যতটা সম্ভব ব্যবধান কমাতে প্রতিশ্রুতিবদ্ধ</p>

                <Link to="/about" className="btn brand-bg text-white fw-bold home-about-btn">
                  আরো পড়ুন <i className="fas fa-angle-double-right"></i>
                </Link> 
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageAbout;  