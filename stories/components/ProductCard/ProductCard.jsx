// ProductCard.jsx
import React, { useEffect, useState } from "react";
import "./productCard.scss";

export const ProductCard = ({
  title = "Product",
  description = "Lorem ipsum",
  price = "10.990",
  quantity = 1,
  addProduct = () => {},
  subtractButton = () => {},
}) => {
  return (
    <div className="card product-card">
      <img
        className="card-img-top product-image"
        src="https://via.placeholder.com/150"
        alt="Product"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="price-and-quantity">
          <div className="price">${price}</div>
          <div className="quantity">
            <button
              className="btn btn-outline-secondary rounded-circle d-flex justify-content-center align-items-center"
              onClick={subtractButton}
            >
              -
            </button>
            <span className="quantity-display">{quantity}</span>
            <button
              className="btn btn-outline-secondary rounded-circle d-flex justify-content-center align-items-center"
              onClick={addProduct}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
