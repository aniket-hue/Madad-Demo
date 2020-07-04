import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpeg'
class Header extends Component {
    state = {
        show: false,
        currentScrollHeight: 100,
    }
    componentDidMount() {
        window.onscroll = () => {
            const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
            if (this.state.currentScrollHeight != newScrollHeight) {
                this.setState({ currentScrollHeight: newScrollHeight })
            }
        }
    }
    render() {
        const opacity = Math.min(100 / this.state.currentScrollHeight  , 1)
        const show = (this.state.show) ? "show" : "";
        return (
            <div className="page-main-header">
                <nav className='navbar navbar-expand-lg navbar-light bg-white fixed-top' style={{ background: "", opacity: opacity }}>
                    <div className="container-fluid">
                        <div className="logo-wrapper text-right navbar-brand " >
                            <img style={{ width: "100%", maxHeight: "70px" }} src={logo} />
                        </div>
                        <button onClick={() => (this.setState({ show: !this.state.show }))} class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div id="navbarSupportedContent"  className={"collapse navbar-collapse justify-content-end mr-5 " + show}>
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <Link style={{ fontFamily: "Raleway", fontWeight: "700" }} className="nav-link text-black ml-5" to="/Madad-Demo">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <a style={{ fontFamily: "Raleway", fontWeight: "700" }} href="#" className="nav-link text-black ml-5">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{ fontFamily: "Raleway", fontWeight: "700" }} href="#" className="nav-link text-black ml-5">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <span style={{ fontFamily: "Raleway", fontWeight: "700" }} href="#" className="nav-link text-black ml-5">|</span>
                                </li>

                                <li className="nav-item">
                                    <Link style={{ fontFamily: "Raleway", fontWeight: "700", color: "#c7c5c6" }} to="/Madad-Demo/login" className="nav-link ml-5">Log In</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
        );
    }
}
export default Header;