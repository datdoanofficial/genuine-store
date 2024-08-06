import React from "react";
import "./Navigate.scss";

type Props = {};

const Navigate = (props: Props) => {
  return (
    <div className="tools">
      <div className="navigation-bar">
        <div className="nav-item"></div>
      </div>
      <div className="arrow">
        <div className="arrow-left">
          <span className="akar-icons--chevron-left"></span>
        </div>
        <div className="arrow-right">
          <span className="akar-icons--chevron-right"></span>
        </div>
      </div>
    </div>
  );
};

export default Navigate;
