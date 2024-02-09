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
      const response = await fetch('http://localhost:8000/classregtable');
      const jsonData = await response.json();
      setData(jsonData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <AdminPannelNav />
     
      <div className="App" style={{marginLeft:"150px"}}>
        <h1>Students List For Registeration </h1>
        <table >
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Requirement</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.requirement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};
export default ContactTable;