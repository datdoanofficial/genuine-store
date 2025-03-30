import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../Common/Logo";
import PrimaryBtn from "../Common/PrimaryBtn";

import "./Navbar.scss";

type Props = {};

const Navbar = (props: Props) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [viewportSize, setViewportSize] = useState<
    "desktop" | "tablet" | "mobile"
  >(
    window.innerWidth <= 576
      ? "mobile"
      : window.innerWidth <= 768
      ? "tablet"
      : "desktop"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        setIsSticky(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setViewportSize("mobile");
      } else if (window.innerWidth <= 768) {
        setViewportSize("tablet");
      } else {
        setViewportSize("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(event.target.value);
  };

  const renderNavigation = () => {
    switch (viewportSize) {
      case "mobile":
        return (
          <>
            <button
              className="hamburger-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
              ></span>
            </button>
            <nav className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
              <ul>
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className={location.pathname === "/store" ? "active" : ""}>
                  <Link to="/store" onClick={() => setIsMenuOpen(false)}>
                    Store
                  </Link>
                </li>
                <li className={location.pathname === "/news" ? "active" : ""}>
                  <Link to="/news" onClick={() => setIsMenuOpen(false)}>
                    News
                  </Link>
                </li>
                <li className={location.pathname === "/faq" ? "active" : ""}>
                  <Link to="/faq" onClick={() => setIsMenuOpen(false)}>
                    FAQ
                  </Link>
                </li>
                <li
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="mobile-actions">
                <Link
                  to="/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="cart-btn"
                >
                  <span className="solar--bag-3-outline shopping-bag icon"></span>
                  Cart
                </Link>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <PrimaryBtn to="/login">Sign In</PrimaryBtn>
                </Link>
              </div>
            </nav>
          </>
        );
      case "tablet":
        return (
          <div className="select-wrapper">
            <select
              className="mobile-nav"
              onChange={handleSelectChange}
              value={location.pathname}
            >
              <option value="/">Home</option>
              <option value="/store">Store</option>
              <option value="/news">News</option>
              <option value="/faq">FAQ</option>
              <option value="/contact">Contact</option>
            </select>
            <span className="chevron-down"></span>
          </div>
        );
      default:
        return (
          <ul>
            <li className={location.pathname === "/store" ? "active" : ""}>
              <Link to="/store">Store</Link>
            </li>
            <li className={location.pathname === "/news" ? "active" : ""}>
              <Link to="/news">News</Link>
            </li>
            <li className={location.pathname === "/faq" ? "active" : ""}>
              <Link to="/faq">FAQ</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        );
    }
  };

  return (
    <div ref={navbarRef} className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-link">
        <Link to="/">
          <Logo />
        </Link>
        {renderNavigation()}
      </div>
      {viewportSize !== "mobile" && (
        <div className="navbar-featured">
          <Link to="/cart">
            <span className="solar--bag-3-outline shopping-bag"></span>
          </Link>
          <Link to="/login">
            <PrimaryBtn to="/login">Sign In</PrimaryBtn>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
