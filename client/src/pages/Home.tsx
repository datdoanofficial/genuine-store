import React from "react";
import "../styles/pages/Home.scss";
import Banner from "../components/Contents/HomeBanner";
import SearchBox from "../components/Common/SearchBox";
import SecondaryBtn from "../components/Common/SecondaryBtn";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="homepage">
      <div className="header-wrapper">
        <SearchBox />
        <SecondaryBtn to="/wish-list">Wishlist</SecondaryBtn>
      </div>
      <Banner />
    </div>
  );
};

export default Home;
