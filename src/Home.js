import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '../node_modules/@fortawesome/react-fontawesome';
import { faAngleRight, faImage, } from '../node_modules/@fortawesome/free-solid-svg-icons';
import class1 from "./img/classes/class-1.jpg";
import class2 from "./img/classes/class-2.jpg";
import class3 from "./img/classes/class-3.jpg";
import class4 from "./img/classes/class-4.jpg";
import class5 from "./img/classes/class-5.jpg";
import { FaNutritionix, FaTelegramPlane, FaAngleLeft } from 'react-icons/fa';
import { CgGym } from "react-icons/cg";
import { GiLifeSupport } from "react-icons/gi";
import { BsChevronLeft } from "react-icons/bs";
import {NavLink} from "react-router-dom";

function Home() {
    const options = {
        loop:true,
        autoplay: true,
        nav: true,
        navText: ["prev", "next"],
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            }
        }
    };

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
    return (
        <>
            <section class="hero-section">
                <OwlCarousel class="hs-slider owl-carousel" items={1} loop={true} {...options}>
                    <div class="hs-item set-bg" data-setbg="img/hero/hero-1.jpg">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 offset-lg-6">
                                    <div class="hi-text">
                                        <span>Shape your body</span>
                                        <h1>Be <strong>strong</strong> traning hard</h1>
                                        <NavLink to="/about" class="primary-btn">Get info</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hs-item set-bg" data-setbg="img/hero/hero-2.jpg">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 offset-lg-6">
                                    <div class="hi-text">
                                        <span>Shape your body</span>
                                        <h1>Be <strong>strong</strong> traning hard</h1>
                                        <NavLink to="/about" class="primary-btn">Get info</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section>

            <section class="choseus-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <span>Why chose us?</span>
                                <h2>PUSH YOUR LIMITS FORWARD</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="cs-item">
                                <span class="flaticon-034-stationary-bike">
                                    <CgGym/>
                                </span>
                                <h4>Modern equipment</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            dolore facilisis.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="cs-item">
                                <span class="flaticon-033-juice">
                                    <FaNutritionix/>
                                </span>
                                <h4>Healthy nutrition plan</h4>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                            facilisis.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="cs-item">
                                <span class="flaticon-002-dumbell">
                                <FaTelegramPlane/>
                                </span>
                                <h4>Proffesponal training plan</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            dolore facilisis.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="cs-item">
                                <span class="flaticon-014-heart-beat">
                              <GiLifeSupport/>
                                </span>
                                <h4>Unique to your needs</h4>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                            facilisis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="classes-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Our Classes</span>
                        <h2>WHAT WE CAN OFFER</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="class-item">
                        <div class="ci-pic">
                            <img src={class1} className="img-fluid"/>
                        </div>
                        <div class="ci-text">
                            <span>STRENGTH</span>
                            <h5>Weightlifting</h5>
                            <a href="#"><FontAwesomeIcon icon={faAngleRight}/></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="class-item">
                        <div class="ci-pic">
                        <img src={class2} className="img-fluid"/>
                        </div>
                        <div class="ci-text">
                            <span>Cardio</span>
                            <h5>Indoor cycling</h5>
                            <a href="#"><FontAwesomeIcon icon={faAngleRight}/></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="class-item">
                        <div class="ci-pic">
                        <img src={class3} className="img-fluid"/>
                        </div>
                        <div class="ci-text">
                            <span>STRENGTH</span>
                            <h5>Kettlebell power</h5>
                            <a href="#"><FontAwesomeIcon icon={faAngleRight}/></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="class-item">
                        <div class="ci-pic">
                        <img src={class4} className="img-fluid"/>
                        </div>
                        <div class="ci-text">
                            <span>Cardio</span>
                            <h4>Indoor cycling</h4>
                            <a href="#"><FontAwesomeIcon icon={faAngleRight}/></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="class-item">
                        <div class="ci-pic">
                        <img src={class5} className="img-fluid"/>
                        </div>
                        <div class="ci-text">
                            <span>Training</span>
                            <h4>Boxing</h4>
                            <a href="#"><FontAwesomeIcon icon={faAngleRight}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section class="banner-section set-bg" data-setbg="img/banner-bg.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="bs-text">
                        <h2>registration now to get more deals</h2>
                        <div class="bt-tips">Where health, beauty and fitness meet.</div>
                        <a href="#" class="primary-btn  btn-normal">Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="pricing-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Our Plan</span>
                        <h2>Choose your pricing plan</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>Class drop-in</h3>
                        <div class="pi-price">
                            <h2>$ 39.0</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Month to mouth</li>
                            <li>No time restriction</li>
                        </ul>
                        <a href="#" class="primary-btn pricing-btn">Enroll now</a>
                        <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>12 Month unlimited</h3>
                        <div class="pi-price">
                            <h2>$ 99.0</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Month to mouth</li>
                            <li>No time restriction</li>
                        </ul>
                        <a href="#" class="primary-btn pricing-btn">Enroll now</a>
                        <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>6 Month unlimited</h3>
                        <div class="pi-price">
                            <h2>$ 59.0</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Month to mouth</li>
                            <li>No time restriction</li>
                        </ul>
                        <a href="#" class="primary-btn pricing-btn">Enroll now</a>
                        <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div class="gallery-section">
        <div class="gallery">
            <div class="grid-sizer"></div>
            <div class="gs-item grid1 grid-wide set-bg" data-setbg="img/gallery/gallery-1.jpg">
                <a href="img/gallery/gallery-1.jpg" class="thumb-icon image-popup"><FontAwesomeIcon icon={faImage}/></a>
            </div>
            <div class="gs-item grid2  set-bg" data-setbg="img/gallery/gallery-2.jpg">
                <a href="img/gallery/gallery-2.jpg" class="thumb-icon image-popup"><FontAwesomeIcon icon={faImage}/></a>
            </div>
            <div class="gs-item grid3 set-bg" data-setbg="img/gallery/gallery-3.jpg">
                <a href="img/gallery/gallery-3.jpg" class="thumb-icon image-popup"><FontAwesomeIcon icon={faImage}/></a>
            </div>
            <div class="gs-item grid4 set-bg" data-setbg="img/gallery/gallery-4.jpg">
                <a href="img/gallery/gallery-4.jpg" class="thumb-icon image-popup"><FontAwesomeIcon icon={faImage}/></a>
            </div>
            <div class="gs-item grid5 set-bg" data-setbg="img/gallery/gallery-5.jpg">
                <a href="img/gallery/gallery-5.jpg" class="thumb-icon image-popup"><FontAwesomeIcon icon={faImage}/></a>
            </div>
            <div class="gs-item grid6 grid-wide set-bg" data-setbg="img/gallery/gallery-6.jpg">
                <a href="img/gallery/gallery-6.jpg" class="thumb-icon image-popup"><FontAwesomeIcon icon={faImage}/></a>
            </div>
        </div>
    </div>


    <section class="team-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="team-title">
                        <div class="section-title">
                            <span>Our Team</span>
                            <h2>TRAIN WITH EXPERTS</h2>
                        </div>
                        <a href="#" class="primary-btn btn-normal appoinment-btn">appointment</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <OwlCarousel class="ts-slider owl-carousel" margin={20} {...options1}>
                  
                        <div class="ts-item ts-item1 set-bg" data-setbg="img/team/team-1.jpg">
                            <div class="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                    
                    
                        <div class="ts-item ts-item2 set-bg" data-setbg="img/team/team-2.jpg">
                            <div class="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                 
                    
                        <div class="ts-item ts-item3 set-bg" data-setbg="img/team/team-3.jpg">
                            <div class="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                    
                    
                        <div class="ts-item ts-item4 set-bg" data-setbg="img/team/team-4.jpg">
                            <div class="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                   
                    
                        <div class="ts-item ts-item5 set-bg" data-setbg="img/team/team-5.jpg">
                            <div class="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
               
                   
                        <div class="ts-item ts-item6 set-bg" data-setbg="img/team/team-6.jpg">
                            <div class="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                   
                </OwlCarousel>
            </div>
        </div>
    </section>



 
        </>
    )
}

export default Home
