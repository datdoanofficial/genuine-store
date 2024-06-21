import React from "react";
import "./InfiniteSlider.scss";
import SecondaryBtn from "../Common/SecondaryBtn";
import CardItem from "../Common/CardItem";

type Props = {};

const InfiniteSlider = (props: Props) => {
  return (
    <div className="infinite-slider">
      <div className="heading-wrapper">
        <div className="title">Top Seller</div>
        <SecondaryBtn to="/store">View All</SecondaryBtn>
      </div>
      <div className="slide-items">
        <div className="first-line line">
          {Array.from({ length: 10 }, (_, index) => (
            <CardItem />
          ))}
        </div>
        <div className="second-line line">
          {Array.from({ length: 10 }, (_, index) => (
            <CardItem />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
