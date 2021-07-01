import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";


// Pages
import MainPage from "./pages/index";
import Error from "./pages/404";

class App extends Component{
    render(){
    return (
    <Router>
        <Switch>
            <Route exact path="/" component ={MainPage}/>
            <Route exact path="/404"component={Error} />
            <Redirect to = "/404"/>
        </Switch>

    </Router>
    )
    }

}