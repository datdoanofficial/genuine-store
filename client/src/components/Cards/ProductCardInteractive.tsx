import React from "react";
import "./ProductCardInteractive.scss";

import productImg from "../../assets/images/products/black-myth-wukong.png";

type Props = {
  isInCart: boolean;
};

const ProductCardInteractive = ({ isInCart }: Props) => {
  return (
    <div className="product-cart">
      <div className="product-img">
        <img src={productImg} alt="" />
      </div>
      <div className="product-content">
        <div className="name-and-price">
          <div className="product-name">Black Myth: Wukong</div>
          <div className="product-price">1.299.000đ</div>
        </div>
        <div className="tag">Base Game</div>
        <div className="release-date">Available 20/08/2024</div>
        <div className="genre">
          <div className="label">Genre:</div>
          <div className="genre-item">Action, Adventure, RPG</div>
        </div>
        <div className="platform">
          <div className="label">Platform:</div>
          <span className="teenyicons--windows-solid"></span>
        </div>

        <div className="action-btn">
          <button className="remove-btn">
            <span className="fluent--delete-20-regular"></span>
          </button>
          <button className="add-to-cart">
            {isInCart ? "Move to wishlist" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardInteractive;
