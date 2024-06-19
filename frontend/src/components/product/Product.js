import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Product = ({ product, col }) => {
  return (
    <div className={`col-sm-12 col-md-6 col-lg-${col} my-3 `}>
      <div className="card p-3 roundedr">
        <Link to={`/product/${product._id}`}>
          <img
            className="card-img-top mx-auto"
            src={product.images[0].url}
            alt="card"
          />
        </Link>

        <div className="card-body d-flex flex-column text-center">
          <h5 className="card-title">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.rating / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
          </div>
          <p className="card-text">${product.price}</p>
          {/* <Link
            to={`/product/${product._id}`}
            id="view_btn"
            className="btn btn-block"
          >
            <i className="fas fa-cart-shopping" style={{ color: "white" }}></i>{" "}
            View Details
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
