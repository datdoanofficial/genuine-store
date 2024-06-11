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
};

// Example banner data, replace with actual data
const bannerData: Banner[] = [
  {
    src: banner1,
    name: "Black Myth: Wukong",
    rating: 5,
    votes: 1052,
    price: "1.299.000đ",
  },
  {
    src: banner2,
    name: "Ghost of Tsushima",
    rating: 5,
    votes: 866,
    price: "1.524.000đ",
  },
  {
    src: banner3,
    name: "NARAKA: BLADEPOINT",
    rating: 5,
    votes: 422,
    price: "Free",
  },
  {
    src: banner4,
    name: "Genshin Impact",
    rating: 5,
    votes: 584,
    price: "Free",
  },
];

const HomeBanner = () => {
  const [currentOverlay, setCurrentOverlay] = useState(0);
  const [animateBanner, setAnimateBanner] = useState(false);
  const [pageLoadAnimation, setPageLoadAnimation] = useState(true); // State to control animation on page load
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const renderCardItems = () => {
    return bannerData.map((banner, index) => (
      <div
        key={index}
        className="card-item"
        onClick={() => handleCardItemClick(index)}
        style={{
          animationDelay: `${index * 0.5}s`,
        }}
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
          <div className="price">{banner.price}</div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    // This effect runs only once on component mount
    // Delay turning off the animation to allow it to complete
    const timer = setTimeout(() => {
      setPageLoadAnimation(false); // Turn off the animation after it's been applied
    }, 500); // Adjust the timeout duration to match your animation duration

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
      clearTimeout(timer); // Clear the timeout on component unmount
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

  // Inside handleCardItemClick, adjust the timing to better align with the CSS animation
  const handleCardItemClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Start the banner change immediately or with a slight delay as needed
    setCurrentOverlay(index);

    // Adjust the timing here to better align with your CSS animations
    setAnimateBanner(true);
    setTimeout(() => setAnimateBanner(false), 500); // Adjusted to slightly less than the CSS animation duration

    // Restart the interval with adjusted timing if necessary
    intervalRef.current = setInterval(() => {
      if (!animateBanner) {
        setAnimateBanner(true);
        setTimeout(() => setAnimateBanner(false), 500); // Keep consistent timing
        setCurrentOverlay(
          (prevOverlay) => (prevOverlay + 1) % bannerData.length
        );
      }
    }, 6000); // Consider adjusting this duration if needed
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
