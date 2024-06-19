import React, { Fragment, useState } from "react";
import { countries } from "countries-list";
import MetaData from "../layouts/MetaData";
import { useAlert } from "react-alert";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import CheckOutSteps from "./CheckOutSteps";

const ConfirmOrder = () => {
  const navigate = useNavigate();

  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  // calculate Order Prices
  const itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingPrice = itemsPrice > 200 ? 0 : 25;
  const taxPrice = Number((0.05 * itemsPrice).toFixed(2));
  const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2);

  const proceedToPayment = () => {
    const data = {
      itemsPrice: itemsPrice.toFixed(2),
      shippingPrice,
      taxPrice,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    navigate("/payment");
  };
  return (
    <Fragment>
      <MetaData title={"Confirm your order"} />
      <CheckOutSteps shipping confirmOrder />
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8 mt-3 p-3 order-confirm bg-dark text-light rounded-5">
          <h4 className="mb-3 font-weight-bold text-center">Shipping Info</h4>
          <p>
            <b>Name:</b> {user && user.name}
          </p>
          <p>
            <b>Phone:</b> {shippingInfo && shippingInfo.phoneNo}
          </p>
          <p className="mb-4">
            <b>Address:</b>{" "}
            {`${shippingInfo && shippingInfo.address}, ${
              shippingInfo && shippingInfo.city
            }, ${shippingInfo && shippingInfo.postalCode}, ${
              shippingInfo && shippingInfo.country
            }`}
          </p>

          <hr style={{ border: "1.5px solid #fff" }} />
          <h4 className="mt-4 font-weight-bold">Your Cart Items:</h4>
          {cartItems.map((item) => (
            <Fragment>
              <div className="cart-item my-1" key={item.product}>
                <div className="row">
                  <div className="col-3 col-lg-2">
                    <img src={item.image} alt="Laptop" height="45" width="65" />
                  </div>

                  <div className="col-5 col-lg-6">
                    <Link
                      to={`/product/${item.product}`}
                      style={{ color: "white" }}
                    >
                      {item.name}
                    </Link>
                  </div>

                  <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                    <p>
                      {item.quantity} x ${item.price} =
                      <b>${(item.quantity * item.price).toFixed(2)}</b>
                    </p>
                  </div>
                </div>
              </div>
              <hr style={{ border: "1px solid #fa9c23" }} />
            </Fragment>
          ))}
        </div>

        <div className="col-12 col-lg-3 my-4 font-weight-bold">
          <div id="order_summary">
            <h4 className="font-weight-bold">Order Summary</h4>
            <hr />
            <p>
              Subtotal:
              <span className="order-summary-values">
                ${itemsPrice.toFixed(2)}
              </span>
            </p>
            <p>
              Shipping:
              <span className="order-summary-values">${shippingPrice}</span>
            </p>
            <p>
              Tax: <span className="order-summary-values">${taxPrice}</span>
            </p>

            <hr />

            <p>
              Total: <span className="order-summary-values">${totalPrice}</span>
            </p>

            <hr />
            <button
              id="checkout_btn"
              className="btn btn-primary btn-block"
              onClick={proceedToPayment}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
