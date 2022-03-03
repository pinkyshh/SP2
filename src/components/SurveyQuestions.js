import React, { Component, useEffect, useState } from "react";
import SurveryComponents  from "./SurveryComponents";
import axios from "axios";
import { useParams } from "react-router-dom";

export const SurveyQuestions = () => {
    const params = useParams();
    const [surveys, setSurveys] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [currentPage, setCurrentPage] =useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchSurveys = async () => {
            const res = await axios.get(`http://localhost:3500/surveys/${params.id}`);
            console.log(res);
            setSurveys(res.data);
            setCurrentPage(1)
        };
        fetchSurveys();
    }, []);

    useEffect(() => {
        // Limit only 6 questions from x amount of surveys
        if(surveys.length > 0) {
            var posts = []
            var lastIndex = currentPage * postsPerPage;

            if (lastIndex > surveys.length) {
                lastIndex = surveys.length;
            }

            var startIndex = lastIndex - postsPerPage;

            for ( let i=startIndex; i < lastIndex; i++) {
                posts.push(surveys[i]);
            }

            setQuestions(posts)
        }

    } , [surveys])


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts=surveys
    // const currentPosts = surveys.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div>
            <section id="survey-questions" className="parallex-section">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-offset-1 col-md-10 col-sm-12" >
                        </div>
                    </div>
                </div>
            </section>

            <section id="work" class="parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                                <h2>Please help us by filling our survey</h2>
                                <p>Here are few pictures of places of Paris displayed on the screen. Please select places that you think are in Paris.</p>
                            </div>
                        </div>

                        <table>
                                <tr>
                                    <td>
                                        <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s" >
                                            <div class="work-thumb">
                                                <ul>
                                                    <li><input type="checkbox" id="cb1"/>
                                                        <SurveryComponents surveys= {currentPosts}/>                   
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>  
                                    </td>
                                </tr>
                        </table>  

                        <div class="wow fadeInUp flex-parent jc-center">
                            <button class="submitbtn margin-right" name="submit" type="submit">Submit</button>
                            <button class="nextbtn" name="next" type="next" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>

                        </div>
                    </div>
                </div>
                {/* <div>
                <button className="submitbtn" name="submit" type="submit">Submit</button>
                <button className="nextbtn" name="next" type="next" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>   
                </div> */}
                </section>
        </div>

    )
}

export default SurveyQuestions;
// surveys = {currentPosts}

