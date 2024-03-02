import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Contact.css';
import Header_img from '../../images/hero/h2_hero1.jpg'
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const Contact = () => {
    const [name,setName]=useState('')  
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')

    const validateEmail = (email) => {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const validateMessage = (message) => {
        // Validate message based on your criteria
        return message.trim() !== '';
      };
    
      async function submit(e) {
        e.preventDefault();
    
        if (!name.trim()) {
          alert("Name is required");
          return;
        }
    
        if (!validateEmail(email)) {
          alert("Invalid email format");
          return;
        }
    
        if (!validateMessage(message)) {
          alert("Message cannot be empty");
          return;
        }

        try{

            await axios.post("http://localhost:8000/Contact",{
                name,email,message
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
           
                <div className="container-fluid  Contact__Page__Header Contact_Header_img py-5 mb-5">
                    <div className="container py-5">
                        <h1 className="display-2 text-white">Contact Us</h1>
                    </div>
                
            </div>
            
            <section class="contact">
                <div class="container">
                    <div class="map">
                        <div class="map__iframe">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2309.7807257160957!2d73.00818474759387!3d26.2797077042173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c315d7a13c3%3A0x14687525b0e90559!2s218%2C%202nd%2C%20B%20Rd%2C%20Gandhi%20Maidan%2C%20Sardarpura%2C%20Jodhpur%2C%20Rajasthan%20342001!5e0!3m2!1sen!2sin!4v1707480480266!5m2!1sen!2sin"height="300" width={'100%'} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div></div>
                    <div class="contact__address">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="contact__address__item">
                                    <h6>Sardarpura</h6>
                                    <ul>
                                        <li>
                                        <i class="fa fa-location-arrow"></i>
                                            <p>218 , 2nd B-road, Sardarpura, jodhpur</p>
                                        </li>
                                        <li>
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                            <p>+91 734-208-2148</p>
                                        </li>
                                        <li>
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                            <p>CakesNShapes@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="contact__address__item">
                                    <h6>Housing Board</h6>
                                    <ul>
                                        <li>
                                        <i class="fa fa-location-arrow"></i>
                                            <p>765 ,Sector 9 ,chopasani housing board, jodhpur</p>
                                        </li>
                                        <li><i class="fa fa-phone" aria-hidden="true"></i>
                                            <p>+91 213-612-3000</p>
                                        </li>
                                        <li><i class="fa fa-envelope" aria-hidden="true"></i>
                                            <p>CakesNShapes@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="contact__address__item">
                                    <h6>Paota</h6>
                                    <ul>
                                        <li>
                                        <i class="fa fa-location-arrow"></i>
                                            <p>26 ,C-road, Paota,jodhpur</p>
                                        </li>
                                        <li><i class="fa fa-phone" aria-hidden="true"></i>
                                            <p>+91 800-786-1098</p>
                                        </li>
                                        <li><i class="fa fa-envelope" aria-hidden="true"></i>
                                            <p>CakesNShapes@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="contact__text">
                                <h3>Contact With us</h3>
                                <ul>
                                    <li>Representatives or Advisors are available:</li>
                                    <li>Mon-Fri: 5:00am to 9:00pm</li>
                                    <li>Sat-Sun: 6:00am to 9:00pm</li>
                                </ul>
                                <img src="images/cake-piece.png" alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="contact__form">
                                <form action="#" >
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <input type="text" placeholder="Name"  name = "name" onChange={(e) => { setName(e.target.value) }}/>
                                        </div>
                                        <div class="col-lg-6">
                                            <input type="text" placeholder="Email" name='email' onChange={(e) => { setEmail(e.target.value) }}/>
                                        </div>
                                        <div class="col-lg-12 pb-5">
                                            <textarea placeholder="Message" name='message' onChange={(e) => { setMessage(e.target.value) }} ></textarea>
                                            <button type="submit" class="site-btn" onClick={submit}>Send Us</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;