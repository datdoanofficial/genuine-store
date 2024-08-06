import React from "react";
import "../styles/pages/Cart.scss";
import ProductCardInteractive from "../components/Cards/ProductCardInteractive";
import ToolBar from "../components/Common/ToolBar";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div className="cart-page">
      <div className="cart-header">
        <ToolBar />
        <h1>My Cart</h1>
      </div>
      <div className="cart-container">
        <div className="cart-item">
          {Array.from({ length: 10 }, (_, index) => (
            <ProductCardInteractive isInCart={true} key={index} />
          ))}
        </div>
        <div className="cart-total">
          <div className="header">
            <div className="title">Games Summary</div>
          </div>
          <div className="cart-summary-price">
            <span>Price</span>
            <div className="price">1,620,000đ</div>
          </div>
          <div className="cart-summary-sale">
            <span>Sale Discount</span>
            <div className="sale-discount">-620,000đ</div>
          </div>
          <div className="cart-summary-taxes">
            <span>Taxes</span>
            <div className="taxes">Calculated at Checkout</div>
          </div>
          <div className="cart-summary-subtotal">
            <span>Subtotal</span>
            <div className="subtotal">1,000,000đ</div>
          </div>
          <button className="cart-summary-cta">Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
