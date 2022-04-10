import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }

    if(user){
      navigate('/shop')
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError(`Your two passwords didn't match !!!`);
            return;
        }
        if(password.length < 6){
          setError(`Password must be 6 charecters or longer !!!`)
          return;
        }
        createUserWithEmailAndPassword(email, password)
        .then(result =>{
          console.log('user created', result)
        })
        .catch(error =>{
          console.error(error);
        })
    }

  return (
    <div className="form-container">
      <div>
        <h3 className="form-title">Sign Up</h3>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="1" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="2" required/>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="3" required/>
          </div>
          <p style={{color : 'red'}}> {error} </p>
          {/* <p style={{color : 'red'}}> {hookError} </p> */}
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
