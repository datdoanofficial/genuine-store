import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/Products/ProductDetail.scss";
import PriceCalculator from "../../components/Common/PriceCalculator";
import ToolBar from "../../components/Common/ToolBar";
import Navigate from "../../components/Common/Navigate";
import NarakaLogo from "../../assets/images/products/logo/naraka_logo.png";

type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <div className="product-details">
      <ToolBar />
      <div className="product-container">
        <div className="product-content">
          <div className="product-name">NARAKA: BLADEPOINT</div>
          <div className="prd-bar">
            <div className="overview">Overview</div>
            <div className="about">About This Game</div>
            <div className="system-req">System Requirements</div>
            <div className="rlt-games">Related Games</div>
          </div>
          <div className="product-gallery">
            <div className="main-thumbnail"></div>
            <div className="thumbnail-tools">
              <div className="title">Screenshots & Videos</div>
              <Navigate />
            </div>
            <div className="thumbnails">
              <div className="thumbnail"></div>
              <div className="thumbnail"></div>
              <div className="thumbnail"></div>
              <div className="thumbnail"></div>
            </div>
          </div>
          {/* About this game */}
          <div className="about-game">
            <div className="title">About This Game</div>
            <div className="content">
              NARAKA: BLADEPOINT offers you a Battle Royale experience unlike
              any other: you'll enjoy dynamic, fast-paced and ever shifting
              melee-focused combat, battle your enemies with punishing combos,
              parries, and grit or outsmart them using lethal counters in an
              intense mind game.
            </div>
            <div className="genres-features">
              <div className="genres">
                <div className="title">Genres</div>
                <div className="genre-items">
                  <div className="genre">Action, Adventure</div>
                </div>
              </div>
              <div className="features">
                <div className="title">Features</div>
                <div className="feature-items">
                  <div className="feature">
                    Competitive Cross Platform, Online Multiplayer
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* System requirements */}
          <div className="system-requirements">
            <div className="title">System Requirements</div>
            <div className="system-requirement-tbl">
              <div className="tab">
                <div className="windows active">Windows</div>
                <div className="macos">Mac Os</div>
              </div>
              <div className="content">
                <div className="mininum">
                  <div className="title">Mininum</div>
                  <div className="os-version">
                    <span>OS version</span>
                    <div className="inner">Windows 10 64-bit</div>
                  </div>
                  <div className="cpu">
                    <span>CPU</span>
                    <div className="inner">
                      Intel i5 4th generation, AMD FX 6300 or equivalent
                    </div>
                  </div>
                  <div className="memory">
                    <span>Memory</span>
                    <div className="inner">8 GB RAM</div>
                  </div>
                  <div className="gpu">
                    <span>GPU</span>
                    <div className="inner">
                      NVIDIA GeForce GTX 750TI, Intel Arc A380, AMD HD 6950 or
                      equivalent
                    </div>
                  </div>
                  <div className="storage">
                    <span>Storage</span>
                    <div className="inner">20 GB available space</div>
                  </div>
                </div>
                <div className="recommended">
                  <div className="title">Recommended</div>
                  <div className="os-version">
                    <span>OS version</span>
                    <div className="inner">Windows 10 64-bit</div>
                  </div>
                  <div className="cpu">
                    <span>CPU</span>
                    <div className="inner">
                      Intel i7 7th generation or equivalent
                    </div>
                  </div>
                  <div className="memory">
                    <span>Memory</span>
                    <div className="inner">16 GB RAM</div>
                  </div>
                  <div className="gpu">
                    <span>GPU</span>
                    <div className="inner">
                      NVIDIA GeForce GTX 1060 6G, Intel Arc A750, AMD RX480 or
                      equivalent
                    </div>
                  </div>
                  <div className="storage">
                    <span>Storage</span>
                    <div className="inner">20 GB available space</div>
                  </div>
                </div>
              </div>
              <div className="copy-right">
                &copy; 2021 Hangzhou 24 Entertainment Network Technology Co.Ltd.
                All Rights Reserved. (R) & (C) BLE,LLC. All Rights Reserved.
              </div>
            </div>
          </div>
          {/* Related Games */}
          <div className="related-games">
            <div className="related-heading">
              <div className="title">Related Games</div>
              <Navigate />
            </div>
            <div className="related-contain">
              <div className="product-item">1</div>
              <div className="product-item">2</div>
              <div className="product-item">3</div>
              <div className="product-item">4</div>
            </div>
          </div>
        </div>
        <div className="product-checkout">
          <div className="product-logo">
            <img src={NarakaLogo} alt="Naraka Logo" />
          </div>
          <div className="product-info">
            <div className="developer line">
              <label>Developer</label>
              <span>24 Entertainment</span>
            </div>
            <div className="publisher line">
              <label>Publisher</label>
              <span>NetEase Montreal</span>
            </div>
            <div className="release-date line">
              <label>Release Date</label>
              <span>Aug 12, 2021</span>
            </div>
            <div className="initial-release line">
              <label>Initial Release</label>
              <span>Nov 08, 2021</span>
            </div>
            <div className="platform line">
              <label>Platform</label>
              <span className="teenyicons--windows-solid"></span>
            </div>
          </div>
          <div className="product-button">
            <button className="share-btn">
              <span className="material-symbols-light--share iconify"></span>
              Share
            </button>
            <button className="report-btn">
              <span className="mingcute--flag-4-fill iconify"></span>Report
            </button>
          </div>
          {/* step 01 */}
          <div className="step-1">
            <label>Step 1</label>
            <div className="add-btn">
              <button className="add-to-wishlist">
                <span className="solar--heart-linear iconify"></span>wishlist
              </button>
              <button className="add-to-cart">Add to cart</button>
            </div>
            <div className="buy-item">
              <div className="title">
                <span className="icons8--buy iconify"></span>Buy NARAKA:
                BLADEPOINT
              </div>
              <div className="price">
                <label>Starting at</label>
                <span>Free</span>
              </div>
            </div>
            <Link to="/" className="in4-link">
              May include in-app purchases
            </Link>
          </div>

          {/* step 02 */}

          <div className="step-2">
            <label>Step 2</label>
            <div className="heading">Select an edition</div>
            <div className="select-item">
              <div className="title">Standard Edition</div>
              <div className="price">Free</div>
            </div>
            <div className="select-item">
              <div className="title">Deluxe Edition</div>
              <div className="price">
                <PriceCalculator originalPrice="620.000đ" discount={0.3} />
              </div>
            </div>
            <div className="select-item">
              <div className="title">Ultimate Edition</div>
              <div className="price">
                <PriceCalculator originalPrice="920.000đ" discount={0.3} />
              </div>
            </div>
          </div>

          {/* proceed */}

          <div className="proceed">
            <div className="empty">Make a selection to proceed</div>
            <div className="selected">
              <span>Your selection</span>
              <div className="product">
                <div className="product-name">
                  NARAKA: BLADEPOINT - Ultimate Edition
                </div>
                <div className="price">
                  <PriceCalculator originalPrice="920.000đ" discount={0.3} />
                </div>
              </div>
              <label className="taxes-label">
                Taxes calculated at checkout
              </label>
              <button className="checkout-btn">Check out</button>
            </div>
            <div className="description">
              This game includes optional in-game purchases of virtual currency
              that can be used to acquire virtual in-game items.
            </div>
            <div className="accept">
              By clicking “Check out”, you agree to the game’s{" "}
              <Link to="">Legal Disclosures</Link> and{" "}
              <Link to="">Terms of Sale</Link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
