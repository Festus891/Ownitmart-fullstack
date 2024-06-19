import React, { Fragment, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MetaData from "../layouts/MetaData";
import { useAlert } from "react-alert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userAction";

const Login = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const location = useLocation();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, isAuthenticated, navigate, redirect]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      await dispatch(login(values.email, values.password));
    } catch (error) {
      setErrors({ apiError: error.message });
      alert.show(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Fragment>
      <MetaData title={"Login"} />
      <div className="wrapper-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                {({ isSubmitting, errors }) => (
                  <Form
                    className="p-4"
                    style={{ width: "768px", maxWidth: "100%" }}
                  >
                    <div className="text-center">
                      <h2 className="mb-3" style={{ fontWeight: "bold" }}>
                        Sign In
                      </h2>
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
                        placeholder="Enter your password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <Link to="/password/forgot" className="float-left mb-4">
                      Forgot Password?
                    </Link>

                    <button
                      id="login_button"
                      type="submit"
                      className="btn btn-block py-3 mb-3"
                      disabled={isSubmitting}
                    >
                      LOGIN
                    </button>

                    {errors.apiError && (
                      <div className="text-danger">{errors.apiError}</div>
                    )}

                    <Link to="/register" className="mt-5 pb-5">
                      Don't have an account? Sign up
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
                    <h1>Hello, Friend!</h1>
                    <p>
                      Don't have an account? Register with us today to
                      experience the best online shopping
                    </p>

                    <Link
                      to="/register"
                      type="submit"
                      className="btn"
                      style={{
                        fontWeight: "bold",
                        color: "#fff",
                        textDecoration: "none",
                        border: "3px solid #fa9c23",
                      }}
                    >
                      Sign Up
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

export default Login;
