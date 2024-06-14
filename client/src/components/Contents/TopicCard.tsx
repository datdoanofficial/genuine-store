import React, { useState, useEffect } from "react";
import "./TopicCard.scss";

import topic_card_01 from "../../assets/images/feature-topic/topic-01.png";
import topic_card_02 from "../../assets/images/feature-topic/topic-02.png";
import topic_card_03 from "../../assets/images/feature-topic/topic-03.png";

type Props = {};

const TopicCards = (props: Props) => {
  const [isCardListVisible, setIsCardListVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      setIsCardListVisible(scrollPosition > window.innerHeight * 1.8); // 100vh * 2 = 200vh
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* feature topic */}
      <div className={`feature-topic ${isCardListVisible ? "appear" : ""}`}>
        <div className="topic-card">
          <img src={topic_card_01} alt="" />
        </div>
        <div className="topic-card">
          <img src={topic_card_02} alt="" />
        </div>
        <div className="topic-card">
          <img src={topic_card_03} alt="" />
        </div>
      </div>
    </>
  );
};

export default TopicCards;
