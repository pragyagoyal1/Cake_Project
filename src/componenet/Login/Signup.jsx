import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Signup.css';


const Signup = () => {
  
  const history=useNavigate();

  const [name,setName]=useState('')  
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const validateEmail = (email) => {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const validatePassword = (password) => {
      // Validate password length or any other criteria
      return password.length >= 6;
    };
    const submit = async (e) => {
      e.preventDefault();
  
      if (!name || !email || !password) {
        alert("All fields are required");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Invalid email format");
        return;
      }
  
      if (!validatePassword(password)) {
        alert("Password should be at least 6 characters long");
        return;
      }
  
    

        try{

            await axios.post("http://localhost:8000/signup",{
                name,email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                    
                }
                else if(res.data=="notexist"){
                    history("/HomePage",{state:{id:email}})
                   
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
  
<div class="container_signup container-fluid">
      <div class="row">
      
        <div class="col-lg-6"></div>
    
    
        <div class=" d-flex  justify-content-center right-side signup" >
          <div class="form-2-wrapper4 ">
            <div class=" text-center ">
              <h1 className='heading text-center'>Signup</h1>
            </div>
            <h2 class="text-center ">Sign Into Your Account</h2>
            <form action="#">
            <div class="mb-3">
                <input type="text" class="form-control3" id="text"  onChange={(e) => { setName(e.target.value) }} name="text" placeholder="Enter Your Name" required />
              </div>
              <div class="mb-3 form-box">
                <input type="email" class="form-control3" id="email" onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Enter Your Email" required /> 
              </div>
              
              <div class="mb-3">
                <input type="password" class="form-control3" id="password" onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Enter Your Password" required />
              </div>
              
              <button type="submit" class="btn btn-outline-secondary login-btn w-100 " onClick={submit}>Login</button>
            
            </form>
    
            <p class="text-center register-test mt-3">Hav already an account 
            <Link to="/Login" class="button" target="_parent">
                    <span class="actual-text">&nbsp;Login&nbsp;here&nbsp;</span>
                    
            </Link></p>
          </div>
        </div>
      </div>
    </div>
        </>
  );
}

export default Signup;
