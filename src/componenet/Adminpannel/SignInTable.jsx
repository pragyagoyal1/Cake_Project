import React, { useState, useEffect } from 'react';

import './AdminPannel.css';
import {AdminPannelNav} from './AdminPannel';
const SignInTable = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <><AdminPannelNav />
    
      <div className="App" style={{marginLeft:"150px"}}>
        <h1>Login Table</h1>
        <table >
          <thead>
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.password}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};
export default SignInTable;