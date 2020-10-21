import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mainpage from './Mainpage/Mainpage';
import Projects from './Projects/Projects';


const Main = () => (
    <Router>
    <Switch>
    <Route exact path="/" component={Mainpage} />
    <Route exact path="/projects" component={Projects} />
    </Switch>
    </Router>
)

export default Main;
