import React from 'react';
import '../index.css';
import '../w3css.css';
import textFont from '../styles/textfont.js';
import headFont from '../styles/headfont.js';

var footerStyle={ backgroundColor : '#130f0f' , height : '120px',allign:'center',display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white"}
export default class Footer extends React.Component{
    render(){
        return(
            <div className="w3-card w3-padding" >
                <a name="contact">
                    <p className="w3-padding w3-large" style={textFont,footerStyle}>
                    <h4>contact no: 7760225382</h4>
                    <h4>email address: ganesh11leela@gmail.com</h4>
                    </p>
                </a>
            </div>
        )
    }
}