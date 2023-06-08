import React from "react";

const Card = ({ imgCard, alt, age, season, genre }) => {
  return (
    <div>
      <div className="imgCard">
        <img src={imgCard} alt={alt} />
      </div>
      <div className="infoCard">
        <p className="ageCard">{age}</p>
        <p className="seasonCard">{season}</p>
      </div>
      <div className="infoCard2">
        <p className="genreCard">{genre}</p>
      </div>
    </div>
  );
};

export default Card;
