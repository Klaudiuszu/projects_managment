import React from "react";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import "./Login.scss";

function Login() {
  return (
    <div className="app__Login">
      <div className="container"></div>
      <div className="app__Login-card"></div>
      <button
        type="button"
        className="modal-button"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Click here to login
      </button>
      {/* <div className="app__Login-wrapper">
        <form>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default Login;
