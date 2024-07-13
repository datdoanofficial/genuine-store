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
            <option value="action-adventure">Action-Adventure</option>
            <option value="adventure">Adventure</option>
            <option value="card-game">Card Game</option>
            <option value="casual">Casual</option>
            <option value="city-builder">City Builder</option>
            <option value="comedy">Comedy</option>
            <option value="dungeon-crawler">Dungeon Crawler</option>
            <option value="exploration">Exploration</option>
            <option value="fantasy">Fantasy</option>
            <option value="fighting">Fighting</option>
            <option value="first-person">First Person</option>
            <option value="horror">Horror</option>
            <option value="indie">Indie</option>
            <option value="moba">MOBA</option>
            <option value="music">Music</option>
            <option value="narration">Narration</option>
            <option value="open-world">Open World</option>
            <option value="party">Party</option>
            <option value="platformer">Platformer</option>
            <option value="puzzle">Puzzle</option>
            <option value="racing">Racing</option>
            <option value="retro">Retro</option>
            <option value="rouge-lite">Rouge-Lite</option>
            <option value="rpg">RPG</option>
            <option value="rts">RTS</option>
            <option value="shooter">Shooter</option>
            <option value="simulation">Simulation</option>
            <option value="space">Space</option>
            <option value="sports">Sports</option>
            <option value="stealth">Stealth</option>
            <option value="strategy">Strategy</option>
            <option value="survival">Survival</option>
            <option value="tower-defense">Tower Defense</option>
            <option value="trivia">Trivia</option>
            <option value="turn-based">Turn-Based</option>
            <option value="turn-based-strategy">Turn-Based Strategy</option>
          </select>
          <span className="akar-icons--chevron-down icon"></span>
        </div>
        <div className="sortbytypes">
          <select name="types" id="types">
            <option value="" disabled selected hidden>
              Features
            </option>
            <option value="achievements">Achievements</option>
            <option value="alexa-game-control">Alexa Game Control</option>
            <option value="cloud-saves">Cloud Saves</option>
            <option value="co-op">Co-op</option>
            <option value="competitive">Competitive</option>
            <option value="controller-support">Controller Support</option>
            <option value="cross-platform">Cross Platform</option>
            <option value="local-multiplayer">Local Multiplayer</option>
            <option value="mmo">MMO</option>
            <option value="multiplayer">Multiplayer</option>
            <option value="online-multiplayer">Online Multiplayer</option>
            <option value="single-player">Single Player</option>
            <option value="vr">VR</option>
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
