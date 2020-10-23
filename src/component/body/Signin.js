import Axios from 'axios';
import React, { Component } from 'react';
import Home from './../body/Home';
import  { Redirect } from 'react-router-dom';


class Signin extends Component {
 
    state = {
        user: {
            email: '',
            password: '',
        }
    }

    

    signin = () =>
    Axios.post('http://localhost:8080/login', this.state.user)
    .then(response => {
       this.props.history.push('/Home');
    }).catch(error => {

    });
    render() {

        return <div>
                <body className="text-center">
                    <form className="form-signin">
                        <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus></input>
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required ></input>
                        <div className="checkbox mb-3">
                            <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button onCLick={this.signin} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <script> alert("Hello")</script>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
                    </form>
                </body>
            </div>
        
    }
}

export default Signin;