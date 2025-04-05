import React, { useState, useEffect } from "react";
import "./TopicCard.scss";

import topic_card_01 from "../../assets/images/feature-topic/topic-01.webp";
import topic_card_02 from "../../assets/images/feature-topic/topic-02.webp";
import topic_card_03 from "../../assets/images/feature-topic/topic-03.webp";

type Props = {};

const TopicCards = (props: Props) => {
  const [isCardListVisible, setIsCardListVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallTablet, setIsSmallTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Update button disabled states
  const isLeftDisabled = currentIndex === 0;
  const isRightDisabled = isSmallTablet
    ? currentIndex === 2
    : currentIndex === 1;

  // Add scroll visibility handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      setIsCardListVisible(scrollPosition > window.innerHeight * 1.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
      setIsSmallTablet(window.innerWidth <= 640);
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevClick = () => {
    if (isMobile) {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    }
  };

  const handleNextClick = () => {
    if (isSmallTablet) {
      // Use isSmallTablet instead of isMobile for 640px breakpoint
      if (currentIndex < 2) {
        // Allow navigation through all 3 topics on small tablet
        setCurrentIndex((prev) => prev + 1);
      }
    } else if (isTablet) {
      if (currentIndex < 1) {
        // Regular tablet (1024px) behavior with 2 topics
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  // Update getCardStyle function
  const getCardStyle = (index: number): React.CSSProperties => {
    if (!isTablet) return {};

    if (isSmallTablet) {
      return {
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: "all 0.3s ease-in-out",
        display: "block",
        width: "100%",
        flex: "0 0 100%",
        opacity: index === currentIndex ? "1" : "0",
        visibility: index === currentIndex ? "visible" : "hidden",
      };
    }

    // Regular tablet styles (1024px)
    return {
      transform: `translateX(${currentIndex === 1 ? "-100%" : "0"})`,
      transition: "all 0.3s ease-in-out",
      display: "block",
      marginRight:
        currentIndex === 0 && index === 0 ? "20px" : index === 1 ? "20px" : "0",
      opacity:
        currentIndex === 1 && index === 0
          ? "0"
          : index === 2 && currentIndex === 0
          ? "0"
          : "1",
      visibility:
        currentIndex === 1 && index === 0
          ? "hidden"
          : index === 2 && currentIndex === 0
          ? "hidden"
          : "visible",
      width: "100%",
      flex: "0 0 calc(50% - 10px)",
    };
  };

  // Add dot navigation handler
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Update return JSX to show arrows when NOT mobile
  return (
    <div className={`feature-topic ${isCardListVisible ? "appear" : ""}`}>
      {/* Show arrows when NOT mobile (>480px) */}
      {!isMobile && (
        <div className="topic-navigation">
          <button
            className={`nav-btn prev ${isLeftDisabled ? "disabled" : ""}`}
            onClick={handlePrevClick}
            disabled={isLeftDisabled}
          >
            <span className="gravity-ui--arrow-left"></span>
          </button>
          <button
            className={`nav-btn next ${isRightDisabled ? "disabled" : ""}`}
            onClick={handleNextClick}
            disabled={isRightDisabled}
          >
            <span className="gravity-ui--arrow-right"></span>
          </button>
        </div>
      )}
      <div className="topic-container">
        {[topic_card_01, topic_card_02, topic_card_03].map((img, index) => (
          <div key={index} className="topic-card" style={getCardStyle(index)}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      {/* Show dot navigation only on mobile (≤480px) */}
      {isMobile && (
        <div className="dot-navigation">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicCards;
