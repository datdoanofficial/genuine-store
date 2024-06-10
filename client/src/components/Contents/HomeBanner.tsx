import React from "react";
import banner1 from "../../assets/images/banner/banner-01.png";
import "./HomeBanner.scss";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <div className="home-banner">
      <div className="slide">
        <img src={banner1} alt="" />
      </div>
      <div className="card-information">
        <div className="card-item">
          <div className="name">Genshin Impact</div>
          <div className="rating">
            <span className="stars">
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
            </span>
            <span className="total-rating">422 votes</span>
          </div>
          <div className="price">Free</div>
        </div>
        <div className="card-item">
          <div className="name">Genshin Impact</div>
          <div className="rating">
            <span className="stars">
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
            </span>
            <span className="total-rating">422 votes</span>
          </div>
          <div className="price">Free</div>
        </div>
        <div className="card-item">
          <div className="name">Genshin Impact</div>
          <div className="rating">
            <span className="stars">
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
            </span>
            <span className="total-rating">422 votes</span>
          </div>
          <div className="price">Free</div>
        </div>
        <div className="card-item">
          <div className="name">Genshin Impact</div>
          <div className="rating">
            <span className="stars">
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
              <span className="solar--star-bold"></span>
            </span>
            <span className="total-rating">422 votes</span>
          </div>
          <div className="price">Free</div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
