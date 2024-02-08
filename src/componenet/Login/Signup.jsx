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
   {/* <section class="vh-100 bg-image ">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius:" 15px;"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg"  onChange={(e) => { setName(e.target.value) }}class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" onChange={(e) => { setEmail(e.target.value) }}class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" onChange={(e) => { setPassword(e.target.value) }}class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"   onClick={submit}>Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

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
    
    
        <div class=" d-flex align-items-center justify-content-center right-side" style={{paddingLeft:'570px'}}>
          <div class="form-2-wrapper1">
            <div class="logo text-center">
              <h1 className='heading'>Signup</h1>
            </div>
            <h2 class="text-center ">Sign Into Your Account</h2>
            <form action="#">
            <div class="mb-3">
                <input type="text" class="form-control" id="text"  onChange={(e) => { setName(e.target.value) }} name="text" placeholder="Enter Your Name" required />
              </div>
              <div class="mb-3 form-box">
                <input type="email" class="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Enter Your Email" required /> 
              </div>
              
              <div class="mb-3">
                <input type="password" class="form-control" id="password" onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Enter Your Password" required />
              </div>
              
              <button type="submit" class="btn btn-outline-secondary login-btn w-100 " onClick={submit}>Login</button>
            
            </form>
    
            <p class="text-center register-test mt-3">Hav already an account 
            <Link to="/Login1" class="button" target="_parent">
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
