import React from "react";
import "./ToolBar.scss";
import SearchBox from "../../components/Common/SearchBox";
import SecondaryBtn from "../../components/Common/SecondaryBtn";

type Props = {};

const ToolBar = (props: Props) => {
  return (
    <div className="toolbar">
      <div className="header-wrapper">
        <SearchBox />
        <SecondaryBtn to="/wishlist">Wishlist</SecondaryBtn>
      </div>
    </div>
  );
};

export default ToolBar;
