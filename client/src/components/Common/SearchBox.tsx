import React, { useState, useEffect } from "react";
import "./SearchBox.scss";

const SearchBox = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
      setIsSmallMobile(window.innerWidth <= 375);
      if (window.innerWidth > 576) {
        setIsSearchOpen(false);
      }
    };

    // Toggle body scroll when search is open
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, [isSearchOpen]);

  return (
    <div className="search-container">
      {isMobile ? (
        <>
          <button
            className="search-button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
          >
            <span className="iconamoon--search-light"></span>
            {!isSmallMobile && "Search"}
          </button>
          {isSearchOpen && (
            <>
              <div
                className="search-overlay"
                onClick={() => setIsSearchOpen(false)}
              />
              <div className="search-box mobile">
                <span className="iconamoon--search-light"></span>
                <input type="text" placeholder="Search item" autoFocus />
                <button
                  className="close-search"
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Close search"
                >
                  <span className="ic--round-close icon"></span>
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="search-box">
          <span className="iconamoon--search-light"></span>
          <input type="text" placeholder="Search item" />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
