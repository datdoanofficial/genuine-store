import React, { useState, useEffect } from "react";
import "./RltNavigate.scss";

type Props = {
  onNavigate: (direction: "left" | "right") => void;
  disableLeft: boolean;
  disableRight: boolean;
  totalProducts: number;
  currentRange: { start: number; end: number }; // Add currentRange prop
};

const RltNavigate = ({
  onNavigate,
  disableLeft,
  disableRight,
  totalProducts,
  currentRange,
}: Props) => {
  const [position, setPosition] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [barMetrics, setBarMetrics] = useState({
    baseWidth: 80,
  });

  // Add resize listener to update itemsPerView
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setItemsPerView(1);
        setBarMetrics({ baseWidth: 160 });
      } else if (window.innerWidth <= 640) {
        setItemsPerView(2);
        setBarMetrics({ baseWidth: 80 });
      } else if (window.innerWidth <= 768) {
        setItemsPerView(3);
        setBarMetrics({ baseWidth: 80 });
      } else if (window.innerWidth <= 900) {
        setItemsPerView(2);
        setBarMetrics({ baseWidth: 80 });
      } else if (window.innerWidth <= 1240) {
        setItemsPerView(3);
        setBarMetrics({ baseWidth: 80 });
      } else {
        setItemsPerView(4);
        setBarMetrics({ baseWidth: 80 });
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate segments based on itemsPerView
  const segments = Math.ceil(totalProducts / itemsPerView);
  const barWidth = barMetrics.baseWidth / segments;
  const stepSize = barWidth;

  useEffect(() => {
    // Update position based on the currentRange and itemsPerView
    const newPosition = Math.floor(currentRange.start / itemsPerView);
    setPosition(newPosition);
  }, [currentRange, itemsPerView]);

  const handleNavigate = (direction: "left" | "right") => {
    if (direction === "left" && position > 0) {
      setPosition(position - 1);
      onNavigate("left");
    } else if (direction === "right" && position < segments - 1) {
      setPosition(position + 1);
      onNavigate("right");
    }
  };

  return (
    <div className="tools">
      <div className="navigation-bar">
        <div
          className="bar"
          style={{
            width: `${barWidth}px`,
            transform: `translateX(${position * stepSize}px)`,
          }}
        ></div>
      </div>
      <div className="arrow">
        <div
          className={`arrow-left ${disableLeft ? "disabled" : ""}`}
          onClick={() => !disableLeft && handleNavigate("left")}
        >
          <span className="akar-icons--chevron-left"></span>
        </div>
        <div
          className={`arrow-right ${disableRight ? "disabled" : ""}`}
          onClick={() => !disableRight && handleNavigate("right")}
        >
          <span className="akar-icons--chevron-right"></span>
        </div>
      </div>
    </div>
  );
};

export default RltNavigate;
