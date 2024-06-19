import React from "react";

const HomeFeatures = () => {
  return (
    <div className="dspl mt-5 d-flex flex-sm-row flex-column">
      <div className="dspl-items3">
        <div className="features-box text-center">
          <div className="bg-dark feat mx-auto">
            <i className="fas fa-truck" style={{ color: "#ebebeb" }}></i>
          </div>
          <h5 className="pt-4 fw-bold">FREE AND FAST DELIVERY</h5>
          <p className="mt-3">
            Free delivery for Orders over $1000 or orders exceeding 2tons
          </p>
        </div>
      </div>

      <div className="dspl-items3">
        <div className="features-box text-center">
          <div className="bg-dark feat mx-auto">
            <i className="fas fa-headphones" style={{ color: "#ebebeb" }}></i>
          </div>
          <h5 className="pt-4 fw-bold">24/7 CUSTOMER SERVICE</h5>
          <p className="mt-3">
            Friendly 24/7 Customer Support to help you with any account issues
          </p>
        </div>
      </div>

      <div className="dspl-items3">
        <div className="features-box text-center">
          <div className="bg-dark feat mx-auto">
            <i className="fas fa-ribbon" style={{ color: "#ebebeb" }}></i>
          </div>
          <h5 className="pt-4 fw-bold">MONEY BACK GUARANTEE</h5>
          <p className="mt-3">
            Money returned within 20days, this is our return/refund policy
          </p>
        </div>
      </div>

      <div className="dspl-items3">
        <div className="features-box text-center">
          <div className="bg-dark feat mx-auto">
            <i className="fas fa-percent" style={{ color: "#ebebeb" }}></i>
          </div>
          <h5 className="pt-4 fw-bold">DISCOUNTS GUARANTEED</h5>
          <p className="mt-3">
            Bulk Order Discounts to help get the best at budget friendly Prices
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
