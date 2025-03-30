import React, { useState, useEffect } from "react";
import "./Navigate.scss";

type Props = {
  onNavigate: (direction: "left" | "right") => void;
  disableLeft: boolean;
  disableRight: boolean;
  totalProducts: number;
  currentRange: { start: number; end: number }; // Add currentRange prop
};

const Navigate = ({
  onNavigate,
  disableLeft,
  disableRight,
  totalProducts,
  currentRange,
}: Props) => {
  const [position, setPosition] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobile, setIsMobile] = useState(false);
  const [barMetrics, setBarMetrics] = useState({
    baseWidth: 80,
    translateX: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      setBarMetrics({
        baseWidth: window.innerWidth <= 1024 ? 60 : 80,
        translateX: window.innerWidth <= 1024 ? 0 : 0,
      });
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const segments = Math.ceil(totalProducts / 4);
  const barWidth = barMetrics.baseWidth / segments;
  const stepSize = barWidth;

  useEffect(() => {
    const newPosition = Math.floor(currentRange.start / 4);
    setPosition(newPosition);
  }, [currentRange]);

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
            transform: `translateX(${
              position * stepSize + barMetrics.translateX
            }px)`,
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

export default Navigate;
