// Adjusted imports
import React, { useState, useEffect, useRef } from "react";
import banner1 from "../../assets/images/banner/banner-01.png";
import banner2 from "../../assets/images/banner/banner-02.png";
import banner3 from "../../assets/images/banner/banner-03.png";
import banner4 from "../../assets/images/banner/banner-04.png";
import "./HomeBanner.scss";

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
    src: banner1,
    name: "Black Myth: Wukong",
    rating: 5,
    votes: 1052,
    price: "1.299.000đ",
    discount: 0,
  },
  {
    src: banner2,
    name: "Ghost of Tsushima",
    rating: 5,
    votes: 866,
    price: "1.524.000đ",
    discount: 0.2,
  },
  {
    src: banner3,
    name: "NARAKA: BLADEPOINT",
    rating: 5,
    votes: 422,
    price: "Free",
    discount: 0,
  },
  {
    src: banner4,
    name: "Genshin Impact",
    rating: 5,
    votes: 584,
    price: "Free",
    discount: 0,
  },
];

const HomeBanner = () => {
  const [currentOverlay, setCurrentOverlay] = useState(0);
  const [animateBanner, setAnimateBanner] = useState(false);
  const [pageLoadAnimation, setPageLoadAnimation] = useState(true); // State to control animation on page load
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
        <div
          key={index}
          className="card-item"
          onClick={() => handleCardItemClick(index)}
          style={{
            animationDelay: `${index * 0.5}s`,
          }}
          role="button"
          tabIndex={0}
        >
          <div
            className={`overlay-${index + 1} overlay`}
            style={{
              animation:
                currentOverlay === index
                  ? `expandOverlay ${index === 0 ? "7s" : "7s"} ${
                      index === 0 && pageLoadAnimation ? "0s" : "0s"
                    } forwards`
                  : "none",
              width:
                currentOverlay === index
                  ? "0%"
                  : currentOverlay > index
                  ? "100%"
                  : "0%",
              opacity: currentOverlay === index ? 1 : 0,
            }}
          ></div>
          <div className="card-content">
            <div className="name">{banner.name}</div>
            <div className="rating">
              <span className="stars">{renderStars(banner.rating)}</span>
              <span className="total-rating">{banner.votes} votes</span>
            </div>
            {/* Other banner elements */}
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoadAnimation(false);
    }, 500);

    intervalRef.current = setInterval(() => {
      if (!animateBanner) {
        setAnimateBanner(true);
        setTimeout(() => setAnimateBanner(false), 500);
        setCurrentOverlay(
          (prevOverlay) => (prevOverlay + 1) % bannerData.length
        );
      }
    }, 6000);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [animateBanner]);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, () => (
      <i className="solar--star-bold" />
    )).map((star, index) => (
      <React.Fragment key={index}>{star}</React.Fragment>
    ));
  };

  const handleCardItemClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentOverlay(index);
    setAnimateBanner(true);
    setTimeout(() => setAnimateBanner(false), 500);

    intervalRef.current = setInterval(() => {
      if (!animateBanner) {
        setAnimateBanner(true);
        setTimeout(() => setAnimateBanner(false), 500);
        setCurrentOverlay(
          (prevOverlay) => (prevOverlay + 1) % bannerData.length
        );
      }
    }, 6000);
  };

  return (
    <div className="home-banner">
      <div
        className={`slide ${pageLoadAnimation ? "animate-on-load" : ""} ${
          animateBanner ? "banner-animate" : ""
        }`}
      >
        <img src={bannerData[currentOverlay].src} alt="" />
      </div>
      <div className="card-information">{renderCardItems()}</div>
    </div>
  );
};

export default HomeBanner;
