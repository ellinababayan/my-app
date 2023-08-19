import React from "react";
import classes from "./Login.module.css";
import styles from "../base/Buttons.module.css";
import stylerule from "../base/Errors.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = (props) => {
  return (
   <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "email is required";
          }
          if (!values.password) {
            errors.password = "password is required";
          }
          return errors;
        }}
        onSubmit={props.handleLogin}
      >
        {({ isSubmitting }) => (
          <div className={classes.loginField}>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
              integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
            <h1 className={classes.loginName}>You need to Log In</h1>
            <Form>
              <label htmlFor="login" className={classes.label}>
                Login
              </label>
              <Field
                type="email"
                name="email"
                className={classes.input}
                placeholder="seasocial@gmail.com"
              />

              <div className={stylerule.error}>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={stylerule.error_message}
                />
              </div>

              <label htmlFor="password" className={classes.label}>
                Password
              </label>
              <div>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={classes.input}
                  placeholder="password"
                />
                <span className={classes.eye} onClick={props.togglePassword}>
                  <i id="toggler" className="far fa-eye"></i>
                </span>
              </div>

              <div className={stylerule.error}>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={stylerule.error_message}
                />
              </div>

              <label className={classes.remember} htmlFor="rememberMe">
                <input
                  type={"checkbox"}
                  name="rememberMe"
                  className={classes.checkbox}
                  id="rememberMe"
                />
                <div className={classes.checkbox_input}></div>
                Remember me
              </label>

              <div className={classes.buttonDiv}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.button_apricot}
                >
                  Submit
                </button>
              </div>
              <div className={classes.buttonDiv}>
                {props.errorMessage && (
                  <div className={classes.error_message}>{props.errorMessage}</div>
                )}
              </div>
            </Form>
          </div>
        )}
      </Formik>
  );
};

export default LoginForm;
