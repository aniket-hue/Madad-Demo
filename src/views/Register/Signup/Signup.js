import React, { Component } from 'react'
import Input from '../../../Components/Form Input/Forminput'
import { Button } from 'reactstrap'
class Signup extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
    }

    changeHandle = (event) => {
        this.state({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <div className="container pr-5 pl-5">
                <div className="mb-5 mt-5 " >
                    <h1 style={{fontSize:"4rem", color:"#305868"}}>Sign Up</h1>
                </div>
                <Input
                    placeholder="Enter your name"
                    value={this.state.email}
                    type="text"
                    name="name"
                    label="Name"
                    changed={this.changeHandle}
                />
                <Input
                    placeholder="Enter your email"
                    value={this.state.email}
                    type="text"
                    name="email"
                    label="Email"
                    changed={this.changeHandle}
                />
                <Input
                    placeholder="Enter your password"
                    value={this.state.password}
                    type="password"
                    label="Password"
                    name="password"
                    changed={this.changeHandle}
                />
                <Input
                    placeholder="Enter confirm password"
                    value={this.state.password}
                    type="password"
                    label="Confirm Password"
                    name="password"
                    changed={this.changeHandle}
                />
                <button
                    type="button"
                    class="btn btn-outline-primary">Sign Up</button>
            </div>
        )
    }
}
export default Signup