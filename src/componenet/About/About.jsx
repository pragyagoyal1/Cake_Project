import React from 'react';

import './About.css';
import About_sec1 from '../about_sec/about_sec'
import About_sec2 from '../about_bar/About_bar'
import About4 from './About4';
import aboutImg from '../../images/gallery/about1.jpg';
const About = () => {
    return (
        <>
            <div className="container-fluid About__Page__Header About_Main_Img text-white" >
                <div className="container-fluid About__Page__Header page-header py-5 mb-5">
                    <div className="container py-5">
                        <h1 className="display-2 text-white">About Us</h1>
                    </div>
                </div>
            </div>
            <section className="about-area top-padding body-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="section-tittle text-center line mb-70">
                            <h2>This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center section-overlay">
                    <div className="offset-xl-1 col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="about-caption about-caption1">

                            <div className="section-tittle section-tittle3 mb-25">
                            <h2>Hey, Guys Here We are Ready To Serve You.<br/> Purchase it and eat .</h2>
                                <p>At our bakery, we craft delicious treats with passion and care.
Indulge in our freshly baked bread, cakes, and pastries, made daily.
Using only the finest ingredients, we ensure each bite is a delight.
From classic favorites to unique creations, there's something for everyone.
Our skilled bakers bring expertise and creativity to every recipe.
</p>
                                <p>Experience the warmth and aroma of our bakery, a haven for pastry lovers.
We take pride in serving our community with irresistible baked goods.
Whether it's a special occasion or a daily treat, we've got you covered.
Visit us today and savor the taste of tradition and innovation in every bite.
Discover why our bakery is more than just a place to satisfy your sweet tooth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12">

                        <div className="about-img about-img1  ">
                            <img src={aboutImg} alt="sorry"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<About_sec2/>
            
   
     
     {/* Instagram Section End  */}
     {/* <About1/> */}
     {/* <About2/> */}
     <About4/>
        </>
    )
}
export default About;
         {/*<section className="testimonial spad">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12 text-center">
//                             <div className="section-title">
//                                 <span>Testimonial</span>
//                                 <h2>Our client say</h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="testimonial__slider owl-carousel">
//                             <div className="col-lg-6">
//                                 <div className="testimonial__item">
//                                     <div className="testimonial__author">
//                                         <div className="testimonial__author__pic">
//                                             <img src="images/gallery/customer1.jpg" alt="" />
//                                         </div>
//                                         <div className="testimonial__author__text">
//                                             <h5>Kerry D.Silva</h5>
//                                             <span>New york</span>
//                                         </div>
//                                     </div>
//                                     <div className="rating">
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star-half_alt"></span>
//                                     </div>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                                         ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6">
//                                 <div className="testimonial__item">
//                                     <div className="testimonial__author">
//                                         <div className="testimonial__author__pic">
//                                             <img src="img/testimonial/ta-2.jpg" alt="" />
//                                         </div>
//                                         <div className="testimonial__author__text">
//                                             <h5>Kerry D.Silva</h5>
//                                             <span>New york</span>
//                                         </div>
//                                     </div>
//                                     <div className="rating">
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star-half_alt"></span>
//                                     </div>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                                         ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6">
//                                 <div className="testimonial__item">
//                                     <div className="testimonial__author">
//                                         <div className="testimonial__author__pic">
//                                             <img src="img/testimonial/ta-1.jpg" alt="" />
//                                         </div>
//                                         <div className="testimonial__author__text">
//                                             <h5>Ophelia Nunez</h5>
//                                             <span>London</span>
//                                         </div>
//                                     </div>
//                                     <div className="rating">
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star-half_alt"></span>
//                                     </div>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                                         ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6">
//                                 <div className="testimonial__item">
//                                     <div className="testimonial__author">
//                                         <div className="testimonial__author__pic">
//                                             <img src="images/gallery/customer1.jpg" alt="" />
//                                         </div>
//                                         <div className="testimonial__author__text">
//                                             <h5>Kerry D.Silva</h5>
//                                             <span>New york</span>
//                                         </div>
//                                     </div>
//                                     <div className="rating">
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star-half_alt"></span>
//                                     </div>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                                         ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6">
//                                 <div className="testimonial__item">
//                                     <div className="testimonial__author">
//                                         <div className="testimonial__author__pic">
//                                             <img src="img/testimonial/ta-1.jpg" alt="" />
//                                         </div>
//                                         <div className="testimonial__author__text">
//                                             <h5>Ophelia Nunez</h5>
//                                             <span>London</span>
//                                         </div>
//                                     </div>
//                                     <div className="rating">
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star-half_alt"></span>
//                                     </div>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                                         ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6">
//                                 <div className="testimonial__item">
//                                     <div className="testimonial__author">
//                                         <div className="testimonial__author__pic">
//                                             <img src="img/testimonial/ta-2.jpg" alt="" />
//                                         </div>
//                                         <div className="testimonial__author__text">
//                                             <h5>Kerry D.Silva</h5>
//                                             <span>New york</span>
//                                         </div>
//                                     </div>
//                                     <div className="rating">
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star"></span>
//                                         <span className="icon_star-half_alt"></span>
//                                     </div>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                                         ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
<section className="instagram spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 p-0">
                    <div className="instagram__text">
                        <div className="section-title">
                            <span>Follow us on instagram</span>
                            <h2>Sweet moments are saved as memories.</h2>
                        </div>
                        <h5><i className="fa-brands fa-instagram"></i> @sweetcake</h5>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src="images/instagram/instagram-1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic middle__pic">
                                <img src="images/instagram/instagram-2.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src="images/instagram/instagram-3.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src="images/instagram/instagram-4.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic middle__pic">
                                <img src="images/instagram/instagram-5.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src="images/instagram/instagram-3.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>   */}
   