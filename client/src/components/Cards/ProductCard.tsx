import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import prdImg from "../../assets/images/card/card-demo-11.webp";
import PriceCalculator from "../Common/PriceCalculator";
import VotesCount from "../Common/VotesCount";

type Props = {};

const ProductCard = (props: Props) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const navigate = useNavigate();

  const handleWishlistClick = () => {
    if (!isWishlisted) {
      setIsWishlisted(true);
      setWishlistCount(wishlistCount + 1);
    }
  };

  const productNavigate = () => {
    navigate("/product-details");
  };

  return (
    <div className="prd-card">
      <div className="prd-img">
        <img src={prdImg} alt="" onClick={productNavigate} />
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
      <div className="prd-content">
        <Link to="/product-details" className="prd-title">
          <span>It Takes Two</span>
        </Link>
        <VotesCount rating={5} votes={70} />
        <PriceCalculator originalPrice="790.000đ" discount={0.3} />
      </div>
    </div>
  );
};

export default ProductCard;
