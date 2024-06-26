import React, { Fragment, useState } from "react";
import { countries } from "countries-list";
import MetaData from "../layouts/MetaData";
import { useAlert } from "react-alert";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import CheckOutSteps from "./CheckOutSteps";

const Shipping = () => {
  const countriesList = Object.values(countries);
  const { shippingInfo } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [country, setCountry] = useState(shippingInfo.country);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(saveShippingInfo({ address, city, phoneNo, postalCode, country }));

    navigate("/order/confirm");
  };
  return (
    <Fragment>
      <MetaData title={"Shipping Info"} />

      <CheckOutSteps shipping />
      <div className="row wrapper">
        <div
          className="col-10 col-lg-5"
          style={{ backgroundColor: "rgba(33, 37, 41, 1)" }}
        >
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-4 font-weight-bold text-center">Shipping Info</h1>
            <div className="form-group">
              <label for="address_field">Address</label>
              <input
                type="text"
                id="address_field"
                className="form-control font-weight-bold"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label for="city_field">City</label>
              <input
                type="text"
                id="city_field"
                className="form-control font-weight-bold"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone_field">Phone No</label>
              <input
                type="phone"
                id="phone_field"
                className="form-control font-weight-bold"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label for="postal_code_field">Postal Code</label>
              <input
                type="number"
                id="postal_code_field"
                className="form-control font-weight-bold"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label for="country_field">Country</label>
              <select
                id="country_field"
                className="form-control font-weight-bold"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                {countriesList.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              id="shipping_btn"
              type="submit"
              className="btn btn-block py-3 font-weight-bold"
            >
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
