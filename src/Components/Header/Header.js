import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpeg'
import { motion } from 'framer-motion'
import classes from "./Header.module.css";
class Header extends Component {
    state = {
        show: false,
        currentScrollHeight: 100,
    }
    componentDidMount() {

    }
    render() {
        const show = (this.state.show) ? "show" : "";
        return (
            <div className="page-main-header" style={{ zIndex: "1000", }} >
                <motion.nav
                    className='navbar navbar-expand-lg navbar-light bg-white fixed-top'
                >
                    <div className="container-fluid" style={{ opacity: "1" }}>
                        <Link to="/Madad-Demo">
                            <div className="logo-wrapper text-right navbar-brand p-2" style={{ cursor: "pointer", border: "5px solid black" }} >
                                <h1 style={{ fontSize: "1.5", opacity: "1", fontWeight: "700" }}>Madad</h1>
                            </div>
                        </Link>
                        <button onClick={() => (this.setState({ show: !this.state.show }))} class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div id="navbarSupportedContent" className={"collapse navbar-collapse justify-content-end mr-5 " + show}>
                            <ul className="navbar-nav  ">
                                <li className="nav-item ">
                                    <Link style={{ fontFamily: "Raleway", fontWeight: "700" }} className="mt-5-xs nav-link text-black ml-5" to="/Madad-Demo">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <a style={{ fontFamily: "Raleway", fontWeight: "700" }} href="#" className="nav-link text-black ml-5">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{ fontFamily: "Raleway", fontWeight: "700" }} href="#" className="nav-link text-black ml-5">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <span style={{ fontFamily: "Raleway", fontWeight: "700" }} href="#" className="nav-link text-black ml-5 hidden-sm-down">|</span>
                                </li>

                                <motion.li
                                    whileHover={{ borderRadius: "20px" }}
                                    className={`nav-item d-flex pl-3 pr-3 ml-5 ${classes.links}`} type="button">
                                    <Link style={{ fontFamily: "Raleway", fontWeight: "700", color: "white" }} to="/Madad-Demo/login" className="nav-link">Log In</Link>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </motion.nav>
                <div className="mt-5 pt-5"></div>
            </div >
        );
    }
}
export default Header;