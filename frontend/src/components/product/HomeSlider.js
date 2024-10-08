import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Loader from "../layouts/Loader";
import { useSelector } from "react-redux";

const HomeSlider = () => {
  const { products, loading } = useSelector((state) => state.products);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="d-flex  h-100 ">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide  "
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    {products &&
                      products.map((_, index) => (
                        <li
                          key={index}
                          data-target="#carouselExampleIndicators"
                          data-slide-to={index}
                          className={index === 0 ? "active" : ""}
                        ></li>
                      ))}
                  </ol>
                  <div className="carousel-inner">
                    {products &&
                      products.map((product, index) => (
                        <div
                          key={product.id}
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                        >
                          <div className="d-flex flex-md-row align-items-center h-full">
                            <div className="d-flex flex-column align-items-center text-center ml-md-3 mt-md-0 mt-3 w-100">
                              <h5
                                className="card-title"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                  fontWeight: "bold",
                                  fontSize: "1.2rem", // Adjust font size for large screens
                                }}
                              >
                                <Link
                                  to={`product/${product._id}`}
                                  className="slide_product_name"
                                  style={{
                                    textDecoration: "none",
                                    color: "#1f1f1f",
                                  }}
                                >
                                  {product.name}
                                </Link>
                              </h5>
                              <p
                                className="card-text"
                                style={{ color: "#1f1f1f", fontSize: "1.5rem" }}
                              >{`$${product.price}`}</p>
                              <div className="d-flex home_text text-center">
                                <h2
                                  style={{
                                    color: "#1f1f1f",
                                    fontSize: "1.5rem",
                                  }}
                                >
                                  YOU LIKE IT! <strong>OWNIT!!</strong>
                                </h2>
                              </div>
                              {/* <div className="down-arrow ">
                                <i className=" fas fa-arrow-down"></i>
                              </div> */}

                              <Link
                                to={`product/${product._id}`}
                                id="view_btn"
                                className="btn btn-lg mt-3" // Increase button size for large screens
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: "bold",
                                }} // Adjust font size for large screens
                              >
                                Shop Now
                              </Link>
                            </div>
                            <img
                              className="mx-auto"
                              src={product.images[0].url}
                              alt="Product"
                              style={{
                                width: "100%",
                                maxWidth: "50%",
                                height: "auto",
                                maxHeight: "70vh",
                                objectFit: "contain",
                                marginRight: "5rem", // Increase space between image and text
                                marginBottom: "1rem", // Add margin bottom for mobile
                              }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  <a
                    className="carousel-control-prev "
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default HomeSlider;
