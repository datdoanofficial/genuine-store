import React from "react";
import "../styles/pages/News.scss";

type Props = {};

const News = (props: Props) => {
  return (
    <div className="news-page">
      <div className="heading-wrapper">
        <div className="main-banner">
          <div className="main-banner-item"></div>
          <div className="main-banner-item"></div>
        </div>
        <div className="mini-banner">
          <div className="mini-banner-item"></div>
          <div className="mini-banner-item"></div>
          <div className="mini-banner-item"></div>
          <div className="mini-banner-item"></div>
        </div>
      </div>
      <div className="news">
        <div className="title">Recently Updated</div>
        <div className="news-list">
          {Array.from({ length: 8 }, (_, index) => (
            <div className="news-item">
              <div className="news-item-img"></div>
              <div className="news-item-content">
                <div className="news-item-date">27/06/2024</div>
                <div className="news-item-title">
                  Black Myth: Wukong hands-on captivated, challenged, and
                  delighted
                </div>
                <div className="news-item-description">
                  Battle bosses, explore lush forests, and transform into
                  mythical beasts in Black Myth: Wukong, launching on the Epic
                  Games Store on Aug. 20.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
