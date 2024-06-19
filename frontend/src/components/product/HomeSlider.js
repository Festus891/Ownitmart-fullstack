import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeSlider = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <Fragment>
      <div className="d-flex bg-transparent ">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
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
                        <div className="d-flex flex-md-row flex-column p-5 align-items-center">
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
                                style={{
                                  textDecoration: "none",
                                  color: "#fff",
                                }}
                              >
                                {product.name}
                              </Link>
                            </h5>
                            <p
                              className="card-text"
                              style={{ color: "#fff", fontSize: "1.5rem" }}
                            >{`$${product.price}`}</p>
                            <div className="d-flex home_text text-center">
                              <h2 style={{ color: "#fff", fontSize: "1.5rem" }}>
                                YOU LIKE IT! <strong>OWNIT!!</strong>
                              </h2>
                            </div>

                            <i className=" down-arrow fas fa-arrow-down"></i>

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
                        </div>
                      </div>
                    ))}
                </div>
                <a
                  className="carousel-control-prev d-none"
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
                  className="carousel-control-next d-none"
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
    </Fragment>
  );
};

export default HomeSlider;
