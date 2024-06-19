import React, { Fragment, useEffect } from "react";
import MetaData from "../layouts/MetaData";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import Loader from "../layouts/Loader";
import { useDispatch, useSelector } from "react-redux";
import { myOrders, clearErrors } from "../../actions/orderAction";
import "../../App.css";

const ListOrders = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.myOrders);

  useEffect(() => {
    dispatch(myOrders());

    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
  }, [dispatch, error, alert]);

  const setOrders = () => {
    const data = {
      columns: [
        {
          label: "Order ID",
          field: "id",
          sort: "asc",
          width: 150,
          color: "white",
        },
        {
          label: "Name of Items",
          field: "nameOfItems",
          sort: "asc",
          width: 150,
          color: "white",
        },
        {
          label: "Num of Items",
          field: "numOfItems",
          sort: "asc",
          width: 270,
        },
        {
          label: "Amount",
          field: "amount",
          sort: "asc",
          width: 200,
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
          width: 100,
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
          width: 150,
        },
      ],
      rows: [],
    };
    orders.forEach((order) => {
      data.rows.push({
        id: (
          <Link
            to={`/order/${order._id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            {order._id}
          </Link>
        ),
        nameOfItems: order.orderItems.map((item) => item.name).join(", "),
        numOfItems: order.orderItems.length,
        amount: `$${order.totalPrice}`,
        status:
          order.orderStatus &&
          String(order.orderStatus).includes("Delivered") ? (
            <p style={{ color: "green" }}>{order.orderStatus}</p>
          ) : (
            <p style={{ color: "red" }}>{order.orderStatus}</p>
          ),
        actions: (
          <Link to={`/order/${order._id}`} className="btn btn-primary">
            <i className="fa fa-eye"></i>
          </Link>
        ),
      });
    });
    return data;
  };

  return (
    <Fragment>
      <MetaData title={"My Orders"} />
      <h1 className="mt-5 text-center" style={{ fontWeight: "bold" }}>
        My Orders
      </h1>

      {loading ? (
        <Loader />
      ) : (
        <div className="table-responsive">
          <MDBDataTable
            data={setOrders()}
            style={{ color: "white", fontSize: "0.8rem" }}
            className="px-5 pt-5"
            bordered
            striped
            responsive
            classNameResponsive="table-responsive"
          />
        </div>
      )}
    </Fragment>
  );
};

export default ListOrders;
