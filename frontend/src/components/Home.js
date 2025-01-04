import React, { Fragment, useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ProductMapping from "./product/ProductMapping";
import HomeSlider from "./product/HomeSlider";
import RowMapping from "./product/RowMapping";
import CategoryProduct from "./product/CategoryProduct";
import HomeFeatures from "./product/HomeFeatures";
import HomeBanner from "./product/HomeBanner";
import HomeBannerTwo from "./product/HomeBannerTwo";

const Home = ({ product }) => {
  return (
    <Fragment>
      <div className="container-fluid home_container p-4">
        <HomeSlider />
      </div>
      <ProductMapping title={"Best Selling Products"} />
      <HomeBanner />
      <RowMapping title={"Flash Sale"} />
      <HomeBannerTwo />
      <CategoryProduct />
      <HomeFeatures />
    </Fragment>
  );
};

export default Home;
