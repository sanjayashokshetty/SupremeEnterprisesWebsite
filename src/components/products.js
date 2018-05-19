import React from 'react';
import '../index.css';
import '../w3css.css';
import textFont from '../styles/textfont.js';
import headFont from '../styles/headfont.js';

// All the products
import controller from '../images/sigs/cipher.png'; 
import purifier from '../images/sigs/medium.png';
import softner from '../images/sigs/rovisp.png';

var sigList = [
    {sig : controller, name: 'Water Level Controller', link : ''},
    {sig : purifier, name: 'Purifier' , link : ''},
    {sig : softner, name: 'Softner' , link : ''}
]

var imgStyle = {
    height: '30vh',
    maxHeight: '400px'
}

var newtextfont = Object.assign({ maxWidth: '100%', overflowX: 'hidden'},textFont);
newtextfont.height = '80%';
export default class Products extends React.Component{

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
        }, 10000)
    }

    render(){
        return(
            <div className="w3-card w3-padding" style={{height:'70vh',minHeight:'500px'}} >
                <h1 className="w3-center w3-margin w3-jumbo" style={headFont} > <b> Products </b></h1>
                <div className="w3-padding w3-large w3-center w3-display-container"  style={newtextfont}>
                    <h4 className={"w3-xxlarge w3-center " + this.state.animate} style={textFont} >{this.state.currentSig.name}</h4>
                    <img className={'w3-image w4-left' +  this.state.animate} src={this.state.currentSig.sig} alt={this.state.currentSig.name} style={imgStyle} />
                    
                    <div class="w3-cell w3-right" style={{"maxWidth": "270px"}}>
	                    <p class="w3-padding">This is devive is used to control the water level.</p>
	                    <p><button class="w3-button w3-red">Read detail</button></p>
                    </div>

                    <div className="w3-display-left" ><i className="fa fa-angle-left w3-button w3-hover-white w3-xxlarge w3-opacity" aria-hidden="true" onClick={this.changeSig.bind(this,-1)}></i></div>
                    <div className="w3-display-right" ><i className="fa fa-angle-right w3-button w3-hover-white w3-xxlarge w3-opacity" aria-hidden="true" onClick={this.changeSig.bind(this,1)}></i></div>
                </div>
            </div>        
        )
    }
}