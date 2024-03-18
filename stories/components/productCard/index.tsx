import React from "react";
import { ProductCardProps } from "../../interfaces/cardInterfaces";
export const ProductCard = ({
  cardTitle = "Title",
  cardText = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  cardImg = "https://via.placeholder.com/50",
  cardImgAlt = "Image",
  cardOnClick = () => {},
  cardButtonText = "Button",
  cols = "col-12 col-md-6 col-lg-4",
  productQuantity = 0,
  productPrice = "$1.000",
  addProdduct = () => {},
  subtractProduct = () => {},
}: ProductCardProps) => {
  return (
    <>
      <div className={`card ${cols}`}>
        <img src={cardImg} className="col-12" alt={cardImgAlt} />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{productPrice}</h6>
          <p className="card-text">{cardText}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button onClick={cardOnClick} className="btn btn-primary">
              {cardButtonText}
            </button>
            <div>
              <button
                onClick={subtractProduct}
                className="btn btn-primary me-2"
              >
                -
              </button>
              {productQuantity}
              <button onClick={addProdduct} className="btn btn-primary ms-2">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
