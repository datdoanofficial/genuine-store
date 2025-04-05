import React from "react";
import { Link } from "react-router-dom";
import "./ProductCardInteractive.scss";

import productImg from "../../assets/images/products/black-myth-wukong.webp";

type Props = {
  isInCart: boolean;
};

const ProductCardInteractive = ({ isInCart }: Props) => {
  const [viewportSize, setViewportSize] = React.useState<
    "desktop" | "tablet" | "mobile" | "smallMobile" | "extraSmallMobile"
  >(
    window.innerWidth <= 375
      ? "extraSmallMobile"
      : window.innerWidth <= 576
      ? "smallMobile"
      : window.innerWidth <= 768
      ? "mobile"
      : window.innerWidth <= 1024
      ? "tablet"
      : "desktop"
  );

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setViewportSize("extraSmallMobile");
      } else if (window.innerWidth <= 576) {
        setViewportSize("smallMobile");
      } else if (window.innerWidth <= 768) {
        setViewportSize("mobile");
      } else if (window.innerWidth <= 1024) {
        setViewportSize("tablet");
      } else {
        setViewportSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderDeleteButton = () => {
    if (viewportSize === "tablet") {
      return "Delete";
    }
    return <span className="fluent--delete-20-regular"></span>;
  };

  const renderActionButton = () => {
    if (viewportSize === "mobile" || viewportSize === "extraSmallMobile") {
      return isInCart ? (
        <span className="solar--heart-linear"></span>
      ) : (
        <span className="la--cart-plus"></span>
      );
    }
    return isInCart ? "Move to wishlist" : "Add to cart";
  };

  return (
    <div className="product-cart">
      <Link to="/product-details" className="product-img">
        <img src={productImg} alt="" />
      </Link>
      <div className="product-content">
        <div className="name-and-price">
          <Link to="/product-details" className="product-name">
            <span>Black Myth: Wukong</span>
          </Link>
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
          <button className="remove-btn">{renderDeleteButton()}</button>
          <button className="add-to-cart">{renderActionButton()}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardInteractive;
