import '../bootstrap.min.css';
import '../font.css';
import './navBar.css';
import logo from '../../images/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function navBar() {
    const navigate =useNavigate();

    return (
        <>
         

                <div className="container-fluid header body-bg">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="d-flex justify-content-between flex-wrap align-items-center">
                                <div className="header-info-left d-none d-sm-block">
                                    <ul className="header-social">
                                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                                <div className="logo">
                                    <a href="index-2.html"><img src={logo} alt="sorry" /></a>
                                </div>
                                <div className="header-info-right d-none d-lg-block hover-underline-animation">
                                    <a href="#" className="btn_2">Call Us: +10 783 346 4378</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row pt-3 ">
                        <div className="col-xl-12">

                            <div className=" ">
                               
                                <nav class="navbar navbar-expand-lg   sticky-top p-0">

                                    <button type="button" class="navbar-toggler me-4 " data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarCollapse">
                                        <div class="navbar-nav     nav">
                                            <a class="nav-item nav-link hover-underline-animation  ps-4 pe-4" onClick={() => navigate("/HomePage")}>Home</a>
                                            <a class="nav-item nav-link hover-underline-animation ps-4 pe-4" onClick={() => navigate("/Shop")}>Cake</a>
                                            <a class="nav-item nav-link hover-underline-animation ps-4 pe-4" onClick={() => navigate("/About")}>About</a>
                                            <a class="nav-link  hover-underline-animation ps-4 pe-4"  onClick={() => navigate("/Shopping")}>Shopping Cart</a> 
                                            <a  class="nav-item nav-link hover-underline-animation ps-4 pe-4" onClick={() => navigate("/Contact")}>Contact</a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
              
         
        </>
    );
}

export default navBar;