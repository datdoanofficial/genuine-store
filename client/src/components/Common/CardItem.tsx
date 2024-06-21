import React from "react";
import "./CardItem.scss";
import cardDemo from "../../assets/images/card/freegames-01.png";

type Props = {};

const CardItem = (props: Props) => {
  return (
    <div className="icard">
      <img src={cardDemo} alt="" />
    </div>
  );
};

export default CardItem;
