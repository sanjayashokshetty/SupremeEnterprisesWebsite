import React from 'react';
import '../index.css';
import '../w3css.css';
import textFont from '../styles/textfont.js';
import headFont from '../styles/headfont.js';

// All the products 
import waterlevel from '../images/products/waterlevel.jpeg'; 
import purifier from '../images/products/purifier.jpeg';
import softner from '../images/products/softner.jpeg';
import thumb from '../images/products/thumb.jpeg';
import vediodoor from '../images/products/vediodoor.jpeg';
import cctvset from '../images/products/cctvset.jpeg';

// var sigList = [
//     {sig : controller, name: 'Water Level Controller', link : ''},
//     {sig : purifier, name: 'Purifier' , link : ''},
//     {sig : softner, name: 'Softner' , link : ''}
// ]

var imgStyle = {
    height: '30vh',
    maxHeight: '400px',
    maxWidth:'350px'
}

var newtextfont = Object.assign({ maxWidth: '100%', overflowX: 'hidden'},textFont);
newtextfont.height = '80%';
function Products(props){
        return(
            <div className="w3-card" style={{minHeight:'500px'}} >
                <h1 className="w3-center w3-margin w3-jumbo" style={headFont} > <b> Products </b></h1>
                <div className="w3-row w3-mobile">
				<div className="w3-col w3-light-grey w3-card m6 l8 w3-margin" style={{"maxWidth":"400px","height":"500px"}}>
					<h1 className=" w3-margin">Water Level Controller</h1>
                    <img className="w3-margin" src={waterlevel} style={imgStyle}/>
					<p className="w3-margin">Automatically stops water overflow from tanks</p> 
				</div>
                <div className="w3-col w3-light-grey w3-card m6 l8 w3-margin" style={{"maxWidth":"400px","height":"500px"}}>
					<h1 className=" w3-margin">Water Purifier</h1>
                    <img className="w3-margin" src={purifier} style={imgStyle}/>
					<p className="w3-margin">Aquastar Water purifier Make your water 100% pure and healthy from water burn diesease.</p> 
				</div>
                <div className="w3-col w3-light-grey w3-card m6 l8 w3-margin" style={{"maxWidth":"400px","height":"500px"}}>
					<h1 className=" w3-margin">Water Softner</h1>
                    <img className="w3-margin" src={softner} style={imgStyle}/>
					<p className="w3-margin">Make hard water soft in your home.<br/>Pentair water softners rreduce hardness in water by exchanging salts of calcium and magnesium with sodium.The water softners help in generating leather to provide superior and brighter washing.</p> 
				</div>
                <div className="w3-col w3-light-grey w3-card m6 l8 w3-margin" style={{"maxWidth":"400px","height":"500px"}}>
					<h1 className=" w3-margin">CCTV camera</h1>
                    <img className="w3-margin" src={cctvset} style={imgStyle}/>
					<p className="w3-margin">CCTV secure your home,office with hikvision.The smart playback function provides wasy way to get through the less effective information when you select the smart playback mode the system will analyse the vedio containing the motion make it with green colour and play it in normal.</p> 
				</div>
                <div className="w3-col w3-light-grey w3-card m6 l8 w3-margin" style={{"maxWidth":"400px","height":"500px"}}>
					<h1 className=" w3-margin">Vedio Door Security</h1>
                    <img className="w3-margin" src={vediodoor} style={imgStyle}/>
					<p className="w3-margin">Hands free vedio intercommunication support monitoring the door station and the external analog camera,Outdoor door station self adaptive IR suppliment one touch calling PIN hole camera with 720*576 unblock controlling.</p> 
				</div>
                <div className="w3-col w3-light-grey w3-card m6 l8 w3-margin" style={{"maxWidth":"400px","height":"500px"}}>
					<h1 className=" w3-margin">Biometric attendence</h1>
                    <img className="w3-margin" src={thumb} style={imgStyle}/>
					<p className="w3-margin">Restrict unauthorised entry secure sensitive areas.It controls access based on user zone and time.Get realtime notification on exceptions.Integrates fire alarm and other devises for better safety.</p> 
				</div>
			</div>    
            </div>        
        )
}

export default Products;