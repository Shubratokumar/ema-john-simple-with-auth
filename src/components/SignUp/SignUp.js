import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-container">
      <div>
        <h3 className="form-title">Sign Up</h3>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="1" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="2" required/>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" name="confirm-password" id="3" required/>
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p className="form-query">
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <div className="line-container">
          <div className="line"></div>
          <div>
            <p>or</p>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
