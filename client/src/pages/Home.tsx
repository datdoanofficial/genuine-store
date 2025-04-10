import React from "react";
import "../styles/pages/Home.scss";
import Banner from "../components/Contents/HomeBanner";
import ToolBar from "../components/Common/ToolBar";
import SlideBanner from "../components/Contents/SlideBanner";
import TopicCard from "../components/Contents/TopicCard";
import HorizontalCards from "../components/Cards/HorizontalCards";
import InfiniteSlider from "../components/Cards/InfiniteSlider";

const Home = () => {
  return (
    <div className="homepage">
      <ToolBar />
      <Banner />
      <div className="section-02">
        <SlideBanner />
        <TopicCard />
      </div>
      <div className="section-03">
        <HorizontalCards />
      </div>
      <div className="section-04">
        <InfiniteSlider />
      </div>
    </div>
  );
};

export default Home;
