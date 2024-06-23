import React, { useState, useEffect } from "react";
import "./PriceCalculator.scss";

type PriceProps = {
  originalPrice: string; // Assuming the price format is similar to "1.190.000đ"
  discount?: number; // Discount as a decimal (e.g., 0.1 for 10% off)
};

const PriceCalculator: React.FC<PriceProps> = ({ originalPrice, discount }) => {
  const [finalPrice, setFinalPrice] = useState<string>("");
  const [discountedAmount, setDiscountedAmount] = useState<string>("");

  const calculatePrice = () => {
    if (discount && originalPrice !== "Free") {
      const priceNumber = parseFloat(
        originalPrice.replace(/\./g, "").replace("đ", "")
      );
      const discountAmount = priceNumber * discount;
      const discountedPrice = priceNumber - discountAmount;
      setDiscountedAmount(`${discountAmount.toLocaleString("vi-VN")}đ`);
      setFinalPrice(`${discountedPrice.toLocaleString("vi-VN")}đ`);
    } else {
      setFinalPrice(originalPrice);
    }
  };

  // Automatically calculate the final price when component mounts or props change
  useEffect(() => {
    calculatePrice();
  }, [originalPrice, discount]);

  return (
    <div className="prd-price">
      {discount && (
        <div className="discount">{`${(Number(discount) * 100).toFixed(
          0
        )}%`}</div>
      )}
      <div className="original-price">{originalPrice}</div>
      <div className="final-price">{finalPrice}</div>
    </div>
  );
};

export default PriceCalculator;
