import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h3 className="form-title">Login</h3>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="1" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="2" required/>
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p className="form-query">
            New to Ema-John?  <Link className="form-link" to='/signup'>Create an account</Link>
        </p>
        <div className="line-container">
            <div className="line"></div>
            <div><p>or</p></div>
            <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
