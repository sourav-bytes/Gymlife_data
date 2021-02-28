import React from 'react'
import { FontAwesomeIcon } from '../node_modules/@fortawesome/react-fontawesome';
import { faPlay } from '../node_modules/@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import testi from "./img/testimonial/testimonial-2.jpg";
import testi2 from "./img/testimonial/testimonial-1.jpg";
import { FaNutritionix, FaTelegramPlane } from 'react-icons/fa';
import { CgGym } from "react-icons/cg";
import { GiLifeSupport } from "react-icons/gi";

function About() {

    const options1 = {
        loop:true,
        autoplay: true,
        nav: true,
        navText: ["prev", "next"],
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            1000:{
                items: 3
            }
        }
    };

    const options2 = {
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav:true,
         navText: ["prev", "next"],
    };
    return (
        <>
            <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text">
                                <h2>About us</h2>
                                <div className="bt-option">
                                    <a href="./index.html">Home</a>
                                    <span>About</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="choseus-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Why chose us?</span>
                        <h2>PUSH YOUR LIMITS FORWARD</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="cs-item">
                        <span className="flaticon-034-stationary-bike"><FaNutritionix/></span>
                        <h4>Modern equipment</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            dolore facilisis.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="cs-item">
                        <span className="flaticon-033-juice"><FaTelegramPlane/></span>
                        <h4>Healthy nutrition plan</h4>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                            facilisis.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="cs-item">
                        <span className="flaticon-002-dumbell"><CgGym/></span>
                        <h4>Proffesponal training plan</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            dolore facilisis.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="cs-item">
                        <span className="flaticon-014-heart-beat"><GiLifeSupport/></span>
                        <h4>Unique to your needs</h4>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                            facilisis.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="aboutus-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0">
                    <div className="about-video set-bg" data-setbg="img/about-us.jpg">
                        <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup">
                            <FontAwesomeIcon icon={faPlay}/></a>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="about-text">
                        <div className="section-title">
                            <span>About Us</span>
                            <h2>What we have done</h2>
                        </div>
                        <div className="at-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className="about-bar">
                            <div className="ab-item">
                                <p>Body building</p>
                                <div id="bar1" className="barfiller progress">
                                    <span className="fill" data-percentage="80"></span>
                                    <div className="tipWrap">
                                        <span className="tip"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="ab-item">
                                <p>Training</p>
                                <div id="bar2" className="barfiller">
                                    <span className="fill" data-percentage="85"></span>
                                    <div className="tipWrap">
                                        <span className="tip"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="ab-item">
                                <p>Fitness</p>
                                <div id="bar3" className="barfiller">
                                    <span className="fill" data-percentage="75"></span>
                                    <div className="tipWrap">
                                        <span className="tip"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="team-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="team-title">
                        <div className="section-title">
                            <span>Our Team</span>
                            <h2>TRAIN WITH EXPERTS</h2>
                        </div>
                        <a href="#" className="primary-btn btn-normal appoinment-btn">appointment</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <OwlCarousel className="ts-slider owl-carousel" margin={20} {...options1}>
                  
                        <div className="ts-item ts-item1 set-bg" data-setbg="img/team/team-1.jpg">
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                    
                    
                        <div className="ts-item ts-item2 set-bg" data-setbg="img/team/team-2.jpg">
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                 
                    
                        <div className="ts-item ts-item3 set-bg" data-setbg="img/team/team-3.jpg">
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                    
                    
                        <div className="ts-item ts-item4 set-bg" data-setbg="img/team/team-4.jpg">
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                   
                    
                        <div className="ts-item ts-item5 set-bg" data-setbg="img/team/team-5.jpg">
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
               
                   
                        <div className="ts-item ts-item6 set-bg" data-setbg="img/team/team-6.jpg">
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                   
                </OwlCarousel>
            </div>
        </div>
    </section>


    <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="bs-text">
                        <h2>registration now to get more deals</h2>
                        <div className="bt-tips">Where health, beauty and fitness meet.</div>
                        <a href="#" className="primary-btn  btn-normal">Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="testimonial-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Testimonial</span>
                        <h2>Our cilent say</h2>
                    </div>
                </div>
            </div>
            <OwlCarousel className="ts_slider owl-carousel" items={1} {...options2}>
                <div className="ts_item">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="ti_pic">
                                <img src={testi2} alt=""/>
                            </div>
                            <div className="ti_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                    gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
                                <h5>Marshmello Gomez</h5>
                                <div className="tt-rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ts_item">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="ti_pic">
                                <img src={testi}/>
                            </div>
                            <div className="ti_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                    gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
                                <h5>Marshmello Gomez</h5>
                                <div className="tt-rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </section>
        </>
    )
}

export default About
