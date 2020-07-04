import React, { Component } from 'react'
import Input from '../../../Components/Form Input/Forminput'
class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    changeHandle = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <div className="container pr-5 pl-5 ">
                <div className="mb-5 mt-5">
                    <h1 style={{ fontSize: "4rem", color: "#305868" }}>Log in</h1>
                </div>
                <Input
                    placeholder="Enter your email"
                    value={this.state.email}
                    type="text"
                    name="email"
                    label="Email"
                    change={this.changeHandle}
                />
                <Input
                    placeholder="Enter your password"
                    value={this.state.password}
                    type="password"
                    label="Password"
                    name="password"
                    change={this.changeHandle}
                />
                <button type="button" class="btn btn-primary mr-4 p-2">Log In</button>
                <button type="button" class="btn btn-danger p-2">Sign in with google</button>
            </div>
        )
    }
}
export default Login