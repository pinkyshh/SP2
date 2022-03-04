import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


export const Survey = () => {
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        const fetchSurveys = async () => {
            const res = await axios.get(`http://localhost:3500/surveys`);
            console.log(res);
            setSurveys(res.data);
        };
        
        fetchSurveys();
    }, []);

    return (
        <div>
            <section id="survey" className="parallex-section">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-offset-1 col-md-10 col-sm-12" >
                        </div>
                    </div>
                </div>
            </section>

            <section id="work-survey" className="parallax-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-sm-12">
                            <div className="wow fadeInUp section-title" data-wow-delay="0.2s" style={{ paddingTop: 8}}>
                                <h2 >Survey Categories</h2>
                                <p>At iLearn, taking surveys is a piece of cake. Choose a category from below to begin!</p>
                            </div>
                        </div>
                        
                        <div className="service" style={{ paddingBottom: 8}}>
                            <div className="container">
                                <div className="row">
                                    {surveys.map(( survey, index) => (
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s" key = {index}>
                                            <div className="service-item">
                                            <Link to={'/surveys/'+ survey.category} className="nav-item nav-link active is-active" active-color="cyan">
                                                <div className="service-icon">
                                                    <img src={survey.category}  width="150px" height="150px" />
                                                </div>
                                                <h3>{survey.category}</h3>
                                                </Link>  
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Survey;