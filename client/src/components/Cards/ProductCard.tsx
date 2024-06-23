import React from "react";
import "./ProductCard.scss";
import prdImg from "../../assets/images/card/card-demo.png";
import PriceCalculator from "../Common/PriceCalculator";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className="prd-card">
      <div className="prd-img">
        <img src={prdImg} alt="" />
      </div>
      <div className="prd-content">
        <div className="prd-title">The Crew™ Motorfest</div>
        <PriceCalculator originalPrice="1.190.000đ" discount={0.1} />
      </div>
    </div>
  );
};

export default ProductCard;
