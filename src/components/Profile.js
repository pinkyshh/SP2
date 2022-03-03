import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>
            <section id="profile" class="parallex-section"></section>

            {/* <!-- PROFILE DETAIL SECTION --> */}
            <section id="profile_detail" class="parallax-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="wow fadeInUp section-title" data-wow-delay="0.6s">
                                <div class="profile-wrapper"></div>
                                <h2><b>Pinky Shahi</b></h2>
                                <p>u6135205@au.edu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--PROFILE DETAIL 2--> */}
            <section id="prof" class="parallax-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            {/* <!-- SECTION TITLE --> */}
                            <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                                <br></br>
                                <h2>My Dashboard</h2>
                            </div>
                        </div>

                        <div class="profile2">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                                    <div class="profile2-item">
                                        <h3>Survey Answered</h3>
                                        <p>100</p>
                                    </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="profile2-item">
                                        <h3>Your Score</h3>
                                        <p>86</p>
                                    </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                        <div class="profile2-item">
                                            <h3>Your Rewards</h3>
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
        </div>
    )
}

export default Home