import { useState } from 'react';
import React from 'react';
import './Class_sec.css';
import axios from 'axios';
const Class_sec=()=> {
    const [name,setName]=useState('')  
    const [phone,setPhone]=useState('')
    const [requirement,setRequirement]=useState('')

    const validatePhone = (phoneNumber) => {
        // Simple validation for a 10-digit phone number
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
      };
    
      const validateRequirement = (requirement) => {
        // Validate requirement based on your criteria
        return requirement.trim() !== '';
      };
    
      async function submit(e) {
        e.preventDefault();
    
        if (!name.trim()) {
          alert("Name is required");
          return;
        }
    
        if (!validatePhone(phone)) {
          alert("Invalid phone number");
          return;
        }
    
        if (!validateRequirement(requirement)) {
          alert("Requirement cannot be empty");
          return;
        }

        try{

            await axios.post("http://localhost:8000/classregdbs",{
                name,phone,requirement
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                    
                }
                else if(res.data=="notexist"){
                   
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
            <section className="class spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="class__form">
                                <div className="section-title">
                                    <span>Class cakes</span>
                                    <h2>Made from your <br />own hands</h2>
                                </div>
                                <form action="#">
                                    <input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                                    <input type="text" placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }}/>
                                    {/* <select>
                                        <option value="">Studying Class</option>
                                        <option value="">Writting Class</option>
                                        <option value="">Reading Class</option>
                                    </select> */}
                                    <input type="text" placeholder="Type your requirements example Cake" onChange={(e) => { setRequirement(e.target.value) }}/>
                                    <button type="submit" className="site-btn" onClick={submit}>registration</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">

                            <div className="class__video ">
                                <a href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
                                    className="play-btn video-popup"><i className="fa fa-play"></i></a>
                            </div>
                        </div>
                    </div>

                </div></section>


        </>
    )
}
export default Class_sec;