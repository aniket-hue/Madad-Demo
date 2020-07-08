import React, { Component } from 'react'
import Input from '../../../Components/Form Input/Forminput'
import { Link } from 'react-router-dom'
import axios from 'axios'
class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleLogin = async () => {
        const token = await axios.post(`http://localhost:8000/api-token-auth/username=${this.state.email}password=${this.state.password}`)
        console.log(token)
        if (token) {
            alert('Login Success')
        }
        else {
            alert('Wrong Details')
        }
    }
    changeHandle = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <div className="mb-5 mt-5 p-5 text-center container-fluid"
                    style={{ background: "#ff5757" }}>
                    <h2 style={{
                        fontSize: "calc(2.16vw + 3rem)",
                        fontWeight: "400",
                        color: "white"
                    }}>Log in</h2>
                </div>
                <div className="container pr-5 pl-5 ">
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
                    <button
                        onClick={() => this.handleLogin()}
                        type="button"
                        className="p-3"
                        style={{ background: "black", border: "0", color: "white", fontSize: "1rem" }}
                    >Log In</button>
                    <Link to="/Madad-Demo/signup" className="ml-5 text-black-50">Register Here !</Link>
                </div>
            </div>
        )
    }
}
export default Login