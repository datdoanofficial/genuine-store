import React, { useState, useEffect, useRef } from "react";
import "./WishlistFilter.scss";

type Props = {};

const WishlistFilter = (props: Props) => {
  const [selectValue, setSelectValue] = useState("");
  const [selectWidth, setSelectWidth] = useState("fit-content");
  const selectRef = useRef<HTMLSelectElement>(null);
  const [genreWidth, setGenreWidth] = useState("fit-content");
  const [featuresWidth, setFeaturesWidth] = useState("fit-content");
  const [platformWidth, setPlatformWidth] = useState("fit-content");

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [currentFilter, setCurrentFilter] = useState("none");

  const genreRef = useRef<HTMLSelectElement>(null);
  const featuresRef = useRef<HTMLSelectElement>(null);
  const platformRef = useRef<HTMLSelectElement>(null);

  const calculateSelectWidth = (
    selectRef: React.RefObject<HTMLSelectElement>
  ) => {
    if (!selectRef.current) return;

    const tempEl = document.createElement("span");
    const styles = window.getComputedStyle(selectRef.current);

    // Copy select styles
    Object.assign(tempEl.style, {
      font: styles.font,
      fontSize: styles.fontSize,
      fontWeight: styles.fontWeight,
      letterSpacing: styles.letterSpacing,
      padding: styles.padding,
      visibility: "hidden",
      position: "absolute",
      whiteSpace: "nowrap",
    });

    document.body.appendChild(tempEl);

    // Get selected option text
    const selectedOption =
      selectRef.current.options[selectRef.current.selectedIndex];
    tempEl.textContent = selectedOption.text;

    // Calculate width with padding for icon
    const textWidth = tempEl.getBoundingClientRect().width;
    const iconPadding = 10;
    const finalWidth = textWidth + iconPadding;

    document.body.removeChild(tempEl);
    return `${finalWidth}px`;
  };

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setWidth: (width: string) => void,
    ref: React.RefObject<HTMLSelectElement>
  ) => {
    const newWidth = calculateSelectWidth(ref);
    if (newWidth) setWidth(newWidth);
  };

  // Initial width calculation
  useEffect(() => {
    setGenreWidth(calculateSelectWidth(genreRef) || "fit-content");
    setFeaturesWidth(calculateSelectWidth(featuresRef) || "fit-content");
    setPlatformWidth(calculateSelectWidth(platformRef) || "fit-content");
  }, []);

  const adjustSelectWidth = () => {
    if (!selectRef.current) return;

    // Create temporary element with same styling as select
    const tempEl = document.createElement("span");
    const styles = window.getComputedStyle(selectRef.current);

    // Copy select styles to temp element
    tempEl.style.font = styles.font;
    tempEl.style.fontSize = styles.fontSize;
    tempEl.style.fontWeight = styles.fontWeight;
    tempEl.style.letterSpacing = styles.letterSpacing;
    tempEl.style.padding = styles.padding;
    tempEl.style.visibility = "hidden";
    tempEl.style.position = "absolute";
    tempEl.style.whiteSpace = "nowrap";

    document.body.appendChild(tempEl);

    // Get selected option text
    const selectedOption =
      selectRef.current.options[selectRef.current.selectedIndex];
    tempEl.textContent = selectedOption.text;

    // Calculate width with padding for dropdown icon
    const textWidth = tempEl.getBoundingClientRect().width;
    const paddingRight = 10; // Space for dropdown icon
    const finalWidth = textWidth + paddingRight;

    setSelectWidth(`${finalWidth}px`);
    document.body.removeChild(tempEl);
  };

  // fix filters
  useEffect(() => {
    adjustSelectWidth();
  }, [selectValue]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="filter">
      <div className="sort">
        <div className="title">Sort By:</div>
        <div className="sort-container">
          <select
            name="sort-by"
            id="sort-by"
            ref={selectRef}
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
            value={selectValue}
            style={{ width: selectWidth }}
          >
            <option value="recently-added">Recently Added</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="on-sale">On Sale</option>
            <option value="coming-soon">Coming Soon</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="low-to-high">Price: Low to High</option>
          </select>
          <span className="akar-icons--chevron-down icon"></span>
        </div>
      </div>
      <div className="select-filter">
        {isMobile ? (
          <div className="mobile-filter">
            <div className="original-filter">
              <select
                name="filter"
                id="filter"
                onChange={(e) => setCurrentFilter(e.target.value)}
                value={currentFilter}
              >
                <option value="none" disabled hidden>
                  Filter
                </option>
                <option value="genre">Genre</option>
                <option value="features">Features</option>
                <option value="platform">Platform</option>
              </select>
              <span className="akar-icons--chevron-down icon"></span>
            </div>
            {currentFilter === "genre" && (
              <div className="filter-dropdown">
                <select
                  name="genres"
                  id="genres"
                  ref={genreRef}
                  style={{ width: genreWidth }}
                  onChange={(e) =>
                    handleSelectChange(e, setGenreWidth, genreRef)
                  }
                >
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
                  <option value="turn-based-strategy">
                    Turn-Based Strategy
                  </option>
                </select>
                <span className="akar-icons--chevron-down icon"></span>
              </div>
            )}

            {currentFilter === "features" && (
              <div className="filter-dropdown">
                <select
                  name="types"
                  id="types"
                  ref={featuresRef}
                  style={{ width: featuresWidth }}
                  onChange={(e) =>
                    handleSelectChange(e, setFeaturesWidth, featuresRef)
                  }
                >
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
            )}

            {currentFilter === "platform" && (
              <div className="filter-dropdown">
                <select
                  name="platforms"
                  id="platforms"
                  ref={platformRef}
                  style={{ width: platformWidth }}
                  onChange={(e) =>
                    handleSelectChange(e, setPlatformWidth, platformRef)
                  }
                >
                  <option value="windows">Windows</option>
                  <option value="macos">Mac OS</option>
                </select>
                <span className="akar-icons--chevron-down icon"></span>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Existing desktop filter selects */}
            <div className="sortbygenre">
              <select
                name="genres"
                id="genres"
                ref={genreRef}
                style={{ width: genreWidth }}
                onChange={(e) => handleSelectChange(e, setGenreWidth, genreRef)}
              >
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
              <select
                name="types"
                id="types"
                ref={featuresRef}
                style={{ width: featuresWidth }}
                onChange={(e) =>
                  handleSelectChange(e, setFeaturesWidth, featuresRef)
                }
              >
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
              <select
                name="platforms"
                id="platforms"
                ref={platformRef}
                style={{ width: platformWidth }}
                onChange={(e) =>
                  handleSelectChange(e, setPlatformWidth, platformRef)
                }
              >
                <option value="" disabled selected hidden>
                  Platform
                </option>
                <option value="windows">Windows</option>
                <option value="macos">Mac OS</option>
              </select>
              <span className="akar-icons--chevron-down icon"></span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistFilter;
