import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Logo from "../Common/Logo";
import DevBrand from "../../assets/images/logo/datdoan.png";
import mastercard_logo from "../../assets/images/logo/logos_mastercard.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="footer">
        <div className="brand-name">
          <Logo />
          <div className="dev-brand">
            <span>Design and Development</span>
            <img src={DevBrand} alt="" className="dev-logo" />
          </div>
        </div>
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
            downloads, instant access. Your next adventure awaits.
            <br />
            All right reserved &copy; 2024
            <div className="social-links">
              <ul>
                <li>
                  <Link to="/" className="sc-link">
                    <span className="ant-design--instagram-filled ins-icon"></span>
                  </Link>
                  <Link to="/" className="sc-link">
                    <span className="streamline--linkedin-solid linkedin-icon"></span>
                  </Link>
                  <Link to="/" className="sc-link">
                    <span className="ic--sharp-wechat wechat-icon"></span>
                  </Link>
                  <Link to="/" className="sc-link">
                    <span className="mdi--qqchat qq-icon"></span>
                  </Link>
                  <Link to="/" className="sc-link">
                    <span className="fa6-brands--weibo weibo-icon"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="send-mail">
          <div className="heading-wrapper">
            <div className="head-title">
              <div className="title">Subscribe</div>
              <div className="descript">
                Enter your email to get notified about our news.
              </div>
            </div>
            <button className="back-to-top">
              <span className="bytesize--chevron-top"></span>
            </button>
          </div>
          <input type="text" placeholder="Enter your email" />
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
                <span className="arcticons--momo momo-icon"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
