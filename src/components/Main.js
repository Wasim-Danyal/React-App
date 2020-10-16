import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mainpage from './Mainpage';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => (
    <Router>
    <Switch>
    <Route exact path="/" component={Mainpage} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
    </Switch>
    </Router>
)

export default Main;
