import React from 'react';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from './Cart';
import Coursedetail from './Coursedetail';
import {Switch, Route,} from "react-router-dom";

const App= () => {
    return (
        <div>
            <Navbar/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/service" component={Service}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/coursedetail" component={Coursedetail}/>
            <Route exact path="/cart" component={Cart}/>
           </Switch>
           <Footer/>
        </div>
    );
};

export default App;



