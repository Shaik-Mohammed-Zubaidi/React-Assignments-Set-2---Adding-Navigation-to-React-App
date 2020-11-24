import React, {Component} from "react";
import '../styles/App.css';
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import Redirect from "react-router-dom/Redirect";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import LocationDisplay from "./LocationDisplay";
import {Link} from "react-router-dom";

class App extends Component {
    render() {
        return(
            <div id="main">
                <Switch>
                    <Route path='/about' component={About}/>
                    <Route path='/NoMatch' component={NoMatch}/>
                    <Route path='/' exact component={Home}/>
                    <Redirect to='/NoMatch'/>
                </Switch>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <LocationDisplay pathname={pathname}/>
            </div>
        )
    }
}

export default App;
