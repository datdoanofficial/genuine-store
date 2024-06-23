import React, { useEffect, useState } from "react";
import "./HorizontalCards.scss";
import PrimaryBtn from "../Common/PrimaryBtn";
import cardDemo from "../../assets/images/card/card-demo.png";
import cardDemo1 from "../../assets/images/card/card-demo-01.png";

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
    name: "The Crew™ Motorfest Trial",
    rating: 5,
    votes: 125,
    price: "1.190.000đ",
    discount: 0.1,
  },
];

const HorizontalCards = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
  };

  const [isCardListVisible, setIsCardListVisible] = useState(false);

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

  const renderCardItems = () => {
    return bannerData.map((banner, index) => {
      // Ensure discount is a number and greater than 0
      const hasDiscount =
        typeof banner.discount === "number" && banner.discount > 0;
      // Check if the price is not "Free"
      const isPriceNotFree = banner.price !== "Free";

      return (
        <div>
          <div className="card-info">
            <div className="title">{banner.name}</div>
            <div className="rating">
              <div className="stars">{renderStars(banner.rating)}</div>
              <div className="total-rating">{banner.votes} votes</div>
            </div>
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
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, () => (
      <i className="solar--star-bold" />
    )).map((star, index) => (
      <React.Fragment key={index}>{star}</React.Fragment>
    ));
  };

  return (
    <div className={`horizontal-cards ${isCardListVisible ? "appear" : ""}`}>
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
          {Array.from({ length: 10 }, (_, index) => (
            <div className="card">
              <img src={cardDemo} alt="" />
              {renderCardItems()}
            </div>
          ))}
        </div>
        <div className="second-line line">
          {Array.from({ length: 10 }, (_, index) => (
            <div className="card">
              <img src={cardDemo1} alt="" />
              {renderCardItems()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;
