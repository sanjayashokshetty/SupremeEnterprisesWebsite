import React from 'react';
import '../index.css';
import '../w3css.css';

//images 
import supreme from '../images/slogo.png'

export default class Nav extends React.Component{
    
    constructor(){
        super();
        this.state = {modalShow: false, navclass : 'top'};
    }

    //methods
    toggleModal(){
        this.setState({modalShow:!this.state.modalShow});

    }

    componentDidMount(){
        var prevScrollpos = window.pageYOffset;

        var App = this;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                App.setState({navclass : 'top'});
            } else {
                App.setState({navclass : 'hide'});
            }
            prevScrollpos = currentScrollPos;
        }
    }

    render(){

        var show = this.state.modalShow ? "w3-show": "";
        var menuStyle= {fontFamily: "'Courgette', cursive"}

        return(        
            <div className= {"w3-cell-row w3-white navbar " + this.state.navclass} ref="navigation">
                <div className="w3-cell w3-hide-large w3-cell-middle"><button className="w3-button w3-margin" onClick={this.toggleModal.bind(this)} ><i className="fa fa-bars" aria-hidden="true" ></i></button></div>
                <div className="w3-cell w3-center w3-padding w3-margin-right"><a href="#main" name="index"><img src={supreme} alt="SUPREME ENTERPRISES" className="w3-padding w3-center" style={{"width":"300px"}} /></a></div>
                <div className="w3-cell w3-hide-small w3-hide-medium w3-bar w3-cell-middle w3-xlarge w3-padding-large" style = { {fontFamily: " 'Gamja Flower', cursive "} } >
                    <a href="#contact" className="w3-bar-item w3-button w3-right">Contact us</a>
                    <a href="#products" className="w3-bar-item w3-button w3-right">Products</a>
                    <a href="#about" className="w3-bar-item w3-button w3-right">About Us</a>
                </div>
                <div className={"w3-modal w3-animate-opacity "+ show} >
                    <div className="w3-modal-content w3-card-2">
                        <header className="w3-container w3-black"> 
                            <span className="w3-button w3-large w3-display-topright w3-hover-black" onClick={this.toggleModal.bind(this)} >&times;</span>
                            <h2 className="w3-center" style={menuStyle} >Menu</h2>
                        </header>
                        <div className="w3-container w3-bar-block w3-xlarge w3-padding-large w3-center" style = { {'fontFamily': " 'Gamja Flower', cursive "} } >
                            <a href="#about"  onClick={this.toggleModal.bind(this)} className="w3-bar-item w3-button">About Us</a>
                            <a href="#products" onClick={this.toggleModal.bind(this)} className="w3-bar-item w3-button">Products</a>
                            <a href="#contact" onClick={this.toggleModal.bind(this)} className="w3-bar-item w3-button">Contact Us</a>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}