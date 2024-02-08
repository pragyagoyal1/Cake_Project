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
    {/* <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white"  style={{ borderRadius:'1rem' }}>
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX"  onChange={(e) => { setEmail(e.target.value) }} class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password"  id="typePasswordX" onChange={(e) => { setPassword(e.target.value) }} class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg px-5" type="submit"  onClick={submit}>Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
            
              <Link to="/Signup" class="button" target="_parent">
                    <span class="actual-text">&nbsp;Sign&nbsp;up&nbsp;</span>
                    <span class="hover-text" aria-hidden="true">&nbsp;GET&nbsp;STARTED&nbsp;</span>
            </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
<div class="container1">
      <div class="row">
      
        <div class="col-lg-6"></div>
    
    
        <div class=" d-flex align-items-center justify-content-center right-side" style={{paddingLeft:'570px',paddingTop:'100px'}}>
          <div class="form-2-wrapper1">
            <div class="logo text-center">
              <h1 className='heading'>Logo</h1>
            </div>
            <h2 class="text-center ">Sign Into Your Account</h2>
            <form action="#">
              <div class="mb-3 form-box">
                <input type="email" class="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Enter Your Email" required /> 
              </div>
              <div class="mb-3">
                <input type="password" class="form-control" id="password" onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Enter Your Password" required />
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

