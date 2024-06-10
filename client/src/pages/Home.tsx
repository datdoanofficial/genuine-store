import React from "react";
import "../styles/pages/Home.scss";
import Banner from "../components/Contents/HomeBanner";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="homepage">
      <Banner />
    </div>
  );
};

export default Home;
