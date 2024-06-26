import React, { useState, useEffect, useRef } from "react";
import "./ProductFilter.scss";

type Props = {};

const ProductFilter = (props: Props) => {
  const [selectValue, setSelectValue] = useState("");
  const [selectWidth, setSelectWidth] = useState("auto");
  const selectRef = useRef<HTMLSelectElement>(null);

  const adjustSelectWidth = () => {
    if (!selectRef.current) return;

    const tempEl = document.createElement("span");
    tempEl.style.visibility = "hidden";
    tempEl.style.position = "absolute";
    tempEl.style.height = "auto";
    tempEl.style.width = "auto";
    tempEl.style.whiteSpace = "nowrap";
    document.body.appendChild(tempEl);

    const selectedOption =
      selectRef.current.options[selectRef.current.selectedIndex];
    tempEl.textContent = selectedOption.text;
    const width = tempEl.getBoundingClientRect().width;

    setSelectWidth(`${width + 10}px`); // 10px for padding

    document.body.removeChild(tempEl);
  };

  useEffect(() => {
    adjustSelectWidth();
  }, [selectValue]);

  return (
    <div className="filter">
      <div className="sort">
        <div className="title">Sort By:</div>
        <select
          name="sort-by"
          id="sort-by"
          ref={selectRef}
          onChange={(e) => {
            setSelectValue(e.target.value);
            adjustSelectWidth();
          }}
          value={selectValue}
          style={{ width: selectWidth }}
        >
          <option value="new-release">New Release</option>
          <option value="coming-soon">Coming Soon</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="low-to-high">Price: Low to High</option>
        </select>
        <span className="akar-icons--chevron-down icon"></span>
      </div>
      <div className="select-filter">
        <div className="sortbygenre">
          <select name="genres" id="genres">
            <option value="" disabled selected hidden>
              Genre
            </option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="puzzle">Puzzle</option>
            <option value="rpg">RPG</option>
          </select>
          <span className="akar-icons--chevron-down icon"></span>
        </div>
        <div className="sortbytypes">
          <select name="types" id="types">
            <option value="" disabled selected hidden>
              Types
            </option>
            <option value="digital">Digital</option>
            <option value="physical">Physical</option>
          </select>
          <span className="akar-icons--chevron-down icon"></span>
        </div>
        <div className="sortbyplatform">
          <select name="platforms" id="platforms">
            <option value="" disabled selected hidden>
              Platform
            </option>
            <option value="windows">Windows</option>
            <option value="macos">Mac OS</option>
          </select>
          <span className="akar-icons--chevron-down icon"></span>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
