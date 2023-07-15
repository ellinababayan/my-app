import React from "react";
import classes from "./Login.module.css";

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
    <div className={classes.login}>
      <div className={classes.loginField}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <h1 className={classes.loginName}>You need to Sign In</h1>
        <form>
          <label htmlFor="login" className={classes.label}>
            Login
          </label>
          <input type="email" name="login" className={classes.input}></input>
          <label htmlFor="password" className={classes.label}>
            Password
          </label>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              className={classes.input}
            ></input>
            <span className={classes.eye} onClick={togglePassword}>
              <i id="toggler" className="far fa-eye"></i>
            </span>
          </div>
          <div className={classes.buttonDiv}>
            <input className={classes.button} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
