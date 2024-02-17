import './Footer.css';

import '../font.css';
import Foot_logo from '../../images/footer-logo.png'
const Footer = () => {
    return (
        <>
            <footer class="footer set-bg" >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="footer__widget">
                                <h3>WORKING HOURS</h3>
                                <ul>
                                    <li>Monday - Friday: 08:00 am – 08:30 pm</li>
                                    <li>Saturday: 10:00 am – 16:30 pm</li>
                                    <li>Sunday: 10:00 am – 16:30 pm</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="footer__about">
                                <div class="footer__logo">
                                    <a href="#"><img src={Foot_logo} alt="" /></a>
                                </div>
                                <p>Freshly baked is the assorted variety of breads,cakes,cupcakes,donut we bring for you to savour. Prepared with the ﬁnest ingredient</p>
                                    <div className='footer-info-left'>
                                    <ul className="footer-social">
                                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                        <li><a href="https://www.instagram.com/_cakes.n.shapes"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                                    </ul>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="footer__newslatter">
                                <h3>Subscribe</h3>
                                <p>Get latest updates and offers.</p>
                                <form action="#">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit"><i class="fa fa-send-o"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </footer>
        </>

    );
}

export default Footer;
