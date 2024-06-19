import React, { useState, useRef, useEffect } from "react";
import "../styles/pages/Home.scss";
import Banner from "../components/Contents/HomeBanner";
import SearchBox from "../components/Common/SearchBox";
import SecondaryBtn from "../components/Common/SecondaryBtn";
import SlideBanner from "../components/Contents/SlideBanner";
import TopicCard from "../components/Contents/TopicCard";
import HorizontalCards from "../components/Cards/HorizontalCards";

const Home = () => {
  return (
    <div className="homepage">
      <div className="header-wrapper">
        <SearchBox />
        <SecondaryBtn to="/wish-list">Wishlist</SecondaryBtn>
      </div>
      <Banner />
      <div className="section-02">
        <SlideBanner />
        <TopicCard />
      </div>
      <div className="section-03">
        <HorizontalCards />
      </div>
      <div className="section-04"></div>
    </div>
  );
};

export default Home;
