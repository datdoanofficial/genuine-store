import React from "react";
import "./VotesCount.scss";

type VotesCountProps = {
  rating: number;
  votes: number;
};

const VotesCount: React.FC<VotesCountProps> = ({ rating, votes }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, () => (
      <i className="solar--star-bold" />
    )).map((star, index) => (
      <React.Fragment key={index}>{star}</React.Fragment>
    ));
  };

  return (
    <div className="rating">
      <div className="stars">{renderStars(rating)}</div>
      <div className="total-rating">{votes} votes</div>
    </div>
  );
};

export default VotesCount;
