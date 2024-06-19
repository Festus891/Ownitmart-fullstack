import React, { Fragment, useEffect } from "react";
import MetaData from "../layouts/MetaData";
import { useAlert } from "react-alert";
import { Link, useParams } from "react-router-dom";
import Loader from "../layouts/Loader";

import { useDispatch, useSelector } from "react-redux";
import { getOrderdetails, clearErrors } from "../../actions/orderAction";

const OrderDetails = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    loading,
    error,
    order = {},
  } = useSelector((state) => state.orderDetails);
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    user,
    totalPrice,
    orderStatus,
  } = order;

  useEffect(() => {
    dispatch(getOrderdetails(id));

    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
  }, [dispatch, error, alert, id]);

  const shippingDetails =
    shippingInfo &&
    `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postal}, ${shippingInfo.country}`;

  const isPaid =
    paymentInfo && paymentInfo.status === "succeeded" ? true : false;

  return (
    <Fragment>
      <MetaData title={"Order details"} />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="row d-flex justify-content-between bg-dark ">
            <div className="col-12 col-lg-8 mt-1 order-details">
              <h4
                className="my-5"
                style={{ fontWeight: "bold", color: "#fff" }}
              >
                Order #{order._id}
              </h4>

              <h4
                className="mb-4"
                style={{ fontWeight: "bold", color: "#fff" }}
              >
                Shipping Info
              </h4>
              <p style={{ color: "#fff" }}>
                <b>Name:</b> {user && user.name}
              </p>
              <p style={{ color: "#fff" }}>
                <b>Phone:</b> {shippingInfo && shippingInfo.phoneNo}
              </p>
              <p className="mb-4" style={{ color: "#fff" }}>
                <b>Address:</b>
                {shippingDetails}
              </p>
              <p style={{ color: "#fff" }}>
                <b>Amount:</b> ${totalPrice}
              </p>

              <hr style={{ border: "2px solid #fff" }} />

              <h4
                className="my-4"
                style={{ fontWeight: "bold", color: "#fff" }}
              >
                Payment:
              </h4>
              <p className={isPaid ? "greenColor" : "redColor"}>
                {isPaid ? "PAID" : "NOT PAID"}
              </p>

              <h4
                className="my-4"
                style={{ fontWeight: "bold", color: "#fff" }}
              >
                Order Status:
              </h4>
              <p
                className={
                  order.orderStatus &&
                  String(order.orderStatus).includes("Delivered")
                    ? "greenColor"
                    : "redColor"
                }
              >
                <b>{orderStatus}</b>
              </p>
              <hr style={{ border: "2px solid #fff" }} />
              <h4
                className="my-4"
                style={{ fontWeight: "bold", color: "#fff" }}
              >
                Order Items:
              </h4>

              <hr style={{ border: "1px solid #fa9c23" }} />
              <div className="cart-item my-1 ">
                {orderItems &&
                  orderItems.map((item) => (
                    <div className="row my-5" key={item.product}>
                      <div className="col-12 col-md-2 text-center mb-3 mb-md-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid"
                          style={{ maxHeight: "65px" }}
                        />
                      </div>

                      <div className="col-12 col-md-5 text-center text-md-left mb-3 mb-md-0">
                        <Link
                          to={`/product/${item.product}`}
                          style={{ fontWeight: "bold", color: "#fff" }}
                        >
                          {item.name}
                        </Link>
                      </div>

                      <div className="col-6 col-md-2 text-center mb-3 mb-md-0">
                        <p style={{ fontWeight: "bold", color: "#fff" }}>
                          ${item.price}
                        </p>
                      </div>

                      <div className="col-6 col-md-3 text-center text-md-left">
                        <p style={{ fontWeight: "bold", color: "#fff" }}>
                          {item.quantity} piece(s)
                        </p>
                      </div>

                      <div className="col-12">
                        <hr style={{ border: "1px solid #fa9c23" }} />
                      </div>
                    </div>
                  ))}
              </div>
              <hr />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
