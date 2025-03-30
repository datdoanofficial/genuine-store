import React, { useEffect, useState } from "react";
import "./HorizontalCards.scss";
import PrimaryBtn from "../Common/PrimaryBtn";
import VotesCount from "../Common/VotesCount";

import cardDemo from "../../assets/images/card/card-demo.png";
import cardDemo1 from "../../assets/images/card/card-demo-01.png";
import cardDemo2 from "../../assets/images/card/card-demo-02.png";
import cardDemo3 from "../../assets/images/card/card-demo-03.png";
import cardDemo4 from "../../assets/images/card/card-demo-04.png";
import cardDemo5 from "../../assets/images/card/card-demo-05.png";
import cardDemo6 from "../../assets/images/card/card-demo-06.png";
import cardDemo7 from "../../assets/images/card/card-demo-07.png";
import cardDemo8 from "../../assets/images/card/card-demo-08.png";
import cardDemo9 from "../../assets/images/card/card-demo-09.png";
import cardDemo10 from "../../assets/images/card/card-demo-10.png";
import cardDemo11 from "../../assets/images/card/card-demo-11.png";
import cardDemo12 from "../../assets/images/card/card-demo-12.png";
import cardDemo13 from "../../assets/images/card/card-demo-13.png";
import cardDemo14 from "../../assets/images/card/card-demo-14.png";
import cardDemo15 from "../../assets/images/card/card-demo-15.png";
import cardDemo16 from "../../assets/images/card/card-demo-16.png";
import cardDemo17 from "../../assets/images/card/card-demo-17.png";
import cardDemo18 from "../../assets/images/card/card-demo-18.png";
import cardDemo19 from "../../assets/images/card/card-demo-19.png";

type card = {
  src: string;
  name: string;
  rating: number;
  votes: number;
  price: string;
  discount?: number;
};

const bannerData: card[] = [
  {
    src: cardDemo,
    name: "The Crew™ Motorfest - Standard Edition",
    rating: 5,
    votes: 125,
    price: "1.190.000đ",
    discount: 0.1,
  },
  {
    src: cardDemo1,
    name: "Grand Theft Auto V: Premium Edition",
    rating: 5,
    votes: 100,
    price: "455.500đ",
  },
  {
    src: cardDemo2,
    name: "Mirror's Edge™ Catalyst",
    rating: 4,
    votes: 80,
    price: "490.000đ",
  },
  {
    src: cardDemo3,
    name: "The Witcher 3: Wild Hunt - Complete Edition",
    rating: 5,
    votes: 200,
    price: "462.000đ",
  },
  {
    src: cardDemo4,
    name: "Prince of Persia The Lost Crown",
    rating: 4,
    votes: 150,
    price: "690.000đ",
    discount: 0.4,
  },
  {
    src: cardDemo5,
    name: "Just Cause 4 Reloaded",
    rating: 5,
    votes: 60,
    price: "872.000đ",
    discount: 0.2,
  },
  {
    src: cardDemo6,
    name: "STAR WARS™: Squadrons",
    rating: 5,
    votes: 300,
    price: "950.000đ",
  },
  {
    src: cardDemo7,
    name: "Riders Republic",
    rating: 4,
    votes: 120,
    price: "690.000đ",
    discount: 0.2,
  },
  {
    src: cardDemo8,
    name: "Need for Speed™ Heat - Deluxe Edition",
    rating: 4,
    votes: 90,
    price: "1.650.000đ",
  },
  {
    src: cardDemo9,
    name: "FATAL FURY: City of the Wolves - Special Edition",
    rating: 5,
    votes: 250,
    price: "1.526.463đ",
  },
  {
    src: cardDemo10,
    name: "Horizon Forbidden West™ - Complete Edition",
    rating: 4,
    votes: 110,
    price: "1.399.000đ",
  },
  {
    src: cardDemo11,
    name: "It Takes Two",
    rating: 5,
    votes: 70,
    price: "790.000đ",
    discount: 0.3,
  },
  {
    src: cardDemo12,
    name: "EA SPORTS™ Madden NFL 25",
    rating: 5,
    votes: 220,
    price: "1.299.000đ",
  },
  {
    src: cardDemo13,
    name: "OCTOPATH TRAVELER™",
    rating: 4,
    votes: 140,
    price: "1.250.000đ",
  },
  {
    src: cardDemo14,
    name: "Assassin’s Creed Shadows",
    rating: 4,
    votes: 50,
    price: "1.190.000đ",
    discount: 0.2,
  },
  {
    src: cardDemo15,
    name: "DNF Duel",
    rating: 4,
    votes: 280,
    price: "1.140.000đ",
  },
  {
    src: cardDemo16,
    name: "Nioh 2 – The Complete Edition",
    rating: 5,
    votes: 130,
    price: "992.000đ",
    discount: 0.3,
  },
  {
    src: cardDemo17,
    name: "Immortals of Aveum™",
    rating: 4,
    votes: 85,
    price: "990.000đ",
    discount: 0.6,
  },
  {
    src: cardDemo18,
    name: "Cyberpunk 2077",
    rating: 5,
    votes: 260,
    price: "971.000đ",
    discount: 0.1,
  },
  {
    src: cardDemo19,
    name: "Battlefield 4™ Premium Edition",
    rating: 5,
    votes: 115,
    price: "950.000đ",
    discount: 0.7,
  },
];

