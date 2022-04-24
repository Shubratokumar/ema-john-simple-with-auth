import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Shipment.css";

const Shipment = () => {

    const [user] = useAuthState(auth)
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    
    const handleNameBlur = event =>{
        setName(event.target.value);
    }    
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneNumberBlur = event =>{
        setPhone(event.target.value)
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        const shipping = {name, address, phone}
        console.log(shipping);
    }
  return (
    <div className="form-container">
      <div>
        <h3 className="form-title">Shipping Information</h3>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id="4"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="name">Your Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id="1"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id="2"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              onBlur={handlePhoneNumberBlur}
              type="number"
              name="phone"
              id="3"
              required
            />
          </div>
          <p style={{ color: "red" }}> {error} </p>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
