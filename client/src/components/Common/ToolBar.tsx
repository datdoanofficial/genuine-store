import React, { useState, useEffect } from "react";
import "./ToolBar.scss";
import SearchBox from "../../components/Common/SearchBox";
import SecondaryBtn from "../../components/Common/SecondaryBtn";

type Props = {};

const ToolBar = (props: Props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 375);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="toolbar">
      <div className="header-wrapper">
        <SearchBox />
        <SecondaryBtn to="/wishlist">
          {isSmallScreen ? (
            <span className="solar--heart-linear"></span>
          ) : (
            "Wishlist"
          )}
        </SecondaryBtn>
      </div>
    </div>
  );
};

export default ToolBar;
