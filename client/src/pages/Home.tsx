import React from "react";
import "../styles/pages/Home.scss";
import Banner from "../components/Contents/HomeBanner";
import SearchBox from "../components/Common/SearchBox";
import SecondaryBtn from "../components/Common/SecondaryBtn";
import SmallBtn from "../components/Common/SmallBtn";

import imgDemo from "../assets/images/card/demo.png";

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
        {/* title */}
        <div className="heading">
          <div className="title">Free Games</div>
          <SecondaryBtn to="/store">View all</SecondaryBtn>
        </div>
        {/* card list */}
        <div className="card-list">
          <div className="navigation">
            <div className="left-arrow">
              <span className="gravity-ui--arrow-left"></span>
            </div>
            <div className="right-arrow">
              <span className="gravity-ui--arrow-right"></span>
            </div>
          </div>
          <div className="card-item">
            <div className="card card-01">
              <div className="card-inner">
                <div className="img-thumb">
                  <img src={imgDemo} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-title">NARAKA: BLADEPOINT</div>
                  <div className="card-description">
                    Dive into the legends of the Far East in NARAKA: BLADEPOINT;
                    team up with your friends in fast-paced melee fights for a
                    Battle Royale experience unlike any other.
                  </div>
                  <div className="card-action" id="card-action">
                    <SmallBtn to="/game" className="btn-small">
                      View More
                    </SmallBtn>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-02">
              <div className="card-inner">
                <div className="img-thumb">
                  <img src={imgDemo} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-title">NARAKA: BLADEPOINT</div>
                  <div className="card-description">
                    Dive into the legends of the Far East in NARAKA: BLADEPOINT;
                    team up with your friends in fast-paced melee fights for a
                    Battle Royale experience unlike any other.
                  </div>
                  <div className="card-action" id="card-action">
                    <SmallBtn to="/game" className="btn-small">
                      View More
                    </SmallBtn>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-03">
              <div className="card-inner">
                <div className="img-thumb">
                  <img src={imgDemo} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-title">NARAKA: BLADEPOINT</div>
                  <div className="card-description">
                    Dive into the legends of the Far East in NARAKA: BLADEPOINT;
                    team up with your friends in fast-paced melee fights for a
                    Battle Royale experience unlike any other.
                  </div>
                  <div className="card-action" id="card-action">
                    <SmallBtn to="/game" className="btn-small">
                      View More
                    </SmallBtn>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-04">
              <div className="card-inner">
                <div className="img-thumb">
                  <img src={imgDemo} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-title">NARAKA: BLADEPOINT</div>
                  <div className="card-description">
                    Dive into the legends of the Far East in NARAKA: BLADEPOINT;
                    team up with your friends in fast-paced melee fights for a
                    Battle Royale experience unlike any other.
                  </div>
                  <div className="card-action" id="card-action">
                    <SmallBtn to="/game" className="btn-small">
                      View More
                    </SmallBtn>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-05">
              <div className="card-inner">
                <div className="img-thumb">
                  <img src={imgDemo} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-title">NARAKA: BLADEPOINT</div>
                  <div className="card-description">
                    Dive into the legends of the Far East in NARAKA: BLADEPOINT;
                    team up with your friends in fast-paced melee fights for a
                    Battle Royale experience unlike any other.
                  </div>
                  <div className="card-action" id="card-action">
                    <SmallBtn to="/game" className="btn-small">
                      View More
                    </SmallBtn>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-06">
              <div className="card-inner">
                <div className="img-thumb">
                  <img src={imgDemo} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-title">NARAKA: BLADEPOINT</div>
                  <div className="card-description">
                    Dive into the legends of the Far East in NARAKA: BLADEPOINT;
                    team up with your friends in fast-paced melee fights for a
                    Battle Royale experience unlike any other.
                  </div>
                  <div className="card-action" id="card-action">
                    <SmallBtn to="/game" className="btn-small">
                      View More
                    </SmallBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* feature topic */}
        <div className="feature-topic">
          <div className="topic-card"></div>
          <div className="topic-card"></div>
          <div className="topic-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
