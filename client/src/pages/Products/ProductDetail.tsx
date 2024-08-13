import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/Products/ProductDetail.scss";
import PriceCalculator from "../../components/Common/PriceCalculator";
import ToolBar from "../../components/Common/ToolBar";
import Navigate from "../../components/Common/Navigate";
import NarakaLogo from "../../assets/images/products/logo/naraka_logo.png";

// Import images and videos from assets/images directory

import thumbnail0 from "../../assets/images/products/thumbnails/naraka_thumbnails_00.jpg";
import thumbnail1 from "../../assets/images/products/thumbnails/naraka_thumbnails_01.jpg";
import thumbnail2 from "../../assets/images/products/thumbnails/naraka_thumbnails_02.jpg";
import thumbnail3 from "../../assets/images/products/thumbnails/naraka_thumbnails_03.jpg";
import thumbnail4 from "../../assets/images/products/thumbnails/naraka_thumbnails_04.jpg";
import thumbnail5 from "../../assets/images/products/thumbnails/naraka_thumbnails_05.jpg";
import thumbnail6 from "../../assets/images/products/thumbnails/naraka_thumbnails_06.jpg";
import thumbnail7 from "../../assets/images/products/thumbnails/naraka_thumbnails_07.jpg";

type Props = {};

const ProductDetail = (props: Props) => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const systemReqRef = useRef<HTMLDivElement>(null);
  const relatedGamesRef = useRef<HTMLDivElement>(null);
  const relatedProduct = Array(16).fill(null); // Create an array with 16 elements
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [relatedProductIndex, setRelatedProductIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("windows"); // Create active tab windows or macos
  const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnail0);
  const [animateClass, setAnimateClass] = useState("");
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);
  // State to track if an item is selected in step 2
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  // State to track the product name
  const [productName, setProductName] = useState("NARAKA: BLADEPOINT");

  // Function to handle the transition to step 2
  const goToStep2 = () => {
    setCurrentStep(2);
  };

  // Function to handle item selection in step 2
  const handleItemSelection = (item: string) => {
    setSelectedItem(item);
  };

  // Function to get the price based on the selected item
  const getPrice = (item: string | null) => {
    switch (item) {
      case "Standard Edition":
        return "Free";
      case "Deluxe Edition":
        return <PriceCalculator originalPrice="620.000đ" discount={0.3} />;
      case "Ultimate Edition":
        return <PriceCalculator originalPrice="920.000đ" discount={0.3} />;
      default:
        return null;
    }
  };

  // Array of thumbnails
  const thumbnails = [
    thumbnail0,
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail5,
    thumbnail6,
    thumbnail7,
  ];

  // Handle thumbnail click
  const handleThumbnailClick = (thumbnail: string, index: number) => {
    const direction =
      index > thumbnails.indexOf(selectedThumbnail) ? "right" : "left";
    setAnimateClass(direction === "right" ? "animate-right" : "animate-left");
    setSelectedThumbnail(thumbnail);
    setTimeout(() => setAnimateClass(""), 500); // Reset animation state after animation duration
  };

  // thumnail navigate

  const handleThumbnailNavigate = (direction: string) => {
    if (direction === "left" && thumbnailIndex > 0) {
      setThumbnailIndex(thumbnailIndex - 4);
    } else if (
      direction === "right" &&
      thumbnailIndex < thumbnails.length - 4
    ) {
      setThumbnailIndex(thumbnailIndex + 4);
    }
  };

  // related product navigate

  const handleRelatedProductNavigate = (direction: "left" | "right") => {
    setRelatedProductIndex((prevIndex) => {
      if (direction === "right") {
        return Math.min(prevIndex + 4, relatedProduct.length - 4);
      } else {
        return Math.max(prevIndex - 4, 0);
      }
    });
  };

  const [activeSection, setActiveSection] = useState<string>("overview");

  // scroll to section

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    section: string
  ) => {
    const element = ref.current;
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - 130; // 130px offset
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(section);
    }
  };

  // handle tab click

  // Content existence check
  const hasWindowsContent = true; // Assume Windows content exists
  const hasMacOsContent = false; // Assume Mac Os content does not exist

  const handleTabClick = (tab: string) => {
    if (
      (tab === "windows" && hasWindowsContent) ||
      (tab === "macos" && hasMacOsContent)
    ) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="product-details">
      <ToolBar />
      <div className="product-container" ref={overviewRef}>
        <div className="product-content">
          <div className="product-name">NARAKA: BLADEPOINT</div>
          <div className="prd-bar">
            <div
              className={`overview ${
                activeSection === "overview" ? "active" : ""
              }`}
              onClick={() => scrollToSection(overviewRef, "overview")}
            >
              Overview
            </div>
            <div
              className={`about ${activeSection === "about" ? "active" : ""}`}
              onClick={() => scrollToSection(aboutRef, "about")}
            >
              About This Game
            </div>
            <div
              className={`system-req ${
                activeSection === "system-req" ? "active" : ""
              }`}
              onClick={() => scrollToSection(systemReqRef, "system-req")}
            >
              System Requirements
            </div>
            <div
              className={`rlt-games ${
                activeSection === "rlt-games" ? "active" : ""
              }`}
              onClick={() => scrollToSection(relatedGamesRef, "rlt-games")}
            >
              Related Games
            </div>
          </div>
          <div className="product-gallery">
            <div className={`main-thumbnail ${animateClass}`}>
              <img src={selectedThumbnail} alt="Selected Thumbnail" />
            </div>
            <div className="thumbnail-tools">
              <div className="title">Screenshots & Videos</div>
              <Navigate
                onNavigate={handleThumbnailNavigate}
                disableLeft={thumbnailIndex === 0}
                disableRight={thumbnailIndex >= thumbnails.length - 4}
                totalProducts={thumbnails.length}
              />
            </div>
            <div className="thumbnails">
              {thumbnails
                .slice(thumbnailIndex, thumbnailIndex + 4)
                .map((thumbnail, index) => (
                  <div
                    key={index}
                    className="thumbnail"
                    onClick={() =>
                      handleThumbnailClick(thumbnail, thumbnailIndex + index)
                    }
                    style={{
                      outline:
                        thumbnail === selectedThumbnail
                          ? "1px solid #f5f5f599"
                          : "1px solid transparent",
                    }}
                  >
                    <img
                      src={thumbnail}
                      alt={`Thumbnail ${thumbnailIndex + index + 1}`}
                    />
                  </div>
                ))}
            </div>
          </div>
          {/* About this game */}
          <div className="about-game" ref={aboutRef}>
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
                    Competitive, Cross Platform, Online Multiplayer
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* System requirements */}
          <div className="system-requirements" ref={systemReqRef}>
            <div className="title">System Requirements</div>
            <div className="system-requirement-tbl">
              <div className="tab">
                <div
                  className={`windows ${
                    activeTab === "windows" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("windows")}
                  style={{
                    cursor: hasWindowsContent ? "pointer" : "not-allowed",
                    pointerEvents: hasWindowsContent ? "all" : "none",
                  }}
                >
                  Windows
                </div>
                <div
                  className={`macos ${activeTab === "macos" ? "active" : ""}`}
                  onClick={() => handleTabClick("macos")}
                  style={{
                    cursor: hasMacOsContent ? "pointer" : "not-allowed",
                    pointerEvents: hasMacOsContent ? "all" : "none",
                  }}
                >
                  Mac Os
                </div>
              </div>
              <div className="content">
                {/* Windows Tab */}
                {activeTab === "windows" && (
                  <div className="windows-content">
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
                          NVIDIA GeForce GTX 750TI, Intel Arc A380, AMD HD 6950
                          or equivalent
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
                          NVIDIA GeForce GTX 1060 6G, Intel Arc A750, AMD RX480
                          or equivalent
                        </div>
                      </div>
                      <div className="storage">
                        <span>Storage</span>
                        <div className="inner">20 GB available space</div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Mac Os Tab */}
                {activeTab === "macos" && (
                  <div className="macos-content">
                    <div className="mininum">
                      <div className="title">Mininum</div>
                      <div className="os-version">
                        <span>OS version</span>
                        <div className="inner">MacOs 10 64-bit</div>
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
                          NVIDIA GeForce GTX 750TI, Intel Arc A380, AMD HD 6950
                          or equivalent
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
                        <div className="inner">MacOs Sonoma</div>
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
                          NVIDIA GeForce GTX 1060 6G, Intel Arc A750, AMD RX480
                          or equivalent
                        </div>
                      </div>
                      <div className="storage">
                        <span>Storage</span>
                        <div className="inner">20 GB available space</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="copy-right">
                &copy; 2021 Hangzhou 24 Entertainment Network Technology Co.Ltd.
                All Rights Reserved. (R) & (C) BLE,LLC. All Rights Reserved.
              </div>
            </div>
          </div>
          {/* Related Games */}
          <div className="related-games" ref={relatedGamesRef}>
            <div className="related-heading">
              <div className="title">Related Games</div>
              <Navigate
                onNavigate={handleRelatedProductNavigate}
                disableLeft={relatedProductIndex === 0}
                disableRight={relatedProductIndex >= relatedProduct.length - 4}
                totalProducts={relatedProduct.length}
              />
            </div>
            <div className="related-contain">
              {relatedProduct
                .slice(relatedProductIndex, relatedProductIndex + 4)
                .map((_, index) => (
                  <div key={index} className="product-item">
                    {relatedProductIndex + index + 1}
                  </div>
                ))}
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
          {/* Step 01 */}
          <div className="step-1">
            <label>Step 1</label>
            <div className="add-btn">
              <button className="add-to-wishlist">
                <span className="solar--heart-linear iconify"></span>wishlist
              </button>
              <button className="add-to-cart">Add to cart</button>
            </div>
            <div
              className="buy-item"
              onClick={goToStep2}
              style={{
                border:
                  currentStep === 2 ? "1px solid #ffbb38" : "1px solid #4a4a4a",
              }}
            >
              <div className="title">
                <span className="icons8--buy iconify"></span>Buy {productName}
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

          {/* Step 02 */}
          {currentStep === 2 && (
            <div className="step-2">
              <label>Step 2</label>
              <div className="heading">Select an edition</div>
              <div
                className="select-item"
                onClick={() => handleItemSelection("Standard Edition")}
                style={{
                  border:
                    selectedItem === "Standard Edition"
                      ? "1px solid #ffbb38"
                      : "1px solid #4a4a4a",
                }}
              >
                <div className="title">Standard Edition</div>
                <div
                  className={`price ${"Free" === "Free" ? "free-price" : ""}`}
                >
                  Free
                </div>
              </div>
              <div
                className="select-item"
                onClick={() => handleItemSelection("Deluxe Edition")}
                style={{
                  border:
                    selectedItem === "Deluxe Edition"
                      ? "1px solid #ffbb38"
                      : "1px solid #4a4a4a",
                }}
              >
                <div className="title">Deluxe Edition</div>
                <div className="price">
                  <PriceCalculator originalPrice="620.000đ" discount={0.3} />
                </div>
              </div>
              <div
                className="select-item"
                onClick={() => handleItemSelection("Ultimate Edition")}
                style={{
                  border:
                    selectedItem === "Ultimate Edition"
                      ? "1px solid #ffbb38"
                      : "1px solid #4a4a4a",
                }}
              >
                <div className="title">Ultimate Edition</div>
                <div className="price">
                  <PriceCalculator originalPrice="920.000đ" discount={0.3} />
                </div>
              </div>
            </div>
          )}

          {/* Proceed Section */}
          {selectedItem && (
            <div className="proceed">
              <div className="empty">Make a selection to proceed</div>
              <div className="selected">
                <span>Your selection</span>
                <div className="product">
                  <div className="product-name">
                    {productName} - {selectedItem}
                  </div>
                  <div className="price">{getPrice(selectedItem)}</div>
                </div>
                <label className="taxes-label">
                  Taxes calculated at checkout
                </label>
                <button className="checkout-btn">Check out</button>
              </div>
              <div className="description">
                This game includes optional in-game purchases of virtual
                currency that can be used to acquire virtual in-game items.
              </div>
              <div className="accept">
                By clicking “Check out”, you agree to the game’s{" "}
                <Link to="">Legal Disclosures</Link> and{" "}
                <Link to="">Terms of Sale</Link>.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
