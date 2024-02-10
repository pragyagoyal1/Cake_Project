import React from 'react';
import './Login1.css';
import { Link } from "react-router-dom";
import Signup from './Signup';
import  { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

            

function Login1(){
  
  const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/HomePage",{state:{id:email}})
                    
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

   
  return (
    <>
   
<div class="container1 container-fluid">
      <div class="row">
      
        <div class="col-lg-6"></div>
    
    
        <div class=" d-flex align-items-center justify-content-center right-side login" >
          <div class="form-2-wrapper2">
            <div class=" text-center">
              <h1 className='heading ' >Login</h1>
            </div>
            <h2 class="text-center ">Sign Into Your Account</h2>
            <form action="#">
              <div class="mb-3 form-box">
                <input type="email" class="form-control1" id="email" onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Enter Your Email" required /> 
              </div>
              <div class="mb-3">
                <input type="password" class="form-control1" id="password" onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Enter Your Password" required />
              </div>
              
              <button type="submit" class="btn btn-outline-secondary login-btn w-100 " onClick={submit}>Login</button>
            
            </form>
    
            <p class="text-center register-test mt-3">Don't have an account?
            <Link to="/Signup" class="button" target="_parent">
                    <span class="actual-text">&nbsp;Register&nbsp;here&nbsp;</span>
                    
            </Link></p>
          </div>
        </div>
      </div>
    </div>
        </>
  );
}

export default Login1;

