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
        