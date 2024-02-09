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


  useEffect(() => {
    if (location.state) {
      const { totalAmount, totalItem } = location.state;
      // id and totalItem are the values passed from ContextCart
      setTotalAmount(totalAmount);
      setTotalItem(totalItem);
      alert(titles)
    }
  }, [location.state]);

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/checkout', {
        name,
        phone,
        address,
        product,
        total_item: totalItem,
        total_amount: totalAmount
      });
      alert("data");
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
