import React from "react";
import { CardProps } from "../../interfaces/cardInterfaces";
export const LinkCard = ({
  cardTitle = "Title",
  cardText = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  cardImg = "https://via.placeholder.com/50",
  cardImgAlt = "Image",
  cardOnClick = () => {},
  cardButtonText = "Button",
  cols = "col-12 col-md-6 col-lg-4",
}: CardProps) => {
  return (
    <>
      <div className={`card ${cols}`}>
        <img src={cardImg} className="col-12" alt={cardImgAlt} />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardText}</p>
          <button onClick={cardOnClick} className="btn btn-primary">
            {cardButtonText}
          </button>
        </div>
      </div>
    </>
  );
};
