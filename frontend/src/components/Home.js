import React, { Fragment, useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ProductMapping from "./product/ProductMapping";
import HomeSlider from "./product/HomeSlider";
import RowMapping from "./product/RowMapping";
import CategoryProduct from "./product/CategoryProduct";
import HomeFeatures from "./product/HomeFeatures";

const Home = ({ product }) => {
  return (
    <Fragment>
      <div className="container-fluid home_container p-4">
        <HomeSlider />
      </div>

      <ProductMapping title={"Best Selling Products"} />
      <RowMapping title={"Flash Sale"} />
      <CategoryProduct />
      <HomeFeatures />
    </Fragment>
  );
};

export default Home;
