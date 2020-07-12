import React, { Component } from 'react'
import Input from '../../../Components/Form Input/Forminput'
import { Button } from 'reactstrap'
class Signup extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        middleName: '',
        lastName: '',
        phone: '',
        category: '',
        academicProof: '',
        Skills: '',
        expertise: '',
        areaOfInterest: '',
        idProof: '',
        addressProof: '',
        address: ''
    }

    changeHandle = (event) => {
        this.setState({ [event.target.name]: event.target.value })
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
                    }}>
                        Sign Up
                    </h2>
                </div>
                <div className="row m-0 pr-5 pl-5">
                    <div className="col-xl-6 col-xs-12 col-md-6">
                        <Input
                            placeholder="Enter your name"
                            value={this.state.name}
                            type="text"
                            name="name"
                            label="Name"
                            change={this.changeHandle}
                        />
                        <Input
                            placeholder="Enter your email"
                            value={this.state.email}
                            type="text"
                            name="email"
                            label="Email"
                            change={this.changeHandle}
                        />
                    </div>
                    <div className="col-xl-6 col-xs-12 col-md-6">
                        <Input
                            placeholder="Enter your password"
                            value={this.state.password}
                            type="password"
                            label="Password"
                            name="password"
                            change={this.changeHandle}
                        />
                        <Input
                            placeholder="Enter confirm password"
                            value={this.state.confirmPassword}
                            type="password"
                            label="Confirm Password"
                            name="confirmPassword"
                            change={this.changeHandle}
                        />
                    </div>
                    <div className="col-xl-6 col-xs-12 col-md-6">
                        <Input
                            placeholder="Middle Name"
                            value={this.state.middleName}
                            type="text"
                            label="Middle Name"
                            name="middleName"
                            change={this.changeHandle}
                        />
                        <Input
                            placeholder="Last Name"
                            value={this.state.lastName}
                            type="text"
                            label="Last Name"
                            name="lastName"
                            change={this.changeHandle}
                        />
                    </div>
                    <div className="col-xl-6 col-xs-12 col-md-6">
                        <Input
                            placeholder="Address"
                            value={this.state.address}
                            type="text"
                            label="Address"
                            name="address"
                            change={this.changeHandle}
                        />
                        <div>
                            <label
                                style={{
                                    fontWeight: "200",
                                    fontSize: "1.5rem",
                                    fontFamily: "Raleway"
                                }}
                                className="mb-3"
                            >ID proof</label>
                            <div className="row pl-3">
                                <div className="col-xs-12">
                                    <input
                                        style={{
                                            border: "1px solid black",
                                            padding: "10px",
                                            fontFamily: "Raleway"
                                        }}
                                        type="text"
                                        placeholder="ID No."
                                        value={this.state.idProof}
                                        onChange={this.changeHandle}
                                        name="idProof"
                                    />
                                </div>
                                <div className="col-xs-12 mt-2 ml-2">
                                    <select
                                        defaultValue="Type"
                                        className=""
                                        style={{
                                            border: "1px solid black",
                                            background: "white",
                                            maxWidth: "6em"
                                        }}
                                    >
                                        <option>PAN Card</option>
                                        <option>Driving Licence</option>
                                        <option>Adhaar Card</option>
                                        <option>Voter ID</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-xs-12 col-md-6">
                        <Input
                            placeholder="Category"
                            value={this.state.category}
                            type="text"
                            label="Wingman Category"
                            name="category"
                            change={this.changeHandle}
                        />
                        <Input
                            placeholder="Your Skills"
                            value={this.state.Skills}
                            type="text"
                            label="Skills"
                            name="Skills"
                            change={this.changeHandle}
                        />
                    </div>
                    <div className="col-xl-6 col-xs-12 col-md-6">
                        <Input
                            placeholder="Your Interest"
                            value={this.state.areaOfInterest}
                            type="text"
                            label="Area Of Interest"
                            name="areaOfInterest"
                            change={this.changeHandle}
                        />
                        <Input
                            placeholder="Academic Proof"
                            value={this.state.academicProof}
                            type="text"
                            label="Academic Proof"
                            name="academicProof"
                            change={this.changeHandle}
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