import React, { useState, useEffect } from 'react';

import './OrderTable.css';
import {AdminPannelNav} from './AdminPannel'

const ContactTable = () => {
 
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/ordertable');
      const jsonData = await response.json();
      setData(jsonData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <AdminPannelNav />
      <div className="App">
        <h1>Order Table</h1>
        <table >
          <thead>
            <tr>
              <th >Name</th>
              <th>PhoneNo</th>
              <th style={{width:"1000px"}}>Address</th>
              <th style={{width:"1000px"}}>Product</th>
              <th>Total Amount</th>
              <th>Total Item</th>

            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td >{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.product}</td>
                <td>{item.total_item}</td>
                <td>{item.total_amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};
export default ContactTable;