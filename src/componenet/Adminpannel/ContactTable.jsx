import React, { useState, useEffect } from 'react';
import './AdminPannel.css';
import {AdminPannelNav} from './AdminPannel'

const ContactTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/contacttable');
      const jsonData = await response.json();
      setData(jsonData);
      console.log("hello")
      console.log(setData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <AdminPannelNav />
     
      <div className="App" style={{marginLeft:"150px"}}>
        <h1>Contact Table</h1>
        <table >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};
export default ContactTable;