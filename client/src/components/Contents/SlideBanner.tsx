import React, { useState, useEffect } from "react";
import "./SlideBanner.scss";
import SecondaryBtn from "../Common/SecondaryBtn";
import SmallBtn from "../Common/SmallBtn";

import freeGames1 from "../../assets/images/card/freegames-01.png";
import freeGames2 from "../../assets/images/card/freegames-02.png";
import freeGames3 from "../../assets/images/card/freegames-03.png";
import freeGames4 from "../../assets/images/card/freegames-04.png";
import freeGames5 from "../../assets/images/card/freegames-05.png";
import freeGames6 from "../../assets/images/card/freegames-06.png";
type Props = {};

const SlideBanner = (props: Props) => {
  // Step 1: Define Card Data
  const cardData = [
    {
      title: "NARAKA: BLADEPOINT",
      description:
        "Battle for glory in Naraka: Bladepoint, where martial arts and modern weapons clash in a 60-player arena. Master heroes, explore a mystical island, and fight to become a legend.",
      image: freeGames1,
      link: "/game",
    },
    {
      title: "Genshin Impact",
      description:
        "Explore a vast world brimming with magic, stories, and characters. Unleash your power, discover breathtaking landscapes, and forge your destiny.",
      image: freeGames2,
      link: "/game",
    },
    {
      title: "Wuthering Waves",
      description:
        "Awaken as Rover and journey through a vast, open world to reclaim your lost memories. Join forces with a vibrant cast of Resonators to overcome the Lament in this action RPG.",
      image: freeGames3,
      link: "/game",
    },
    {
      title: "Auto Chess",
      description:
        "Experience a new era of strategy and competition in Auto Chess! Outsmart opponents worldwide with innovative gameplay and become a legend in this global phenomenon.",
      image: freeGames4,
      link: "/game",
    },
    {
      title: "PUBG: BATTLEGROUNDS",
      description:
        "The ultimate free-to-play battle royale. Drop in, gear up, outwit your opponents, and be the last one standing. Diverse maps, intense action, and endless possibilities await!",
      image: freeGames5,
      link: "/game",
    },
    {
      title: "Honkai: Star Rail",
      description:
        "Honkai: Star Rail is a new HoYoverse space fantasy RPG. Hop aboard the Astral Express and experience the galaxy's infinite wonders on this journey filled with adventure and thrills.",
      image: freeGames6,
      link: "/game",
    },
  ];

  const cards = [
    freeGames1,
    freeGames2,
    freeGames3,
    freeGames4,
    freeGames5,
    freeGames6,
  ];
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 2 }); // Initially showing first 3 cards

  const handleLeftArrowClick = () => {
    setVisibleRange((prevRange) => {
      const newStart = (prevRange.start - 1 + cards.length) % cards.length;
      const newEnd = (prevRange.end - 1 + cards.length) % cards.length;
      return { start: newStart, end: newEnd };
    });
  };

  const handleRightArrowClick = () => {
    setVisibleRange((prevRange) => {
      const newStart = (prevRange.start + 1) % cards.length;
      const newEnd = (prevRange.end + 1) % cards.length;
      return { start: newStart, end: newEnd };
    });
  };

  // Adjust the visibleCards calculation to work with indices
  const visibleCardsIndices = Array.from(
    {
      length:
        (visibleRange.end + 1 - visibleRange.start + cards.length) %
        cards.length,
    },
    (_, i) => (visibleRange.start + i) % cards.length
  );

  const [isCardListVisible, setIsCardListVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      setIsCardListVisible(scrollPosition > window.innerHeight * 1.2); // 100vh * 1.2 = 120vh
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`free-games-list ${isCardListVisible ? "appear" : ""}`}>
      {/* title */}
      <div className="heading">
        <div className="title">Free Games</div>
        <SecondaryBtn to="/store">View all</SecondaryBtn>
      </div>
      {/* card list */}
      <div className="card-list">
        <div className="navigation">
          <div className="left-arrow" onClick={handleLeftArrowClick}>
            <span className="gravity-ui--arrow-left"></span>
          </div>
          <div className="right-arrow" onClick={handleRightArrowClick}>
            <span className="gravity-ui--arrow-right"></span>
          </div>
        </div>
        <div className="card-item">
          {visibleCardsIndices.map((index) => {
            const card = cardData[index];
            return (
              <div className={`card card-0${index + 1}`} key={index}>
                <div className="card-inner">
                  <div className="img-thumb">
                    <img src={card.image} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-title">{card.title}</div>
                    <div className="card-description">{card.description}</div>
                    <div className="card-action" id="card-action">
                      <SmallBtn to={card.link} className="btn-small">
                        View More
                      </SmallBtn>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SlideBanner;
