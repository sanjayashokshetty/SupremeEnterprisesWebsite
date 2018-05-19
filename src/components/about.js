import React from 'react';
import '../index.css';
import '../w3css.css';
import textFont from '../styles/textfont.js';
import headFont from '../styles/headfont.js';

export default class About extends React.Component{
    render(){
        return(
            <div className="w3-card w3-padding">
                <h1 className="w3-center w3-margin w3-jumbo" style={headFont} > <b> About </b></h1>
                <p className="w3-padding w3-large" style={textFont}>
                Supreme Enterprises are one of the renowned manufacturers of Automatic Water Level Controller, Automatic Water Level Controller cum Indicator, Liquid Level based Pump Controller, Liquid Level Indicator, Controller, Timers and Instrumentation Modules These products are made in compliance with the Indian quality standards, using high-quality raw material , Attractive Design & Excellent Finish sourced from the most trusted vendors of the industry. Quality is our main aim from since 2001 the inception of and provide complete water level controller solution.<br/>.We have a fabulous team of self-driven, dynamic and enthusiastic professionals, which serves as the backbone of our organization. Professionals are hired on the basis of their key skills and practical experience. Further, we give them designations depending upon their filed of expertise so that every individual is comfortable doing his or her task. All the departments are efficiently managed by department heads, who possess a deep understanding pertaining to the procedures of this field. Owing to streamlined planning and implementation.
                </p>
            </div>
        )
    }
}