import React, { Fragment } from "react";
import MetaData from "../layouts/MetaData";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "../../actions/cartAction";

const OrderSuccess = () => {
  return (
    <Fragment>
      <MetaData title={"Order Success"} />
      <div className="row justify-content-center bg-dark m-auto ">
        <div className="col-6 mt-1 text-center">
          <img
            className="my-5 img-fluid d-block mx-auto"
            src="https://freepngimg.com/thumb/success/6-2-success-png-image.png"
            alt="Order Success"
            width="150"
            height="150"
          />

          <h2
            style={{
              color: "white",
            }}
          >
            Your Order has been placed successfully.
          </h2>

          <Link
            className="btn mb-5"
            to="/orders/me"
            style={{
              color: "white",
              fontWeight: "bold",
              border: "0.2rem solid #fa9c23",
            }}
          >
            Click to go your Orders
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderSuccess;
