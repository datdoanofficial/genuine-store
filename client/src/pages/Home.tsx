import React from "react";
import "../styles/pages/Home.scss";
import Banner from "../components/Contents/HomeBanner";
import SearchBox from "../components/Common/SearchBox";
import SecondaryBtn from "../components/Common/SecondaryBtn";
import SlideBanner from "../components/Contents/SlideBanner";
import TopicCard from "../components/Contents/TopicCard";

type Props = {};

const Home = (props: Props) => {
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
    </div>
  );
};

export default Home;
