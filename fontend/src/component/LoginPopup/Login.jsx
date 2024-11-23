import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login_pop_up">
      <form className="login_pop_up_coin">
        <div className="login_title">
          <h3>{currState}</h3>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login_popup_input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
          <div />

          <button>
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>

          <div className="login_popup_condition">
            <input type="checkbox" required />
            <p>By continuing, i agree the trams of use & privacy policy..</p>
          </div>
          {currState === "Login" ? (
            <p>
              Create a new account ?{" "}
              <span onClick={() => setCurrState("SIgn Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account{" "}
              <span onClick={() => setCurrState("Login")}>Login</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
