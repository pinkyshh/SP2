import React, { Component } from "react";
import axios from "axios";

const Surveys = props => (
<div className="img" >
    <ul>
        <li><input type="checkbox" id="cb1"/>
        <label for ="cb1">
            <div className="col-md-3" data-wow-delay="0.0s">
                <img src={props.source.image_link} alt={props.source.tag} width="50px" height="50px"  className="img-survey"/>
                <a href={props.source.image_link} active-color="cyan" width="50px" height="50px" />
            </div>
        </label>
        </li>
    </ul>
</div>
)

export default class SurveyQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            surveyList: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3500/surveys')
        .then(response => {
            this.setState({
                surveyList: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getSurveyList() {
        return this.state.surveyList.map(currentSource => {
            return <Surveys source={currentSource} key={currentSource._id} />
        });
    }

    render() {
        return (
        
            <div>
                <section id="survey-questions" className="parallex-section">
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-offset-1 col-md-10 col-sm-12" >
                                {/* <div className="survey-question-wrapper" style={{ paddingTop : 8}}> 
                                    <h3 className="wow fadeInUp" data-wow-delay="0.4s" > iLearn </h3>
                                    <h1 className="wow fadeInUp" data-wow-delay="0.6s" >Explore our online surveys</h1>
                                    <a href="#work" className="wow fadeInUp smoothScroll arrow-btn" data-wow-delay="1s"><i className="fa fa-angle-double-down"></i></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="work" class="parallax-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                {/* <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                                    <h2>Please help us by filling our survey</h2>
                                    <p>Here are few pictures of places of Paris displayed on the screen. Please select places that you think are in Paris.</p>
                                </div> */}
                            </div>

                            <table>
                                <tr>
                                    <td>
                                        <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s" >
                                            <div class="work-thumb">
                                                <ul>
                                                    <li><input type="checkbox" id="cb1"/>
                                                        <label for ="cb1"><img src={this.getSurveyList()} class="img-survey"/></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>  
                                    </td>

                                    <td>
                                        <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s" >
                                            <div class="work-thumb">
                                                <ul>
                                                    <li><input type="checkbox" id="cb2"/>
                                                        <label for ="cb2"><img src={this.getSurveyList()} class="img-survey"/></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>  
                                    </td>

                                    <td>
                                        <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s" >
                                            <div class="work-thumb">
                                                <ul>
                                                    <li><input type="checkbox" id="cb3"/>
                                                        <label for ="cb3"><img src={this.getSurveyList()} class="img-survey"/></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>  
                                    </td>
                                </tr>
                         </table>

                         <table>
                                <tr>
                                    <td>
                                        <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s" >
                                            <div class="work-thumb">
                                                <ul>
                                                    <li><input type="checkbox" id="cb4"/>
                                                        <label for ="cb4"><img src={this.getSurveyList()} class="img-survey"/></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>  
                                    </td>

                                    <td>
                                        <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s" >
                                            <div class="work-thumb">
                                                <ul>
                                                    <li><input type="checkbox" id="cb5"/>
                                                        <label for ="cb5"><img src={this.getSurveyList()} class="img-survey"/></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>  
                                    </td>

                                    <td>
                                        <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s" >
                                            <div class="work-thumb">
                                                <ul>
                                                    <li><input type="checkbox" id="cb6"/>
                                                        <label for ="cb6"><img src={this.getSurveyList()} class="img-survey"/></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>  
                                    </td>
                                </tr>
                         </table>

                      
                        <div class="wow fadeInUp col-md-3 col-sm-6">
                            <button class="submitbtn" name="submit" type="submit">Submit</button>
                        </div>
                                
                        <div class="wow fadeInUp col-md-3 col-sm-6" >
                            <button class="nextbtn" name="next" type="next">Next</button>
                        </div>
                               


                            {/* <div className="wow fadeInUp col-md-3 col-sm-6">
                                <div className="row">
                                    { this.getSurveyList()  }   
                                </div>
                            </div> */}
      
                        </div>
                    </div>
            </section>
            </div>
        )
    }
}

// export default Survey 
             


              


