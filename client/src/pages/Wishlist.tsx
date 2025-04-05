import React, { useState } from "react";
import "../styles/pages/Wishlist.scss";
import ToolBar from "../components/Common/ToolBar";
import ToggleSwitch from "../components/Common/ToggleSwitch";
import WishlistFilter from "../components/Filter/WishlistFilter";
import ProductCardInteractive from "../components/Cards/ProductCardInteractive";

type Props = {};

const Wishlist = (props: Props) => {
  // const [isHovered, setIsHovered] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleToggleChange = (checked: boolean) => {
    setIsSubscribed(checked);
  };

  return (
    <div className="wishlist-page">
      <ToolBar />
      <div className="wishlist-header">
        <h1>My Wishlist</h1>
      </div>
      <div className="wishlist-content">
        <div className="receive-email">
          <div className="content">
            <span className="material-symbols--mark-email-unread-rounded email-icon"></span>
            <div className="text">
              {isSubscribed
                ? "You are subscribed to wishlist email notifications."
                : "Receive email notifications about my wishlist."}
            </div>
            {/* {!isSubscribed && (
              <span
                className="solar--question-circle-bold question-icon"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-describedby={isHovered ? "description" : undefined}
              ></span>
            )}
            {!isSubscribed && (
              <div
                id="description"
                style={{ display: isHovered ? "block" : "none" }}
              >
                Get notified when your wishlisted games go on sale, or are
                available for purchase or pre-purchase.
              </div>
            )} */}
          </div>
          <ToggleSwitch onChange={handleToggleChange} />
        </div>
        <WishlistFilter />
        {Array.from({ length: 10 }, (_, index) => (
          <ProductCardInteractive isInCart={false} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
