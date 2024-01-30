
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Contact.css';
import Header_img from '../../images/hero/h2_hero1.jpg'

const Contact = () => {
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10784.188505644011!2d19.053119335158936!3d47.48899529453826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1543907528304" height="300" width={'100%'} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                    <div class="contact__address">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="contact__address__item">
                                    <h6>san bernardino</h6>
                                    <ul>
                                        <li>
                                        <i class="fa fa-location-arrow"></i>
                                            <p>795 W 5th St, San Bernardino, CA 92410, USA</p>
                                        </li>
                                        <li>
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                            <p>+1 800-786-1000</p>
                                        </li>
                                        <li>
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                            <p>Sweetcake@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="contact__address__item">
                                    <h6>Los angeles</h6>
                                    <ul>
                                        <li>
                                        <i class="fa fa-location-arrow"></i>
                                            <p>639 S Spring St, Los Angeles, CA 90014, USA</p>
                                        </li>
                                        <li><i class="fa fa-phone" aria-hidden="true"></i>
                                            <p>+1 213-612-3000</p>
                                        </li>
                                        <li><i class="fa fa-envelope" aria-hidden="true"></i>
                                            <p>Sweetcake@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="contact__address__item">
                                    <h6>san bernardino</h6>
                                    <ul>
                                        <li>
                                        <i class="fa fa-location-arrow"></i>
                                            <p>1000 Lakepoint Dr, Frisco, CO 80443, USA</p>
                                        </li>
                                        <li><i class="fa fa-phone" aria-hidden="true"></i>
                                            <p>+1 800-786-1000</p>
                                        </li>
                                        <li><i class="fa fa-envelope" aria-hidden="true"></i>
                                            <p>Sweetcake@support.com</p>
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
                                <form action="#">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                        <div class="col-lg-6">
                                            <input type="text" placeholder="Email"/>
                                        </div>
                                        <div class="col-lg-12 pb-5">
                                            <textarea placeholder="Message"></textarea>
                                            <button type="submit" class="site-btn">Send Us</button>
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