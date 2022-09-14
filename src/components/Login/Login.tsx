import React from "react";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { images } from "../../utils";

import "./Login.scss";

function Login() {
  const [btnState, setBtnState] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", messege: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label className="input-label">Email</label>
                <input
                  type="text"
                  name="uname"
                  id="email"
                  placeholder="Email"
                  required
                />
                
              </div>
              <div className="input-block">
                <label className="input-label">Password</label>
                <input
                  type="password"
                  name="pass"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </form>
            <div className="Left-question-Login">
              <a href="">forgot your password?</a>
              <button
                onClick={() => navigate("/Home")}
              >Login</button>
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
        <button
          type="button"
          className="modal-button"
          onClick={handleClick}
          style={{ visibility: btnState ? "hidden" : "visible" }}
        >
          Click here to login
        </button>
      </div>
    </>
  );
}

export default Login;
