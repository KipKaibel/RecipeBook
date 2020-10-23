import React, {Component} from "react";
import {render} from "react-dom";
import { withRouter } from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Home from './../body/Home';
import Signin from './../body/Signin';
import Signup from './../body/Signup';

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            isUserAuthenticated: true,
        }

    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <hr />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => {
                                    return (
                                        this.state.isUserAuthenticated ?
                                            <Redirect to="/home" /> :
                                            <Redirect to="/sign-in" />
                                    )
                                }}
                            />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/sign-in" component={Signin} />
                            <Route exact path="/sign-up" component={Signup} />                           
                        </Switch>
                    </div>
                </Router>               
                {/* <Header />
                <Route path ='/home' component = {Home} />
                <Route path ='/' exact component = {Signup} />
                <Route path ='/sign-up' component ={Signup} />
                <Route path ='/sign-in' component ={Signin} /> */}
            </div>
        );
    }
}

export default withRouter(Layout);