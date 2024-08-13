import React, { useState } from "react";
import "./Navigate.scss";

type Props = {
  onNavigate: (direction: "left" | "right") => void;
  disableLeft: boolean;
  disableRight: boolean;
  totalProducts: number;
};

const Navigate = ({
  onNavigate,
  disableLeft,
  disableRight,
  totalProducts,
}: Props) => {
  const [position, setPosition] = useState(0);

  const segments = Math.ceil(totalProducts / 4);
  const barWidth = 80 / segments;
  const stepSize = barWidth; // Step size is equal to bar width

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

export default Navigate;
