import React from "react";
import classes from "./Login.module.css";
import styles from "../base/Buttons.module.css";
// import stylerule from "../base/Errors.module.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";

const LogoutForm = (props) => {
  return (
    //    <Formik
    //         initialValues={{ email: "", password: "" }}
    //         validate={(values) => {
    //           const errors = {};
    //           if (!values.email) {
    //             errors.email = "email is required";
    //           }
    //           if (!values.password) {
    //             errors.password = "password is required";
    //           }
    //           return errors;
    //         }}
    //         onSubmit={props.handleLogout}
    //       >
    //         {({ isSubmitting }) => (
    //           <div className={classes.loginField}>
    //             <link
    //               rel="stylesheet"
    //               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    //               integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
    //               crossOrigin="anonymous"
    //               referrerPolicy="no-referrer"
    //             />
    //             <h1 className={classes.loginName}>Do you want to Log out?</h1>
    //             <Form>
    //             <div className={classes.buttonDiv}>
    //               <button type="submit" className={styles.button} >
    //                 Logout
    //               </button>
    //             </div>
    //             </Form>
    //           </div>
    //         )}
    //       </Formik>
    <div className={classes.loginField}>
      <div className={classes.buttonDiv}>
        <button onClick={props.handleLogout} className={styles.button}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutForm;
