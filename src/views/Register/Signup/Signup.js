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
            <div className="container-fluid p-0">
                <div className="mb-5 mt-5 p-5 "
                    style={{ background: "#ff5757" }}>
                    <h2 style={{
                        fontSize: "calc(2.16vw + 3rem)",
                        fontWeight: "400",
                        color: "white"
                    }}>Sign Up</h2>
                </div>
                <div className="row m-0 pr-5 pl-5">
                    <div className="col-xl-6 col-xs-12 col-md-6">
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
                    </div>
                    <div className="col-xl-6 col-xs-12 col-md-6">
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
                    </div>
                    <div className="col-xl-12 col-xs-12 col-md-12">
                        <button
                            type="button"
                            className="p-3"
                            style={{ background: "black", border: "0", color: "white", fontSize: "1rem" }}
                        >
                            Sign Up
                    </button>
                    </div>
                </div>
            </div >
        )
    }
}
export default Signup