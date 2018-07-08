import React from 'react';
import '../index.css';
import '../w3css.css';
import textFont from '../styles/textfont.js';
import headFont from '../styles/headfont.js';

// All the products
import waterlevelfull from '../images/products/waterlevelfull.jpeg'; 
import waterlevel from '../images/products/waterlevel.jpeg'; 
import purifier from '../images/products/purifier.jpeg';
import purifier1 from '../images/products/purifier1.jpeg';
import softner from '../images/products/softner.jpeg';
import secure from '../images/products/secure.jpeg';
import secure1 from '../images/products/secure2.jpeg';
import cctv from '../images/products/cctv.jpeg';
import hikvision from '../images/products/hikvision.jpeg';
import facerecog from '../images/products/facerecog.jpeg';
import camera from '../images/products/camera.jpeg';


var sigList = [
    {product : waterlevelfull},
    {product : waterlevel},
    {product : purifier},
    {product : purifier1},
    {product : softner},
    {product : secure},
    {product : secure1},
    {product : cctv},
    {product : hikvision},
    {product : facerecog},
    {product : camera}
]

var imgStyle = {
    height: '50vh',
    maxHeight: '400px'
}

var newtextfont = Object.assign({ maxWidth: '100%', overflowX: 'hidden'},textFont);
newtextfont.height = '80%';

export default class About extends React.Component{
    constructor(){
        super();
        this.state = {
            currentSig : sigList[0],
            index : 0,
            animate : 'w3-animate-right'	
        }
    }

    changeClass(val){
        var App = this;
        setTimeout(()=>{
            if(val === -1)
                App.setState({
                    animate : 'w3-animate-left'
                })
            else
                App.setState({
                    animate : 'w3-animate-right'
                })
        }, 500)
       
    }

    changeSig(val){
        var pos = this.state.index;
        
        this.setState({
            animate : 'w3-hide'
        });

        if(val === -1){
            pos--;
            if(pos<0)
                pos = sigList.length - 1;
        }
        else{
            pos = pos + val;
            pos = pos % sigList.length;
        }

        this.setState({
            index : pos
        });
        this.setState({
            currentSig : sigList[pos]
        })

        this.changeClass(val);

    }

    componentDidMount(){
        var App = this;
        setInterval(()=>{
            App.changeSig(1)
        }, 1000)
    }

    render(){
        return(
            <div>
            <div className="w3-card w3-padding w3-large w3-center w3-display-container">
                <h1 className="w3-center w3-jumbo" style={headFont} > <b> About </b></h1>
                <p className="w3-padding w3-large" style={textFont}>
                Supreme Enterprises is one of the renowned dealers Automatic Water Level Controller cum Indicator, Timers ,Water Purifier, Water Softners,Security Systems. These products are made of quality standards, using high-quality raw material , Attractive Design & Excellent Finish sourced from the most trusted vendors of the industry. Quality is our main aim since 2005.<br/>Main thing in us is to providing the best service after sale which makes us win.
                </p>
                <img className={'w3-image w4-left' +  this.state.animate} src={this.state.currentSig.product} alt={this.state.currentSig.name} style={imgStyle} />
                <div className="w3-display-left" ><i className="fa fa-angle-left w3-button w3-hover-white w3-xxlarge w3-opacity" aria-hidden="true" onClick={this.changeSig.bind(this,-1)}></i></div>
                <div className="w3-display-right" ><i className="fa fa-angle-right w3-button w3-hover-white w3-xxlarge w3-opacity" aria-hidden="true" onClick={this.changeSig.bind(this,1)}></i></div>
            </div>     
            </div>
        )
    }
}