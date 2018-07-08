import React from 'react';
import '../index.css';
import '../w3css.css';
import textFont from '../styles/textfont.js';

var footerStyle={ backgroundColor : '#130f0f' , height : '150px',allign:'center',display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white"}
export default class Footer extends React.Component{
    render(){
        return(
            <div className="w3-container w3-padding w3-margin" style={footerStyle} >
					<p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-deep-purple"></i>#119/3,S.C Road ,Shesadripuram,Bangalore-20</p>
					<p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-deep-purple"></i>supremeenterprises5383@gmail.com</p>
					<p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-deep-purple"></i>7760225383 or 9844279240</p>
            </div>
        )
    }
}