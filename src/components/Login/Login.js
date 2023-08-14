import React from "react";
import classes from "./Login.module.css";
import styles from "../base/Buttons.module.css";
import stylerule from "../base/Errors.module.css";
import { Formik, Form, Field, ErrorMessage, connect } from "formik";

const Login = (props) => {
  const togglePassword = () => {
    const x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  return (
    <div className={classes.login} onSubmit={props.handleSubmit}>
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
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
                <span className={classes.eye} onClick={togglePassword}>
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
                  // onSubmit={}
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

// export default connect(null, {login}) (Login); //was just export default Login
export default Login