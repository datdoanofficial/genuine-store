// Adjusted imports
import React, { useState, useEffect, useRef } from "react";
import banner1 from "../../assets/images/banner/banner-01.png";
import banner2 from "../../assets/images/banner/banner-02.png";
import banner3 from "../../assets/images/banner/banner-03.png";
import banner4 from "../../assets/images/banner/banner-04.png";

// Add tablet banner imports
import tabletBanner1 from "../../assets/images/banner/tablet-banner-01.png";
import tabletBanner2 from "../../assets/images/banner/tablet-banner-02.png";
import tabletBanner3 from "../../assets/images/banner/tablet-banner-03.png";
import tabletBanner4 from "../../assets/images/banner/tablet-banner-04.png";

import VotesCount from "../Common/VotesCount";
import "./HomeBanner.scss";

type Banner = {
  src: string;
  name: string;
  rating: number;
  votes: number;
  price: string;
  discount?: number;
};

const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOverlay, setCurrentOverlay] = useState(0);
  const [animateBanner, setAnimateBanner] = useState(false);
  const [pageLoadAnimation, setPageLoadAnimation] = useState(true);
  const [screenSize, setScreenSize] = useState<
    "desktop" | "desktop-sm" | "tablet" | "mobile"
  >("desktop");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle dot navigation click
  const handleDotClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentOverlay(index);
    setCurrentIndex(index);
    setAnimateBanner(true);
    setTimeout(() => setAnimateBanner(false), 500);

    // Reset interval after click
    intervalRef.current = setInterval(() => {
      if (!animateBanner) {
        setAnimateBanner(true);
        setTimeout(() => setAnimateBanner(false), 500);
        setCurrentOverlay((prev) => (prev + 1) % bannerData.length);
        setCurrentIndex((prev) => (prev + 1) % bannerData.length);
      }
    }, 6000);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setScreenSize("mobile");
      } else if (window.innerWidth <= 768) {
        setScreenSize("tablet");
      } else if (window.innerWidth <= 1024) {
        setScreenSize("desktop-sm");
      } else {
        setScreenSize("desktop");
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBannerImage = (desktopImg: string, tabletImg: string) => {
    switch (screenSize) {
      case "mobile":
        return tabletImg; // Reuse tablet images for mobile (480px)
      case "tablet":
        return desktopImg; // Use desktop images for tablet (768px)
      case "desktop-sm":
        return tabletImg; // Use tablet images for small desktop (1024px)
      default:
        return desktopImg; // Use desktop images for larger screens
    }
  };

  // Update bannerData to use the helper function
  const bannerData: Banner[] = [
    {
      src: getBannerImage(banner1, tabletBanner1),
      name: "Black Myth: Wukong",
      rating: 5,
      votes: 1052,
      price: "1.299.000đ",
      discount: 0,
    },
    {
      src: getBannerImage(banner2, tabletBanner2),
      name: "Ghost of Tsushima",
      rating: 5,
      votes: 866,
      price: "1.524.000đ",
      discount: 0.2,
    },
    {
      src: getBannerImage(banner3, tabletBanner3),
      name: "NARAKA: BLADEPOINT",
      rating: 5,
      votes: 422,
      price: "Free",
      discount: 0,
    },
    {
      src: getBannerImage(banner4, tabletBanner4),
      name: "Avatar: Frontiers of Pandora",
      rating: 5,
      votes: 584,
      price: "1.190.000đ",
      discount: 0.1,
    },
  ];

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
            <VotesCount rating={banner.rating} votes={banner.votes} />
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

  // Update the interval effect to sync currentIndex with currentOverlay
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoadAnimation(false);
    }, 500);

    intervalRef.current = setInterval(() => {
      if (!animateBanner) {
        setAnimateBanner(true);
        setTimeout(() => setAnimateBanner(false), 500);

        // Update both currentOverlay and currentIndex
        setCurrentOverlay((prevOverlay) => {
          const nextIndex = (prevOverlay + 1) % bannerData.length;
          setCurrentIndex(nextIndex); // Sync the dot navigation
          return nextIndex;
        });
      }
    }, 6000);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [animateBanner, bannerData.length]);

  // Update handleCardItemClick to sync currentIndex
  const handleCardItemClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentOverlay(index);
    setCurrentIndex(index); // Sync the dot navigation
    setAnimateBanner(true);
    setTimeout(() => setAnimateBanner(false), 500);

    intervalRef.current = setInterval(() => {
      if (!animateBanner) {
        setAnimateBanner(true);
        setTimeout(() => setAnimateBanner(false), 500);
        setCurrentOverlay((prevOverlay) => {
          const nextIndex = (prevOverlay + 1) % bannerData.length;
          setCurrentIndex(nextIndex); // Sync the dot navigation
          return nextIndex;
        });
      }
    }, 6000);
  };

  return (
    <div className="home-banner">
      <div
        className={`slide ${
          screenSize !== "mobile" && pageLoadAnimation ? "animate-on-load" : ""
        } ${animateBanner ? "banner-animate" : ""}`}
      >
        <img src={bannerData[currentOverlay].src} alt="" />
      </div>
      {screenSize === "mobile" ? (
        <div className="dot-navigation">
          {bannerData.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      ) : (
        <div className="card-information">{renderCardItems()}</div>
      )}
    </div>
  );
};

export default HomeBanner;
