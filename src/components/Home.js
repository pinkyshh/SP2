import React from 'react'
import aboutImage from '../assets/images/about-image.jpg'
import cat from '../assets/images/cat.png'
import electricCar from '../assets/images/electric-car.png'
import building from '../assets/images/building.png'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>
            <section id="home" className="parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-1 col-md-10 col-sm-12">
                            <div className="home-wrapper">
                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">Image Survey</h3>
                                <h1 className="wow fadeInUp" data-wow-delay="0.6s">iLearn : A new survey panel with daily online surveys</h1>
                                <Link to="#about" className="wow fadeInUp smoothScroll arrow-btn" data-wow-delay="1s"><i className="fa fa-angle-double-down"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="parallax-section">
            <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-8">
                            <img src={aboutImage} className="wow fadeInUp img-responsive" data-wow-delay="0.2s" alt="about image"/>
                            <div className="wow fadeInUp" data-wow-delay="0.4s">    
                                <h4>Interested to Join?</h4>
                                <p >Sign up completely free. It only takes a minute.</p>
                                <Link to="#">Sign Up Now</Link>
                            </div>
                        </div>

                        <div className="col-md-8 col-sm-12">
                            <div className="about-thumb">
                                    <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                                        <h3>we make things better</h3>
                                        <h2>What is iLearn?</h2>
                                    </div>
                                    <div className="wow fadeInUp" data-wow-delay="0.8s">
                                        <p>Once upon a time, we had a dream....</p>
                                        <p>Then we woke up and made <b>iLearn!</b></p>
                                        <p>At iLearn, we have created a thriving community where anyone can sign up to our online survey platform and get rewards. We offer rewards for online surveys across all sorts of different categories.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
            {/* About End  */}

            <section id="work" class="parallax-section">
                <div class="container">
                        <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                                        <h2>Survey Categories</h2>
                                        <p>At iLearn, taking surveys is a piece of cake. Choose a category from below or <a href="survey.html"><b>Click here</b></a> to explore more and begin!</p>
                                    </div>
                                </div>

                                <div class="service">
                                    <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                                        <div class="service-item">
                                            <div class="service-icon">
                                                <img src={cat} width="150px" height="150px"/>
                                            </div>
                                            <h3>Cat</h3>
                                        </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                        <div class="service-item active">
                                            <div class="service-icon">
                                                <img src={electricCar}/>
                                            </div>
                                            <h3>Car</h3>
                                        </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                        <div class="service-item">
                                            <div class="service-icon">
                                                <img src={building}/>
                                            </div>
                                            <h3>Buildings</h3>
                                        </div>
                                        </div>


                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>
            {/* Survey End  */}

            {/* CONTACT SECTION  */}
            <section id="contact" className="parallax-section">
                <div className="container">
                    <div className="row">     
                        <div className="col-md-12 col-sm-12">
                         {/* SECTION TITLE */}
                            <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                                <h2>Got any questions?</h2>
                                <p>Don't be shy & say hello - we promise we don't bite!</p>
                            </div>
                        </div>

                <div className="col-md-12 col-sm-12">
                    {/* CONTACT FORM HERE */}
                   <div className="wow fadeInUp" data-wow-delay="0.6s">
                       <form action="#" method="post" id="contact-form">
                              <div class="col-md-6 col-sm-6">
                                   <input type="text" class="form-control" name="name" placeholder="Name"/>
                              </div>
                              {/* <div class="col-md-6 col-sm-6">
                                   <input type="email" class="form-control" name="email" placeholder="Email"/>
                              </div> */}
                              <div class="col-md-12 col-sm-12">
                                   <textarea class="form-control" rows="5" name="message" placeholder="Message"></textarea>
                              </div>
                              <div class="col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6">
                                   <button id="submit" type="submit" class="form-control" value="send-mail" name="submit">Send Message</button>
                              </div>
                        </form>
                   </div>
              </div>
              </div>
         </div>
        </section>
    </div>
    )
}

export default Home