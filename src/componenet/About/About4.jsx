import React from 'react';
import Insta_Img_1 from '../../images/instagram/instagram-1.jpg'
import Insta_Img_2 from '../../images/instagram/instagram-2.jpg'
import Insta_Img_3 from '../../images/instagram/instagram-3.jpg'
import Insta_Img_4 from '../../images/instagram/instagram-4.jpg'
import Insta_Img_5 from '../../images/instagram/instagram-5.jpg'

import './About.css';

const About4 = () => {
    return (
        <>

<section className="instagram spad1">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 p-0">
                    <div className="instagram__text">
                        <div className="section-title-instagram">
                            <span>Follow us on instagram</span>
                            <h2>Sweet moments are saved as memories.</h2>
                        </div>
                        <a href="https://www.instagram.com/_cakes.n.shapes" className='instagram-page-link' target="_blank" rel="noopener noreferrer">
  <h4><i className="fab fa-instagram"></i> &nbsp; @CakesNShapes</h4>
</a>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src={Insta_Img_1} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic middle__pic">
                                <img src={Insta_Img_2} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src={Insta_Img_3} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src={Insta_Img_4} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic middle__pic">
                                <img src={Insta_Img_5} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src={Insta_Img_1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
        </>
    )
}
export default About4;