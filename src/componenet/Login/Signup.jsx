import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Signup.css';


const Signup = () => {
  
  const history=useNavigate();

  const [name,setName]=useState('')  
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

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
  
<div class="container1 container-fluid">
      <div class="row">
      
        <div class="col-lg-6"></div>
    
    
        <div class=" d-flex align-items-center justify-content-center right-side" style={{paddingLeft:'570px'}}>
          <div class="form-2-wrapper1">
            <div class="logo text-center">
              <h1 className='heading'>Signup</h1>
            </div>
            <h2 class="text-center ">Sign Into Your Account</h2>
            <form action="#">
            <div class="mb-3">
                <input type="text" class="form-control2" id="text"  onChange={(e) => { setName(e.target.value) }} name="text" placeholder="Enter Your Name" required />
              </div>
              <div class="mb-3 form-box">
                <input type="email" class="form-control2" id="email" onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Enter Your Email" required /> 
              </div>
              
              <div class="mb-3">
                <input type="password" class="form-control2" id="password" onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Enter Your Password" required />
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
