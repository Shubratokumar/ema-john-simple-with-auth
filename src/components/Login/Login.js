import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "./Login.css";
import auth from './../../firebase.init';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/';

  const handleEmailBlur = event =>{
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event =>{
    setPassword(event.target.value);
  }

  if(user){
      navigate(from, { replace : true });
  }

  const handleUserSignIn = event =>{
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
  }

  return (
    <div className="form-container">
      <div>
        <h3 className="form-title">Login</h3>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="1" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="2" required />
          </div>
          <p style={{color : 'red'}}>{error?.message}</p>
          {
            loading && <p style={{color : 'greenyellow'}}>Loading...</p>
          }
          <input  className="form-submit" type="submit" value="Login" />
        </form>
        <p className="form-query">
          New to Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create an account
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

export default Login;
