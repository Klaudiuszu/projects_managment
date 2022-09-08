import React from "react";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import { images } from "../../utils";

import "./Login.scss";

function Login() {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleCardContainer = btnState ? " app__Login-card-container" : null;

  return (
    <>
      <div className="container"></div>
      <div
        className="app__Login modal"
        style={{
          height: btnState ? "100vh" : "60px",
        }}
      >
        
        <div className={`${toggleCardContainer}`}>
          <div
            className="app__Login-container-left"
            style={{ visibility: btnState ? "visible" : "hidden" }}
          >
            <h1>Welcome</h1>
            <p>Start modify your products here!</p>
            <div className="input-block">
              <label className="input-label">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="input-block">
              <label className="input-label">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="Left-question-Login">
              <a href="">forgot your password?</a>
              <button>Login</button>
            </div>
            <div className="forgot-password">
              <p>Don't have an account?</p>
              <a href="">create account</a>
            </div>
          </div>

          <div className="app__Login-container-right">
           <img src={images.funny} alt="" />
          </div>

          <input
            id="app__Login-exit"
            onClick={handleClick}
            style={{ visibility: btnState ? "visible" : "hidden" }}
            type="image"
            src={images.close}
          />
        </div>
        <button type="button" className="modal-button" onClick={handleClick}>
          Click here to login
        </button>
      </div>
    </>
  );
}

export default Login;
