import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div>
      <div className="not-found border-top border-2 border-primary">
        <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/care/404.jpg" alt="" width="100%" height="100%" />
        <button className="btn btn-light fw-bolder go-to-home-btn btn-lg">
          <Link style={{textDecoration:"none",fontSize:"30px",color:"#fff"}} to="/home">হোম এ ফিরে যান</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound; 