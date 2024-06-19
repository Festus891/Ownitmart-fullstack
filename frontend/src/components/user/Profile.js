import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Loader from "../layouts/Loader";
import MetaData from "../layouts/MetaData";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Your Profile"} />
          <h2
            className="mt-5 ml-5 text-center"
            style={{ fontWeight: "bold", color: "white" }}
          >
            My Profile
          </h2>
          <div
            className="row justify-content-around m-auto p-5 user-info "
            style={{
              backgroundColor: "rgba(33, 37, 41, 1)",
              color: "#fff",
            }}
          >
            {user &&
              user.avatar && ( // Check if user and user.avatar are defined
                <div className="col-12 col-md-3">
                  <figure className="avatar avatar-profile">
                    <img
                      className="rounded-circle img-fluid"
                      src={user.avatar.url}
                      alt={user.name}
                    />
                  </figure>
                  <Link
                    to="/me/update"
                    id="edit_profile"
                    className="btn btn-primary btn-block my-5"
                  >
                    Edit Profile
                  </Link>
                </div>
              )}

            <div className="col-12 col-md-5">
              <h4>Full Name</h4>
              <p>{user && user.name}</p>

              <h4>Email Address</h4>
              <p>{user && user.email}</p>

              <h4>Joined on</h4>
              <p>{user && String(user.createdAt).substring(0, 10)}</p>

              {user && user.role !== "admin" && (
                <Link to="/order/me" className="btn btn-danger btn-block mt-5">
                  My Orders
                </Link>
              )}

              <Link
                id="edit_profile"
                to="/password/update"
                className="btn btn-primary btn-block mt-3"
              >
                Change Password
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
