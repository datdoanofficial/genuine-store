import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import prdImg from "../../assets/images/card/card-demo.png";
import PriceCalculator from "../Common/PriceCalculator";

type Props = {};

const ProductCard = (props: Props) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="prd-card">
      <Link to="/product-details">
        <div className="prd-img">
          <img src={prdImg} alt="" />
          <button
            className={`wishlist ${isWishlisted ? "wishlisted" : ""}`}
            onClick={handleWishlistClick}
          >
            <span
              className={`icon ${
                isWishlisted ? "tabler--check" : "tabler--plus"
              }`}
            ></span>
          </button>
        </div>
      </Link>
      <div className="prd-content">
        <Link to="/product-details" className="prd-title">
          <span>The Crew™ Motorfest</span>
        </Link>
        <PriceCalculator originalPrice="1.190.000đ" discount={0.1} />
      </div>
    </div>
  );
};

export default ProductCard;
