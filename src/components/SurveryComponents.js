import { Axios } from "axios";
import React, { Component, useEffect, useState } from "react";
import { Grid, Container } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';

const SurveryComponents = ({surveys}) => {
   const [checked , setChecked] = useState(0);

   console.log(surveys);

   const handleChange = (e,index) => {
        console.log(e.target.checked);
        surveys.forEach(survey => {
            if(survey.tag === index) {
                survey.isSelected = e.target.checked
                console.log(survey.tag)
            }
        })
        setChecked(e.target.checked ? checked + 1 : checked - 1)
    }
    useEffect(() => {
        if(checked === 5) {
            console.log('done');
        }
    },[checked]);

    return (
       <div className="survey-grid">
            <Container>
                <Grid>
                    <Grid.Column className="d-flex flex-wrap">
                        {surveys.map(( survey, index) => (
                            <Card.Body>
                                <ul>
                                    <li><input type="checkbox" className="hidden" id={index} onChange={(e) => handleChange(e, survey.tag)}/>
                                        <label for = {index}>
                                                <Card.Img src={survey.url} alt={surveys.category} className="img-survey" />
                                                <a href={survey.url} active-color="cyan" />
                                        </label>
                                    </li>
                                </ul>
                        </Card.Body>
                        ))}
                    </Grid.Column> 
                </Grid>                   
            </Container>
        </div>
    );
}; 

export default SurveryComponents;


    // <ul>
    //     {surveys.map((survey, index) => (
    //         <li>
    //             <input type="checkbox" id={index}/>
    //             <img src={survey.url} alt={surveys.category} className="img-survey" />
    //             <a href={survey.url} active-color="cyan" />
    //         </li>
    //     ))} 
    // </ul> 

    // <ul className='list-group mb-4'>
    //     {surveys.map((survey, index) => (
    //         <li>
    //             <input type="checkbox" id="cb1"/>
    //             <img src={survey.url} alt={surveys.category} width="20px" height="20px" className="img-survey" />
    //             <a href={survey.url} active-color="cyan" />
    //         </li>
    //     ))} 
    //  </ul>

       // <ul className='list-group mb-4'>
    //       {surveys.map(( survey, index) => (
    //         <div key = {index}>
    //             <div className="img-container" >
    //             <ul>
    //                 <l1>
    //                     <input type="checkbox" id={index} onChange={(e) => handleChange(e, survey.tag)}/>
    //                     <label for={index}>
    //                     <ul>
    //                             <li><input type="checkbox" id="cb1"/>
    //                                 <img src={survey.url} alt={surveys.category} width="20px" height="20px" className="img-survey" />
    //                                 <a href={survey.url} active-color="cyan" />
    //                             </li>
    //                         </ul>
    //                     </label>
    //                     </l1>
    //                 </ul>
    //             </div> 
    //         </div>
    //       ))} 


    //  </ul>
  