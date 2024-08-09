import React, { useState, useEffect } from "react";
import "../styles/pages/Checkout.scss";
import { Link } from "react-router-dom";
import momoicon from "../assets/images/icon/arcticons_momo.png";
import productPoster from "../assets/images/card/card-demo.png";

import visa_icon from "../assets/images/logo/visa.png";
import mastercard_icon from "../assets/images/logo/mastercard.png";
import jcb_icon from "../assets/images/logo/jcb.png";
import american_express_icon from "../assets/images/logo/american-express.png";
import qr_payment from "../assets/images/icon/qr-payment.png";
import btn_paypal from "../assets/images/logo/btn-paypal.png";
import btn_momo from "../assets/images/logo/btn-momo.png";
import btn_wechatpay from "../assets/images/logo/btn-wechatpay.png";

type Props = {};

const Checkout = (props: Props) => {
  const [subtotalPrice, setSubtotalPrice] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [cardErrorMessage, setCardErrorMessage] = useState("");
  const [cardType, setCardType] = useState("");
  const [expiryPlaceholder, setExpiryPlaceholder] = useState("Expiration");
  const [expiryDate, setExpiryDate] = useState("");
  const [exErrorMessage, setErrorMessage] = useState("");
  const [cvv, setCvv] = useState("");
  const [cvvErrorMessage, setCvvErrorMessage] = useState("");
  const productCount = 9; // Number of products in the order
  const [orderCode, setOrderCode] = useState(""); // Order code
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("creditCard"); // Default payment method
  const [savePaymentSelected, setSavePaymentSelected] = useState<
    boolean | null
  >(null); // Track if user clicked Yes or No

  const handleSavePaymentClick = (selection: boolean) => {
    setSavePaymentSelected(selection);
  };

  // order code

  useEffect(() => {
    const generateOrderCode = () => {
      const now = new Date();
      const year = now.getFullYear().toString().slice(-2); // Get last two digits of the year
      const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Get month and pad with leading zero if needed
      const day = now.getDate().toString().padStart(2, "0"); // Get day and pad with leading zero if needed
      const date = `${month}${day}`; // Format date as MMDD
      const orderNumber = 1; // Replace with actual logic to get the order number
      const formattedOrderNumber = orderNumber.toString().padStart(4, "0"); // Format order number as 4 digits

      return `NI${year}${date}${formattedOrderNumber}`;
    };

    const code = generateOrderCode();
    setOrderCode(code);
  }, []);

  // copy to clipboard

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard");
    });
  };

  // card number check

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s+/g, ""); // Remove all spaces
    // Only allow numeric input
    if (/^\d*$/.test(value)) {
      // Add spaces after every 4 digits
      value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
      setCardNumber(value);
      if (value.replace(/\s+/g, "").length === 16) {
        const cardType = identifyCardType(value.replace(/\s+/g, ""));
        if (cardType) {
          setCardErrorMessage(""); // Clear error message if card number is valid
        } else {
          setCardErrorMessage("Invalid card number");
        }
      } else {
        setCardType("");
        setCardErrorMessage("Card number must be 16 digits");
      }
    }
  };

  // check card type

  const identifyCardType = (number: string): string | null => {
    const cardPatterns: { [key: string]: RegExp } = {
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$/,
      amex: /^3[47][0-9]{13}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    };

    for (const [type, pattern] of Object.entries(cardPatterns)) {
      if (pattern.test(number)) {
        setCardType(type);
        return type;
      }
    }
    setCardType("");
    return null;
  };

  // expiration

  const handleExpiryFocus = () => {
    setExpiryPlaceholder("mm/yy");
  };

  const handleExpiryBlur = () => {
    setExpiryPlaceholder("Expiration");
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let error = "";

    if (value.length > 4) {
      value = value.slice(0, 4); // Limit to 4 characters
    }

    if (value.length >= 2) {
      let month = parseInt(value.slice(0, 2), 10);
      if (month < 1 || month > 12) {
        value = "12" + value.slice(2); // Set to December if invalid month
      }
    }

    if (value.length === 4) {
      let year = parseInt(value.slice(2), 10);
      if (year < 24) {
        // 24 represents the year 2024
        error = "Date must be in the future";
      }
    }

    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2); // Add slash after 2 digits
    }

    setExpiryDate(value);
    setErrorMessage(error || ""); // Set error message or empty string
  };

  const handleExpiryKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && expiryDate.length === 3) {
      e.preventDefault();
      setExpiryDate(expiryDate.slice(0, 2)); // Remove the slash and the digit before it
    }
  };

  // CVV check

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let error = "";

    if (value.length > 3) {
      value = value.slice(0, 4); // Limit to 3 characters
    }

    if (value.length < 3) {
      error = "CVV must be a three or four numeric code";
    }

    setCvv(value);
    setCvvErrorMessage(error || ""); // Set error message or empty string
  };

  // select payment method

  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod(method);
    setSavePaymentSelected(null); // Reset save payment selection when payment method changes
  };

  useEffect(() => {
    // Extract prices from the product-price elements
    const prices = Array.from(document.querySelectorAll(".product-price")).map(
      (priceElement) => {
        const priceText = priceElement.textContent || "0";
        // Remove non-numeric characters and convert to number
        return parseFloat(priceText.replace(/[^\d]/g, "")) || 0;
      }
    );

    // Calculate the subtotal price
    const subtotal = prices.reduce((acc, price) => acc + price, 0);
    setSubtotalPrice(subtotal);

    // Calculate taxes as 10% of the subtotal price
    const calculatedTaxes = subtotal * 0.08;
    setTaxes(calculatedTaxes);

    // Calculate the total price
    const total = subtotal + calculatedTaxes;
    setTotalPrice(total);
  }, []);

  return (
    <div className="checkout-page">
      <div className="payment-methods">
        <div className="header">
          <div className="title">Checkout</div>
          <div className="user">
            <span className="tabler--user-filled iconify"></span>datdoanofficial
          </div>
        </div>
        <div className="methods">
          <div className="title">Payment Methods</div>
          <div
            className="credit-card select-payment"
            onClick={() => handlePaymentMethodChange("credit-card")}
            style={{
              border:
                selectedPaymentMethod === "credit-card"
                  ? "2px solid #385aff"
                  : "2px solid transparent",
            }}
          >
            <div
              className="main-heading"
              style={{
                pointerEvents:
                  selectedPaymentMethod === "credit-card" ? "none" : "auto",
              }}
            >
              <div
                className="checkbox"
                style={{
                  backgroundColor:
                    selectedPaymentMethod === "credit-card"
                      ? "#385aff"
                      : "transparent",
                }}
              >
                {selectedPaymentMethod === "credit-card" && (
                  <span className="mingcute--check-fill iconify"></span>
                )}
              </div>
              <div className="card-icon">
                <span className="f7--creditcard-fill iconify"></span>
              </div>
              <div className="title">Credit Card</div>
            </div>
            {/* Conditional rendering of form inputs based on selected payment method */}
            {selectedPaymentMethod === "credit-card" && (
              <div className="credit-card-form form-control">
                <div className="heading">
                  <div className="title">Card Details</div>
                  <div className="type">
                    {cardNumber.replace(/\s+/g, "").length < 16 && (
                      <>
                        <div className="visa">
                          <img src={visa_icon} alt="Visa" />
                        </div>
                        <div className="mastercard">
                          <img src={mastercard_icon} alt="MasterCard" />
                        </div>
                        <div className="amex">
                          <img
                            src={american_express_icon}
                            alt="American Express"
                          />
                        </div>
                        <div className="jcb">
                          <img src={jcb_icon} alt="JCB" />
                        </div>
                      </>
                    )}
                    {cardNumber.replace(/\s+/g, "").length === 16 &&
                      cardType === "visa" && (
                        <div className="visa">
                          <img src={visa_icon} alt="Visa" />
                        </div>
                      )}
                    {cardNumber.replace(/\s+/g, "").length === 16 &&
                      cardType === "mastercard" && (
                        <div className="mastercard">
                          <img src={mastercard_icon} alt="MasterCard" />
                        </div>
                      )}
                    {cardNumber.replace(/\s+/g, "").length === 16 &&
                      cardType === "amex" && (
                        <div className="amex">
                          <img
                            src={american_express_icon}
                            alt="American Express"
                          />
                        </div>
                      )}
                    {cardNumber.replace(/\s+/g, "").length === 16 &&
                      cardType === "jcb" && (
                        <div className="jcb">
                          <img src={jcb_icon} alt="JCB" />
                        </div>
                      )}
                  </div>
                </div>
                <div className="card-number">
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19} // 16 digits + 3 spaces
                    placeholder="Card Number"
                  />
                  {cardErrorMessage && (
                    <div
                      style={{
                        color: "#fe5d2c",
                        marginTop: "10px",
                        fontSize: "14px",
                      }}
                    >
                      {cardErrorMessage}
                    </div>
                  )}
                </div>

                <div className="ex-cvv">
                  <div className="input-field">
                    <div className="expiration">
                      <input
                        type="text"
                        placeholder={expiryPlaceholder}
                        value={expiryDate}
                        onFocus={handleExpiryFocus}
                        onBlur={handleExpiryBlur}
                        onChange={handleExpiryChange}
                        onKeyDown={handleExpiryKeyDown}
                      />
                      {exErrorMessage && (
                        <div
                          className="exErrorMessage"
                          style={{
                            color: "#fe5d2c",
                            marginTop: "10px",
                            fontSize: "14px",
                          }}
                        >
                          {exErrorMessage}
                        </div>
                      )}
                    </div>
                    <div className="cvv">
                      <input
                        type="password"
                        placeholder="CVV"
                        value={cvv}
                        onChange={handleCVVChange}
                      />
                      {cvvErrorMessage && (
                        <div
                          className="cvvErrorMessage"
                          style={{
                            color: "#fe5d2c",
                            marginTop: "10px",
                            fontSize: "14px",
                          }}
                        >
                          {cvvErrorMessage}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="save-payment">
                  <span>
                    <span className="rq">*</span>Required: Save this payment
                    method for future purchases?
                  </span>
                  <div className="save-options">
                    <label>
                      <input
                        type="radio"
                        name="save-payment"
                        value="yes"
                        onChange={() => handleSavePaymentClick(true)}
                      />
                      <span>Yes</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="save-payment"
                        value="no"
                        onChange={() => handleSavePaymentClick(false)}
                      />
                      <span>No</span>
                    </label>
                  </div>
                  <div className="notice">
                    By choosing to save your payment information, this payment
                    method will be selected as the default for all purchases
                    made using Next In payment, including purchases in the Next
                    In Store. You can delete your saved payment information
                    anytime on this payment screen or by logging in to your Next
                    In account, and selecting payment management in your account
                    settings. <Link to="/">Learn more</Link>.
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* scan qr */}
          <div
            className="scan-qr select-payment"
            onClick={() => handlePaymentMethodChange("scan-qr")}
            style={{
              border:
                selectedPaymentMethod === "scan-qr"
                  ? "2px solid #385aff"
                  : "2px solid transparent",
            }}
          >
            <div
              className="main-heading"
              style={{
                pointerEvents:
                  selectedPaymentMethod === "scan-qr" ? "none" : "auto",
              }}
            >
              <div
                className="checkbox"
                style={{
                  backgroundColor:
                    selectedPaymentMethod === "scan-qr"
                      ? "#385aff"
                      : "transparent",
                }}
              >
                {selectedPaymentMethod === "scan-qr" && (
                  <span className="mingcute--check-fill iconify"></span>
                )}
              </div>
              <div className="qr-code-icon">
                <span className="pepicons-pencil--qr-code iconify"></span>
              </div>
              <div className="title">QR Code</div>
            </div>
            {/* Conditional rendering of form inputs based on selected payment method */}
            {selectedPaymentMethod === "scan-qr" && (
              <div className="qr-form form-control">
                <div className="scan-qr-code">
                  <div className="guide">
                    <div className="step-1 step">
                      <label>Step 01:</label>Open Your Banking App
                    </div>
                    <div className="step-2 step">
                      <label>Step 02:</label>Locate the QR Code Scanner
                    </div>
                    <div className="step-3 step">
                      <label>Step 03:</label>Scan the QR Code
                    </div>
                    <div className="img-container">
                      <img src={qr_payment} alt="" />
                    </div>
                    <div className="step-4 step">
                      <label>Step 04:</label>Confirm Payment Details
                    </div>
                    <div className="step-5 step">
                      <label>Step 05:</label>Complete Payment
                    </div>
                  </div>
                </div>
                <div className="information-scan-qr">
                  <div className="heading">Banking transfer information</div>
                  <div className="content">
                    <div className="bank-name inner">
                      Bank Name:<span className="text">Techcombank</span>
                    </div>
                    <div className="account-name inner">
                      Account Name: <span className="text">DOAN GIA DAT</span>
                    </div>
                    <div className="account-number inner">
                      Account No:<span className="text">1089101099</span>
                      <span
                        className="mingcute--copy-fill iconify"
                        onClick={() => copyToClipboard("1089101099")}
                      ></span>
                    </div>
                    <div className="amount inner">
                      Amount:{" "}
                      <span className="text">
                        {totalPrice.toLocaleString()}đ
                      </span>
                      <span
                        className="mingcute--copy-fill iconify"
                        onClick={() =>
                          copyToClipboard(
                            totalPrice.toString().replace(/,/g, "")
                          )
                        }
                      ></span>
                    </div>
                    <div className="code-orders inner">
                      Code Orders: <span className="text">{orderCode}</span>
                      <span
                        className="mingcute--copy-fill iconify"
                        onClick={() => copyToClipboard(orderCode)}
                      ></span>
                    </div>
                    <div className="note">
                      <label>Note:</label> Please include the order number in
                      the transfer description
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* paypal */}
          <div
            className="paypal select-payment"
            onClick={() => handlePaymentMethodChange("paypal")}
            style={{
              border:
                selectedPaymentMethod === "paypal"
                  ? "2px solid #385aff"
                  : "2px solid transparent",
            }}
          >
            <div
              className="main-heading"
              style={{
                pointerEvents:
                  selectedPaymentMethod === "paypal" ? "none" : "auto",
              }}
            >
              <div
                className="checkbox"
                style={{
                  backgroundColor:
                    selectedPaymentMethod === "paypal"
                      ? "#385aff"
                      : "transparent",
                }}
              >
                {selectedPaymentMethod === "paypal" && (
                  <span className="mingcute--check-fill iconify"></span>
                )}
              </div>
              <div className="paypal-icon">
                <span className="simple-icons--paypal iconify"></span>
              </div>
              <div className="title">PayPal</div>
            </div>
            {/* Conditional rendering of form inputs based on selected payment method */}
            {selectedPaymentMethod === "paypal" && (
              <div className="paypal-form form-control">
                <div className="save-payment">
                  <span>
                    <span className="rq">*</span>Required: Save this payment
                    method for future purchases?
                  </span>
                  <div className="save-options">
                    <label>
                      <input
                        type="radio"
                        name="save-payment"
                        value="yes"
                        onChange={() => handleSavePaymentClick(true)}
                      />
                      <span>Yes</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="save-payment"
                        value="no"
                        onChange={() => handleSavePaymentClick(false)}
                      />
                      <span>No</span>
                    </label>
                  </div>
                  <div className="notice">
                    By choosing to save your payment information, this payment
                    method will be selected as the default for all purchases
                    made using Next In payment, including purchases in the Next
                    In Store. You can delete your saved payment information
                    anytime on this payment screen or by logging in to your Next
                    In account, and selecting payment management in your account
                    settings. <Link to="/">Learn more</Link>.
                  </div>
                  <div className="about">
                    For more information about PayPal, visit{" "}
                    <Link to="https://www.paypal.com/" target="_blank">
                      PayPal's official website
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* momo */}
          <div
            className="momo select-payment"
            onClick={() => handlePaymentMethodChange("momo")}
            style={{
              border:
                selectedPaymentMethod === "momo"
                  ? "2px solid #385aff"
                  : "2px solid transparent",
            }}
          >
            <div
              className="main-heading"
              style={{
                pointerEvents:
                  selectedPaymentMethod === "momo" ? "none" : "auto",
              }}
            >
              <div
                className="checkbox"
                style={{
                  backgroundColor:
                    selectedPaymentMethod === "momo"
                      ? "#385aff"
                      : "transparent",
                }}
              >
                {selectedPaymentMethod === "momo" && (
                  <span className="mingcute--check-fill iconify"></span>
                )}
              </div>
              <div className="momo-icon">
                <img src={momoicon} alt="" />
              </div>
              <div className="title">Momo</div>
            </div>
            {/* Conditional rendering of form inputs based on selected payment method */}
            {selectedPaymentMethod === "momo" && (
              <div className="momo-form form-control">
                <div className="save-payment">
                  <span>
                    <span className="rq">*</span>Required: Save this payment
                    method for future purchases?
                  </span>
                  <div className="save-options">
                    <label>
                      <input
                        type="radio"
                        name="save-payment"
                        value="yes"
                        onChange={() => handleSavePaymentClick(true)}
                      />
                      <span>Yes</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="save-payment"
                        value="no"
                        onChange={() => handleSavePaymentClick(false)}
                      />
                      <span>No</span>
                    </label>
                  </div>
                  <div className="notice">
                    By choosing to save your payment information, this payment
                    method will be selected as the default for all purchases
                    made using Next In payment, including purchases in the Next
                    In Store. You can delete your saved payment information
                    anytime on this payment screen or by logging in to your Next
                    In account, and selecting payment management in your account
                    settings. <Link to="/">Learn more</Link>.
                  </div>
                  <div className="about">
                    For more information about Momo, visit{" "}
                    <Link to="https://www.momo.vn/" target="_blank">
                      Momo's official website
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* weixin pay */}
          <div
            className="weixin-pay select-payment"
            onClick={() => handlePaymentMethodChange("weixin-pay")}
            style={{
              border:
                selectedPaymentMethod === "weixin-pay"
                  ? "2px solid #385aff"
                  : "2px solid transparent",
            }}
          >
            <div
              className="main-heading"
              style={{
                pointerEvents:
                  selectedPaymentMethod === "weixin-pay" ? "none" : "auto",
              }}
            >
              <div
                className="checkbox"
                style={{
                  backgroundColor:
                    selectedPaymentMethod === "weixin-pay"
                      ? "#385aff"
                      : "transparent",
                }}
              >
                {selectedPaymentMethod === "weixin-pay" && (
                  <span className="mingcute--check-fill iconify"></span>
                )}
              </div>
              <div className="weixin-pay-icon">
                <span className="ri--wechat-pay-fill iconify"></span>
              </div>
              <div className="title">WeChat Pay</div>
            </div>
            {/* Conditional rendering of form inputs based on selected payment method */}
            {selectedPaymentMethod === "weixin-pay" && (
              <div className="weixin-form form-control">
                <div className="save-payment">
                  <span>
                    <span className="rq">*</span>Required: Save this payment
                    method for future purchases?
                  </span>
                  <div className="save-options">
                    <label>
                      <input
                        type="radio"
                        name="save-payment"
                        value="yes"
                        onChange={() => handleSavePaymentClick(true)}
                      />
                      <span>Yes</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="save-payment"
                        value="no"
                        onChange={() => handleSavePaymentClick(false)}
                      />
                      <span>No</span>
                    </label>
                  </div>
                  <div className="notice">
                    By choosing to save your payment information, this payment
                    method will be selected as the default for all purchases
                    made using Next In payment, including purchases in the Next
                    In Store. You can delete your saved payment information
                    anytime on this payment screen or by logging in to your Next
                    In account, and selecting payment management in your account
                    settings. <Link to="/">Learn more</Link>.
                  </div>
                  <div className="about">
                    For more information about Wechat Pay, visit{" "}
                    <Link to="https://pay.weixin.qq.com" target="_blank">
                      Wechat Pay's official website
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* order summary */}
      <div className="order-summary">
        <div className="header">
          <div className="title">Order Summary</div>
          <div className="count-items">
            <span>({productCount})</span>items
          </div>
        </div>
        <div className="product-summary">
          {Array.from({ length: productCount }).map((_, index) => (
            <div className="product-item" key={index}>
              <div className="product-poster">
                <img src={productPoster} alt="" />
              </div>
              <div className="product-information">
                <div className="product-name">Naraka: BLADEPOINT</div>
                <div className="publisher">24 Entertainment</div>
                <div className="product-price">320,000đ</div>
              </div>
            </div>
          ))}
        </div>
        {/* price calculated */}
        <div className="price-field">
          <div className="price-and-taxes">
            <div className="subtotal">
              <label>Subtotal</label>
              <div className="value">{subtotalPrice.toLocaleString()}đ</div>
            </div>
            <div className="taxes">
              <label>Taxes</label>
              <div className="value">{taxes.toLocaleString()}đ</div>
            </div>
          </div>
          <div className="price-calculated">
            <div className="total">
              <label>Total</label>
              <div className="value">{totalPrice.toLocaleString()}đ</div>
            </div>
            <div className="discount">
              <input
                type="text"
                placeholder="Enter Code"
                className="enter-code"
              />
              <button className="apply-btn">Apply</button>
            </div>
          </div>
          <div className="help-link">
            Need Help?{" "}
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </div>
        </div>
        {/* field btn */}
        <div className="field-btn">
          <span>
            By clicking "
            {selectedPaymentMethod === "paypal"
              ? "PayPal"
              : selectedPaymentMethod === "momo"
              ? "Momo"
              : selectedPaymentMethod === "weixin-pay"
              ? "WeChat Pay"
              : "Place Order"}
            " below, I represent that I am over 18 and an authorized user of
            this payment method, I agree to the{" "}
            <Link className="license-agreement" to="/">
              End User License Agreement
            </Link>
            .
          </span>
          <button
            className={`place-order-btn ${
              savePaymentSelected === null &&
              selectedPaymentMethod !== "scan-qr"
                ? "disabled"
                : ""
            }`}
            disabled={
              savePaymentSelected === null &&
              selectedPaymentMethod !== "scan-qr"
            }
          >
            {selectedPaymentMethod === "paypal" ? (
              <img src={btn_paypal} alt="PayPal" style={{ width: "80%" }} />
            ) : selectedPaymentMethod === "momo" ? (
              <img
                src={btn_momo}
                alt="Momo"
                style={{ width: "80%", borderRadius: "10px" }}
              />
            ) : selectedPaymentMethod === "weixin-pay" ? (
              <img
                src={btn_wechatpay}
                alt="WeChat Pay"
                style={{ width: "80%", borderRadius: "10px" }}
              />
            ) : selectedPaymentMethod === "scan-qr" ? (
              "Check Status"
            ) : (
              "Place Order"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
