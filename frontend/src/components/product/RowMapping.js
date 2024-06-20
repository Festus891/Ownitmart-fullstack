import React, { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import Loader from "../layouts/Loader";
import { useSelector } from "react-redux";

const RowMapping = ({ title }) => {
  const { products, loading } = useSelector((state) => state.products);
  const containerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Adjust scroll amount as needed
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Adjust scroll amount as needed
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="container-fluid home-row-container mt-5 position-relative">
          <div
            className="container d-flex justify-content-between align-items-center"
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
              padding: "0.7rem",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "1.4rem",
              }}
            >
              {title}
            </h2>
            <Link
              to="/product"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              SEE ALL <i className="fas fa-angle-right pl-2"></i>
            </Link>
          </div>

          {/* Previous Button */}
          <button
            onClick={scrollLeft}
            className="btn btn-secondary scroll-button prev-button"
          >
            <i className="fas fa-arrow-left"></i>
          </button>

          {/* Products Container */}
          <div className="row-products-container">
            <div
              className="row-products d-flex flex-row w-100"
              ref={containerRef}
            >
              {products &&
                products.map((product) => (
                  <div
                    className="card p-3 rounded card-hover"
                    key={product._id}
                  >
                    <Link
                      to={`/product/${product._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        className="card-img-top mx-auto"
                        src={product.images[0].url}
                        alt="Product"
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product.name}</h5>
                        <div className="ratings mt-auto">
                          <div className="rating-outer">
                            <div
                              className="rating-inner"
                              style={{
                                width: `${(product.rating / 5) * 100}%`,
                              }}
                            ></div>
                          </div>
                          <span id="no_of_reviews">
                            ({product.numOfReviews} Reviews)
                          </span>
                        </div>
                        <p className="card-text">${product.price}</p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={scrollRight}
            className="btn btn-secondary scroll-button next-button"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default RowMapping;
