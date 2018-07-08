import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Nav from './components/nav.js'
import Footer from './components/footer.js'
import About from './components/about.js'
import Products from './components/products.js'

var style = {paddingTop:'50px', minHeight:'100vh', position: 'relative', width:'80vw', margin:'auto'};
var style1 = {paddingTop:'100px',paddingBottom: '200px', minHeight:'100vh', position: 'relative', width:'80vw', margin:'auto'};

export default class App extends React.Component{
    render(){
        return(
            <div style={{top:'50px' }}>
                <Nav/>
                 <div className="w3-padding-32" style={{position:'relative', top:'50px' }} >        
                    <div id="about" style={style} ref="about">  
                        <a name="about">
                            <About/>
                        </a>
                    </div>
                    <div id="products" style={style} ref="products">  
                        <a name="products">
                            <Products/>
                        </a>
                    </div>              
                </div>  
                <Footer/> 
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));

