import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer"> 
        <div className="container py-5 footer-top-part"> 
          <div className="row">
            <div className="col-lg-5">
              <div className="footer-left-content mb-4 d-flex align-items-center">
                <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/care/logo.png" className="me-2" alt="" style={{width:"50px"}} />
                <h3 className="brand-color text-extra-bold heading-font d-inline-block pt-2">আব্দুল্লাহ্ প্যাথলজি</h3>
              </div>
              <div>

                <ul style={{paddingLeft:0}} className="contact-social-link">
                  <li>
                    <i className="fas fa-map-marker-alt me-2 text-white fw-bold"></i> 129, Shamsur Rahman Road,<br/> <span className="ps-4">(shantidham more)Khulna,</span><br/> <span className="ps-4">Khulna Division, Bangladesh.</span>
                  </li>

                  <li>
                    <i className="fas fa-phone-volume me-2 text-white fw-bold"></i> +8801745700747
                  </li>

                  <li>
                    <i className="far fa-envelope me-2 text-white fw-bold"></i> abdullahpathology@gmail.com <br /> 
                    <span className="ps-4">roshedm@yahoo.com</span>
                  </li>

                  {/*<li className="footer-social-links">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" ><i className="fab fa-facebook-f text-white text-extra-bold"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" ><i className="fab fa-twitter text-white text-extra-bold"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" ><i className="fab fa-linkedin-in text-white text-extra-bold"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" ><i className="fab fa-instagram text-white text-extra-bold"></i></a>
                  </li>*/}

                </ul>
              </div>
            </div>

            <div className="col-lg-3 footer-important-link d-none">
              <h2 style={{fontSize:"24px"}} className="brand-color text-extra-bold mb-4 footer-important-link-heading">গুরুত্বপূর্ণ লিঙ্ক</h2>
              <div className="footer-middle-content d-flex align-items-center">
                <ul style={{paddingLeft:0,marginRight:"50px"}}>
                  <li className="mb-1"><a className="text-white fw-bold" href="/" target="_blank" rel="noreferrer" >গুরুত্বপূর্ণ লিঙ্ক-01</a></li>
                  <li className="mb-1"><a className="text-white fw-bold" href="/" target="_blank" rel="noreferrer" >গুরুত্বপূর্ণ লিঙ্ক-02</a></li>
                  <li className="mb-1"><a className="text-white fw-bold" href="/" target="_blank" rel="noreferrer" >গুরুত্বপূর্ণ লিঙ্ক-03</a></li>
                  <li className="mb-1"><a className="text-white fw-bold" href="/" target="_blank" rel="noreferrer" >গুরুত্বপূর্ণ লিঙ্ক-04</a></li>
                  <li className="mb-1"><a className="text-white fw-bold" href="/" target="_blank" rel="noreferrer" >গুরুত্বপূর্ণ লিঙ্ক-05</a></li>
                  <li className="mb-1"><a className="text-white fw-bold" href="/" target="_blank" rel="noreferrer" >গুরুত্বপূর্ণ লিঙ্ক-06</a></li>
                </ul>
              </div> 
            </div>

            <div className="col-lg-7 footer-contact-form">
            
              <iframe className="rounded rounded-3" title="Our Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.7347917934326!2d89.55984491412319!3d22.81228892988078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901daf97575b%3A0x43142a4af165167d!2z4KaG4Kas4Kam4KeB4Kay4KeN4Kay4Ka-4Ka5IOCmquCnjeCmr-CmvuCmpeCmsuCmnOCngA!5e0!3m2!1sen!2sbd!4v1644131934387!5m2!1sen!2sbd" width="100%" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                  
              {/*<h2 style={{fontSize:"24px"}} className="brand-color text-extra-bold mb-4 footer-form-heading">যোগাযোগ করুন</h2>
              <div>
                <form>
                  <div className="mb-3">
                    <input type="text" className="w-100 footer-input-field" id="exampleFormControlInput1" placeholder="আপনার নাম" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="footer-input-field" id="exampleFormControlInput1" placeholder="আপনার ইমেইল" />
                  </div>
                  <div className="mb-3">
                    <textarea style={{resize:"none"}} className="footer-input-field" id="exampleFormControlTextarea1" placeholder="তোমার বার্তা" rows="3"></textarea>
                  </div>
                  <div className="footer-submit-btn-div">
                    <button className="brand-bg fw-bold text-white footer-submit-btn">সাবমিট</button>
                  </div> 
                </form>
              </div>*/}
          </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-part text-center m-0 py-3" style={{backgroundColor:"#444"}}>
        <p className="m-0 fw-bold" style={{color:"#fff"}}>&#169; কপিরাইট আব্দুল্লাহ প্যাথলজি</p>
      </div>
    </div>
  );
};

export default Footer; 