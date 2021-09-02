import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";


// Pages
import MainPage from "./pages/index";
import AboutMe from "./pages/aboutme";
import MyProjects from "./pages/myprojects";
import Recipro from "./pages/recipro";
import Habbit from "./pages/habbit";
import BetterLives from "./pages/betterlives";
import Error from "./pages/404";

class App extends Component{
    render(){
    return (
    <Router>
        <Switch>
            <Route exact path="/" component ={MainPage}/>
            <Route exact path="/aboutme"component={AboutMe} />
            <Route exact path="/projects"component={MyProjects} />
            <Route exact path="/recipro"component={Recipro} />
            <Route exact path="/habbit"component={Habbit} />
            <Route exact path="/betterlives"component={BetterLives} />
            <Route exact path="/404"component={Error} />
            <Redirect to = "/404"/>
        </Switch>

    </Router>
    )
    }

}