import React from 'react';
import service1 from "./img/services/services-1.jpg";
import service2 from "./img/services/services-2.jpg";
import service4 from "./img/services/services-4.jpg";
import service3 from "./img/services/services-3.jpg";
import { FontAwesomeIcon } from '../node_modules/@fortawesome/react-fontawesome';
import {faPlay} from '../node_modules/@fortawesome/free-solid-svg-icons';

function Service() {
    return (
        <>
            <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text">
                                <h2>Services</h2>
                                <div className="bt-option">
                                    <a href="./index.html">Home</a>
                                    <span>Services</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>What we do?</span>
                        <h2>PUSH YOUR LIMITS FORWARD</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 order-lg-1 col-md-6 p-0">
                    <div class="ss-pic">
                        <img src={service1} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-2 col-md-6 p-0">
                    <div class="ss-text">
                        <h4>Personal training</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore
                            facilisis.</p>
                        <a href="#">Explore</a>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-3 col-md-6 p-0">
                    <div class="ss-pic">
                        <img src={service2} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-4 col-md-6 p-0">
                    <div class="ss-text">
                        <h4>Group fitness classes</h4>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
                        <a href="#">Explore</a>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-8 col-md-6 p-0">
                    <div class="ss-pic">
                        <img src={service4} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-7 col-md-6 p-0">
                    <div class="ss-text second-row">
                        <h4>Body building</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore
                            facilisis.</p>
                        <a href="#">Explore</a>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-6 col-md-6 p-0">
                    <div class="ss-pic">
                        <img src={service3} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-5 col-md-6 p-0">
                    <div class="ss-text second-row">
                        <h4>Strength training</h4>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
                        <a href="#">Explore</a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="bs-text service-banner">
                        <h2>Exercise until the body obeys.</h2>
                        <div className="bt-tips">Where health, beauty and fitness meet.</div>
                        <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><FontAwesomeIcon icon={faPlay}/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="pricing-section service-pricing spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Our Plan</span>
                        <h2>Choose your pricing plan</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8">
                    <div className="ps-item">
                        <h3>Class drop-in</h3>
                        <div className="pi-price">
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
                        <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                        <a href="#" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8">
                    <div className="ps-item">
                        <h3>12 Month unlimited</h3>
                        <div className="pi-price">
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
                        <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                        <a href="#" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8">
                    <div className="ps-item">
                        <h3>6 Month unlimited</h3>
                        <div className="pi-price">
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
                        <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                        <a href="#" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Service
