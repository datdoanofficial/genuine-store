import React from "react";
import "./SearchBox.scss";

type Props = {};

const SearchBox = (props: Props) => {
  return (
    <div className="search-box">
      <span className="iconamoon--search-light"></span>
      <input type="text" placeholder="Search item" />
    </div>
  );
};

export default SearchBox;
