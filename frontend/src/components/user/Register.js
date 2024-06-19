import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../layouts/MetaData";
import { useAlert } from "react-alert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userAction";

const Register = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "./images/default-avatar.png"
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, isAuthenticated, navigate]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
        "Password must have at least one uppercase letter and one special character"
      ),
  });

  const handleRegister = async (values, { setSubmitting, setErrors }) => {
    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("email", values.email);
    formData.set("password", values.password);
    formData.set("avatar", avatar);

    try {
      await dispatch(register(formData));
    } catch (error) {
      setErrors({ apiError: error.message });
      alert.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAvatarChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Fragment>
      <MetaData title={"Register User"} />
      <div className="wrapper-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
              <Formik
                initialValues={{ name: "", email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
              >
                {({ isSubmitting, setFieldValue, errors }) => (
                  <Form className="" encType="multipart/form-data">
                    <div className="text-center">
                      <h4 className="mb-3" style={{ fontWeight: "bold" }}>
                        Sign UP
                      </h4>
                    </div>

                    <div className="form-group">
                      <label htmlFor="name_field">Name</label>
                      <Field
                        type="text"
                        id="name_field"
                        name="name"
                        className="form-control"
                        placeholder="Input a username"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email_field">Email</label>
                      <Field
                        type="email"
                        id="email_field"
                        name="email"
                        className="form-control"
                        placeholder="Example@yahoo.com"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password_field">Password</label>
                      <Field
                        type="password"
                        id="password_field"
                        name="password"
                        className="form-control"
                        placeholder="Use a strong password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="avatar_upload">Avatar</label>
                      <div className="d-flex align-items-center">
                        <div>
                          <figure className="avatar mr-3 item-rtl">
                            <img
                              src={avatarPreview}
                              className="rounded-circle"
                              alt="avatar Preview"
                            />
                          </figure>
                        </div>
                        <div className="custom-file">
                          <input
                            type="file"
                            name="avatar"
                            className="custom-file-input"
                            id="customFile"
                            accept="images/*"
                            onChange={(e) => {
                              setFieldValue("avatar", e.target.files[0]);
                              handleAvatarChange(e);
                            }}
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="customFile"
                          >
                            Choose Avatar
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      id="register_button"
                      type="submit"
                      className="btn btn-block py-3 mb-3"
                      disabled={loading || isSubmitting}
                    >
                      REGISTER
                    </button>

                    {errors.apiError && (
                      <div className="text-danger">{errors.apiError}</div>
                    )}

                    <Link to="/login" className="mt-8 pb-5">
                      Already have an account? Login
                    </Link>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center toggle-wrapper">
              <div className="toggle-container p-4">
                <div className="toggle">
                  <div className="toggle-panel toggle-left text-center">
                    <img
                      src="/images/ownit.png"
                      style={{ width: "4rem" }}
                      alt="ownit_logo"
                    />
                    <h1>Welcome Back!</h1>
                    <p>
                      Already have an account? Sign In to continue enjoying our
                      online shopping mart
                    </p>

                    <Link
                      to="/login"
                      type="submit"
                      className="btn"
                      style={{
                        fontWeight: "bold",
                        color: "#fff",
                        textDecoration: "none",
                        border: "3px solid #fa9c23",
                      }}
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
