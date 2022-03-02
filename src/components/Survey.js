import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cat from '../assets/images/cat.png'
import electricCar from '../assets/images/electric-car.png'
import building from '../assets/images/building.png'
import crossing from '../assets/images/crossing.png'
// import nature from '..assets/images/nature.png'
// import policeman from '..assets/images/policeman.png'

export default class Survey extends Component {

    render () {
        return (
            <div>
                  <section id="survey" className="parallex-section">
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-offset-1 col-md-10 col-sm-12" >
                                {/* <div className="survey-wrapper" style={{ paddingTop : 5}}> 
                                    <h3 className="wow fadeInUp" data-wow-delay="0.4s" > iLearn </h3>
                                    <h1 className="wow fadeInUp" data-wow-delay="0.6s" >Explore our online surveys</h1>
                                    <a href="#work-survey" className="wow fadeInUp smoothScroll arrow-btn" data-wow-delay="1s"><i className="fa fa-angle-double-down"></i></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="work-survey" className="parallax-section">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 col-sm-12">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.2s" style={{ paddingTop: 80}}>
                                    <h2 >Survey Categories</h2>
                                    <p>At iLearn, taking surveys is a piece of cake. Choose a category from below or <a href="survey.ejs"><b>Click here</b></a> to explore more and begin!</p>
                                </div>
                            </div>
                            <div className="service" style={{ paddingBottom: 80}}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                {/* <Link to="/surveyquestion" className="nav-item nav-link active is-active" active-color="cyan">SurveyQuestions</Link>  */}
                                                    <img src={cat} alt="Cat" width="150px" height="150px" />
                                                   
                                                </div>
                                                <h3>Cat</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="service-item active">
                                                <div className="service-icon">
                                                        <img src={electricCar} alt="Electric Car" width="150px" height="150px" />
                                                        <a href="dog-survey" active-color="cyan" />
                                                </div>
                                                <h3>Car</h3>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <img src={building} alt="Building" width="150px" height="150px" />
                                                </div>
                                                <h3>Buildings</h3>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="service-item active">
                                                <div className="service-icon">
                                                    <img src={crossing} alt="Cross-Walk" width="150px" height="150px" />
                                                </div>
                                                <h3>Cross-Walk</h3>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="service-item active">
                                                <div className="service-icon">
                                                    <img src={crossing} alt="Cross-Walk" width="150px" height="150px" />
                                                </div>
                                                <h3>Cross-Walk</h3>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="service-item active">
                                                <div className="service-icon">
                                                    <img src={crossing} alt="Cross-Walk" width="150px" height="150px" />
                                                </div>
                                                <h3>Cross-Walk</h3>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}