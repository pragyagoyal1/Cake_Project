import React from 'react';
import './login.css';
import  { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login(){
  
  const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    
  
    const submit = async (e) => {
      e.preventDefault();
      if (email === "admin@example.com" && password === "password123") { history("/AdminPannel", { state: { id: email } }); return; }
        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
        }
        catch(e){
            console.log(e);
        }
    }
  return (
    <>
   
<div class="container_login container-fluid">
      <div class="row">
        <div class="col-lg-6"></div>
        <div class=" d-flex align-items-center justify-content-center right-side login" >
          <div class="form-2-wrapper2">
            <div class=" text-center">
              <h1 className='heading_admin ' >Admin Login</h1>
            </div>
            <form action="#">
              <div class="mb-3 form-box">
                <input type="email" class="form-control1" id="email" onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Enter Your Email" required /> 
              </div>
              <div class="mb-3">
                <input type="password" class="form-control1" id="password" onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Enter Your Password" required />
              </div>
              <button type="submit" class="btn admin_button btn-outline-secondary admin-btn w-100 " onClick={submit}>Login</button>          
            </form>
          </div>
        </div>
      </div>
    </div>
        </>
  );
}

export default Login;

