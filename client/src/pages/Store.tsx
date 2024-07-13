import React from "react";
import "../styles/pages/Store.scss";

import SearchBox from "../components/Common/SearchBox";
import SecondaryBtn from "../components/Common/SecondaryBtn";
import ProductFilter from "../components/Filter/ProductFilter";
import ProductCard from "../components/Cards/ProductCard";

type Props = {};

const Store = (props: Props) => {
  return (
    <div className="store-page">
      <div className="header-wrapper">
        <SearchBox />
        <SecondaryBtn to="/wishlist">Wishlist</SecondaryBtn>
      </div>
      <ProductFilter />
      <div className="product-list">
        {Array.from({ length: 27 }, (_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Store;
