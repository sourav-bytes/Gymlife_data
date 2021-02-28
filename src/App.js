import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" ;
import "bootstrap/dist/js/bootstrap.bundle" ;
import Navbar from "./Navbar";
import {Switch, Route} from "react-router-dom";
import Home from "./Home";
import Footer from './Footer';
import About from "./About";
import Classes from "./Classes";
import Service from "./Service";
import Team from "./Team";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";

function App() {
    return (
        <>
        <ScrollToTop/>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/classes" component={Classes} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/contact" component={Contact}/>
            </Switch>
            <Footer></Footer>
        </>
    )
}

export default App