const HorizontalCards = () => {
  const firstLineItems = [
    { id: 1, imgSrc: cardDemo, content: "Item 1" },
    { id: 2, imgSrc: cardDemo1, content: "Item 2" },
    { id: 3, imgSrc: cardDemo2, content: "Item 3" },
    { id: 4, imgSrc: cardDemo3, content: "Item 4" },
    { id: 5, imgSrc: cardDemo4, content: "Item 5" },
    { id: 6, imgSrc: cardDemo5, content: "Item 6" },
    { id: 7, imgSrc: cardDemo6, content: "Item 7" },
    { id: 8, imgSrc: cardDemo7, content: "Item 8" },
    { id: 9, imgSrc: cardDemo8, content: "Item 9" },
    { id: 10, imgSrc: cardDemo9, content: "Item 10" },
  ];

  const secondLineItems = [
    { id: 11, imgSrc: cardDemo10, content: "Item 11" },
    { id: 12, imgSrc: cardDemo11, content: "Item 12" },
    { id: 13, imgSrc: cardDemo12, content: "Item 13" },
    { id: 14, imgSrc: cardDemo13, content: "Item 14" },
    { id: 15, imgSrc: cardDemo14, content: "Item 15" },
    { id: 16, imgSrc: cardDemo15, content: "Item 16" },
    { id: 17, imgSrc: cardDemo16, content: "Item 17" },
    { id: 18, imgSrc: cardDemo17, content: "Item 18" },
    { id: 19, imgSrc: cardDemo18, content: "Item 19" },
    { id: 20, imgSrc: cardDemo19, content: "Item 20" },
  ];

  const [isCardListVisible, setIsCardListVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      setIsCardListVisible(scrollPosition > window.innerHeight * 2.2); // 100vh * 2.2 = 220vh
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateDiscountedPrice = (
    price: string,
    discount?: number
  ): string => {
    if (discount && price !== "Free") {
      const priceNumber = parseFloat(price.replace(/\./g, "").replace("đ", ""));
      const discountedPrice = priceNumber - priceNumber * discount;
      return `${discountedPrice.toLocaleString("vi-VN")}đ`;
    }
    return price;
  };

  const renderCardItems = (itemId: number) => {
    const banner = bannerData[itemId - 1];
    if (!banner) return null;

    // Ensure discount is a number and greater than 0
    const hasDiscount =
      typeof banner.discount === "number" && banner.discount > 0;
    // Check if the price is not "Free"
    const isPriceNotFree = banner.price !== "Free";

    return (
      <div>
        <div className="card-info">
          <div className="title">{banner.name}</div>
          <VotesCount rating={banner.rating} votes={banner.votes} />
          <div className="price">
            {hasDiscount && isPriceNotFree && (
              <div className="discount">
                {`${(Number(banner.discount) * 100).toFixed(0)}%`}
              </div>
            )}
            {hasDiscount && isPriceNotFree ? (
              <span className="original-price">{banner.price}</span>
            ) : (
              ""
            )}
            {isPriceNotFree
              ? calculateDiscountedPrice(banner.price, banner.discount)
              : "Free"}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`horizontal-cards ${isCardListVisible ? "appear" : ""}`}>
      <div className="heading">
        <p>Explore Worlds</p>
        <button className="arrow-right">
          <span className="gravity-ui--arrow-right"></span>
        </button>
      </div>
      <div className="content">
        <div className="title">Explore Worlds</div>
        <div className="description">
          Step into a world brimming with mystery and wonder, where every corner
          holds a new secret waiting to be uncovered. In our games, exploration
          is more than just a side quest – it's the heart of the adventure.
        </div>
        <PrimaryBtn to="/store">Browse</PrimaryBtn>
      </div>
      <div className="line-wrapper">
        <div className="first-line line">
          {firstLineItems.map((item) => (
            <div
              className="card"
              key={item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img src={item.imgSrc} alt={item.content} />
              {hoveredItem === item.id && renderCardItems(item.id)}
            </div>
          ))}
        </div>
        <div className="second-line line">
          {secondLineItems.map((item) => (
            <div
              className="card"
              key={item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img src={item.imgSrc} alt={item.content} />
              {hoveredItem === item.id && renderCardItems(item.id)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;
