import React from 'react';
import Header from '../../Shared/Header/Header';
import HomePageAbout from '../HomePageAbout/HomePageAbout';
import HomePageBanner from '../HomePageBanner/HomePageBanner';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HomePageBanner></HomePageBanner>
      <HomePageAbout></HomePageAbout>
    </div>
  );
};

export default Home;