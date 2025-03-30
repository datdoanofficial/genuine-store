import React from "react";
import "../styles/pages/Store.scss";
import ToolBar from "../components/Common/ToolBar";
import ProductFilter from "../components/Filter/ProductFilter";
import ProductCard from "../components/Cards/ProductCard";

type Props = {};

const Store = (props: Props) => {
  return (
    <div className="store-page">
      <ToolBar />
      <ProductFilter />
      <div className="product-list">
        {Array.from({ length: 12 }, (_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Store;
