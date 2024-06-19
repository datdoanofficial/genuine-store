import React from "react";
import "./HorizontalCards.scss";
import PrimaryBtn from "../Common/PrimaryBtn";
import cardDemo from "../../assets/images/card/card-demo.png";
import cardDemo1 from "../../assets/images/card/card-demo-01.png";

// Define a type for the banner data to include the properties used
type Banner = {
  src: string;
  name: string;
  rating: number; // Assuming rating is a number for simplicity
  votes: number;
  price: string;
  discount?: number;
};

// Example banner data, replace with actual data
const bannerData: Banner[] = [
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
    <div className="horizontal-cards">
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
            <div key={index} className="card">
              <img src={cardDemo} alt="" />
              {renderCardItems()}
            </div>
          ))}
        </div>
        <div className="second-line line">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="card">
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
