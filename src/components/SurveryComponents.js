import { Axios } from "axios";
import React, { Component, useEffect, useState } from "react";

const SurveryComponents = ({surveys}) => {
   const [checked , setChecked] = useState(0);

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
        <ul>
        <li><input type="checkbox" id="cb1"/>
            <img src={surveys.image} alt={surveys.image} width="20px" height="20px" className="img-survey" />
            <a href={surveys.image} active-color="cyan" />
        </li>
        </ul>
    //   <ul className='list-group mb-4'>
    //       {surveys.forEach(( survey, index) => (
    //         <div key = {index}>
    //         <div className="img-container" >
    //            <ul>
    //                <l1>
    //                    <input type="checkbox" id={index} onChange={(e) => handleChange(e, survey.tag)}/>
    //                    <label for={index}>
                         
    //                     </label>
    //                 </l1>
    //             </ul>
    //         </div> 
    //         </div>
    //       ))}

    
    //   </ul>
    );
};

export default SurveryComponents;
