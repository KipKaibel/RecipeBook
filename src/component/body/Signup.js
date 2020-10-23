import Axios from 'axios';
import React, { Component } from 'react';

class Signup extends Component {

    state = {
        user: {
            fName: '',
            lName: '',
            email: '',
            password: '',
        }
    }
    signup = () => {
        Axios.post('http://localhost:8080/submitUserDetails',this.state.user)
        .then(response => {
            this.props.history.push('/home');
        }).catch(error => {

        });
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempUser = {...this.state.user};
        tempUser[name] = value;
        this.setState(
            {
                user:tempUser
            }
        );
    }
    render() {
        return (
            <div>
                <div>
                    <body className="text-center">
                        <form className="container">
                            <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                            <h1 className="h3 mb-3 font-weight-normal">Register Today!</h1>
                            <label name="email" for="inputEmail" className="sr-only">Email address</label>
                            <input value={this.state.user.email} onChange={this.handleChange} name="email" type="email" id="inputEmail" className="form-control" placeholder="Email Address" required autofocus></input>
                            <label name="password" for="inputPassword" className="sr-only">Password</label>
                            <input value={this.state.user.password} onChange={this.handleChange} name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                            <label name="fName" for="inputfName" className="sr-only">First Name</label>
                            <input value={this.state.user.fname} onChange={this.handleChange} name="fName" type="fName" id="inputfName" className="form-control" placeholder="First Name" required ></input>
                            <label name="lName" for="inputlName" className="sr-only">Last Name</label>
                            <input value={this.state.user.lname} onChange={this.handleChange} name="lName" type="lName" id="inputlName" className="form-control" placeholder="Last Name" required ></input>
                            <button onClick={this.signup} className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                            <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
                        </form>
                    </body>
                </div>
            </div>
        );
    }
}

export default Signup;