import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Logo from "../Common/Logo";
import momoicon from "../../assets/images/icon/arcticons_momo_color.png";
import DevBrand from "../../assets/images/logo/datdoan.png";
import mastercard_logo from "../../assets/images/logo/logos_mastercard.png";

type Props = {};

const Footer = (props: Props) => {
  // Define the scrollToTop function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds a smooth scrolling effect
    });
  };
  return (
    <>
      <div className="footer">
        {/* brand name */}
        <div className="brand-name">
          <Logo />
          <div className="dev-brand">
            <span>Design and Development</span>
            <img src={DevBrand} alt="" className="dev-logo" />
          </div>
        </div>
        {/* footer bottom */}
        <div className="footer-bottom">
          {/* quick links */}
          <div className="quick-links">
            <ul>
              <li>
                <Link to="/" className="item-link">
                  About
                </Link>
                <Link to="/" className="item-link">
                  News
                </Link>
                <Link to="/" className="item-link">
                  FAQ
                </Link>
                <Link to="/" className="item-link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="description">
              Discover a massive library of games across all genres. Easy
              downloads, instant access. All right reserved &copy; 2024
              <div className="social-links">
                <ul>
                  <li>
                    <Link to="/" className="sc-link">
                      <span className="ant-design--instagram-filled ins-icon icon"></span>
                    </Link>
                    <Link to="/" className="sc-link">
                      <span className="streamline--linkedin-solid linkedin-icon icon"></span>
                    </Link>
                    <Link to="/" className="sc-link">
                      <span className="ic--sharp-wechat wechat-icon icon"></span>
                    </Link>
                    <Link to="/" className="sc-link">
                      <span className="mdi--qqchat qq-icon icon"></span>
                    </Link>
                    <Link to="/" className="sc-link">
                      <span className="fa6-brands--weibo weibo-icon icon"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* send mail */}
          <div className="send-mail">
            <div className="heading-wrapper">
              <div className="head-title">
                <div className="title">Subscribe</div>
                <div className="descript">
                  Enter email to get notified about our news.
                </div>
              </div>
              <button className="back-to-top" onClick={scrollToTop}>
                <span className="bytesize--chevron-top"></span>
              </button>
            </div>
            <div className="mail-input">
              <input type="text" placeholder="Enter your email" />
              <button className="sent-btn">
                <span className="maki--arrow"></span>
              </button>
            </div>
            <div className="payment-method">
              <ul>
                <li>
                  <span className="ri--visa-line visa-icon"></span>
                </li>
                <li className="mastercard-logo">
                  <img src={mastercard_logo} alt="" />
                </li>
                <li>
                  <span className="logos--paypal paypal-icon"></span>
                </li>
                <li>
                  <span className="ri--wechat-pay-fill weixinpay-icon"></span>
                </li>
                <li>
                  <img src={momoicon} className="momo-icon" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
