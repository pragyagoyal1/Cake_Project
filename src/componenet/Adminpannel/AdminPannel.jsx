// App.js

import React, { useState, useEffect } from 'react';


function AdminPannel() {
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
<>    <div className="App">
      <h1>Data Table</h1>
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
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
    </div> </>
  
  );
}

export default AdminPannel;
