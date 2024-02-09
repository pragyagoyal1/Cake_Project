import React from 'react';
import '../font.css';
import './AboutSec.css';
import about1 from '../../images/gallery/about1.jpg';
import { useNavigate } from 'react-router-dom';

function AboutSec() {
    const navigate = useNavigate();
    return (
        <>  <div className='container-fluid main-img '>
            <div className='container pt-5'>
                <div className='row'>
                    <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-8 col-sm-10">
                        <div class="hero-caption ">
                            <h1 >Healthy Made Delicious Cake</h1>
                            <a onClick={() => navigate("/Shop")} class="btn_1 hero-btn" >Order
                                Now</a>
                        </div></div></div>
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
                                    <h2>Hey, Guys Here We are Ready To Serve You.<br /> Purchase it and eat .</h2>
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
                                <img src={about1} alt="sorry" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutSec;