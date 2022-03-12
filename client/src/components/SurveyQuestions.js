import React, { useEffect, useState } from 'react'
import { SurveryComponents } from './SurveryComponents'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { user } from './firebase-config'

export const SurveyQuestions = () => {
    const params = useParams()
    const [surveys, setSurveys] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6)

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = surveys.slice(indexOfFirstPost, indexOfLastPost)

    const handleSubmit = async () => {
        const data = {
            user_id: user?.uid || '',
            images: currentPosts
        }
        try {
            axios.post('http://localhost:3500/answers', data)
            .then(() => setCurrentPage(currentPage + 1))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const fetchSurveys = async () => {
            const res = await axios.get(`http://localhost:3500/surveys/${params.id}`)
            setCurrentPage(1)
            setSurveys(res.data.images)
        }
        fetchSurveys()
    }, [])

    return (
        <div>
            <section id="survey-questions" className="parallex-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-1 col-md-10 col-sm-12"></div>
                    </div>
                </div>
            </section>

            <section id="work" className="parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                                <h2>Begin the survey</h2>
                                <p>
                                    Choose the images that you like the most.
                                </p>
                            </div>
                        </div>

                        <div className="wow fadeInUp" data-wow-delay="0.4s">
                            <div className="work-thumb">
                                <SurveryComponents surveys={currentPosts} />
                            </div>
                        </div>

                        <div className="wow fadeInUp flex-parent jc-center">
                            <Link to="/survey">
                            <button
                                className="submitbtn margin-right"
                                name="submit"
                                type="submit"
                                // onClick={handleSubmit}
                            >
                                Exit Survey
                            </button>
                            </Link>
                            <button
                                className="nextbtn"
                                name="next"
                                type="next"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SurveyQuestions
