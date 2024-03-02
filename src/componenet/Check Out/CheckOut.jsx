import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CheckOut.css';
import { useLocation } from 'react-router-dom';
import Data from '../cart/data';

function CheckOut() {
  const location = useLocation();
  const titlesArray = Data.map(obj => obj.title);
  const [titles, setTitles] = useState(titlesArray);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [totalItem, setTotalItem] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const product = JSON.stringify(titles);


  const validatePhone = (phoneNumber) => {
    // Simple validation for a 10-digit phone number
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateAddress = (address) => {
    // Validate address based on your criteria
    return address.trim() !== '';
  };

  useEffect(() => {
    if (location.state) {
      const { totalAmount, totalItem } = location.state;
      setTotalAmount(totalAmount);
      setTotalItem(totalItem);
    }
  }, [location.state]);

  async function submit(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    if (!validatePhone(phone)) {
      alert("Invalid phone number");
      return;
    }

    if (!validateAddress(address)) {
      alert("Address is required");
      return;
    }
    try {
      await axios.post('http://localhost:8000/checkout', {
        name,
        phone,
        address,
        product,
        total_item: totalItem,
        total_amount: totalAmount
      });
      alert("Sucessful");
      // Handle response
    } catch (error) {
      console.error('Error submitting checkout:', error);
    }
  }

  return (
    <>
      <div class="container1">
        <div class="row">
          <div class="col-lg-6"></div>
          <div class=" d-flex align-items-center justify-content-center " style={{ paddingLeft: '30%', paddingTop: '100px' }}>
            <div class="form-2-wrapper1">
              <div class="logo text-center">
                <h1 className='heading'>Check Out</h1>
              </div>
              <form action="#">
                <div class="mb-3 form-box">
                  <label>Name</label>
                  <input type="text" class="form-control" id="name" onChange={(e) => { setName(e.target.value) }} name="name" placeholder="Enter Your Name" required />
                </div>
                <div class="mb-3">
                  <label>Mobile no.</label>
                  <input type="mobileno" class="form-control" id="mobile_number" onChange={(e) => { setPhone(e.target.value) }} name="mobileNumber" placeholder="mobile_number" required />
                </div>
                <div class="mb-3 form-box">
                  <label>Address</label>
                  <textarea type="text" class="form-control" id="address" onChange={(e) => { setAddress(e.target.value) }} name="address" placeholder="address" required />
                </div>
                <div class="mb-3 form-box">
                  <label>Total Item</label>
                  <input type="number" class="form-control" id="total_item" value={totalItem} readOnly style={{ backgroundColor:"transparent"}}/>
                </div>
                <div class="mb-3 form-box">
                  <label>Total Amount</label>
                  <input type="number" class="form-control" id="total_amount" value={totalAmount} readOnly style={{ backgroundColor:"transparent"}}/>
                </div>
                <button type="submit" class="btn btn-outline-secondary login-btn w-100 " onClick={submit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
