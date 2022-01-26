import React from 'react';
import Header from '../../Shared/Header/Header';
import HomePageAbout from '../HomePageAbout/HomePageAbout';
import HomePageBanner from '../HomePageBanner/HomePageBanner';
import HomePageServices from '../HomePageServices/HomePageServices';
import '../../Shared/Footer/Footer.css';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
  return (
    <div id="home-page">
      <Header></Header>
      <HomePageBanner></HomePageBanner>
      <HomePageAbout></HomePageAbout>
      <HomePageServices></HomePageServices>
      <Footer></Footer>
    </div>
  );
};

export default Home;