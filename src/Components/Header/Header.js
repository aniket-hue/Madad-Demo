import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        const style = {
            color: "white",
            fontSize: "1rem",
            fontFamily: "Raleway",
            fontWeight:"700"
        }
        const show = (this.state.show) ? "show" : "";
        return (
            <>
                <div className="container-fluid text-right" style={{ background: "#c5a1ff" }}>
                    <div className="d-inline-block p-1">
                        <div className="d-inline-block mr-4">
                            <span style={style}>+91-8010-101-010</span>
                        </div>

                        <div className="d-inline-block">
                            <span style={style}>madad@madad.com</span>
                        </div>
                    </div>
                </div>
                <div className="page-main-header" style={{ zIndex: "1000", }} >
                    <motion.nav
                        className='navbar navbar-expand-lg navbar-light'
                    >
                        <div className="container-fluid" style={{ opacity: "1" }}>
                            <Link to="/Madad-Demo">
                                <div className="logo-wrapper text-right navbar-brand p-2" style={{ cursor: "pointer", border: "5px solid black" }} >
                                    <h1 style={{ fontSize: "1.5", opacity: "1", fontWeight: "700" }}>Madad</h1>
                                </div>
                            </Link>
                            <button onClick={() => (this.setState({ show: !this.state.show }))} className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                id="navbarSupportedContent" className={"collapse navbar-collapse justify-content-end mr-5 " + show}>
                                <ul className="navbar-nav  ">
                                    <li className="nav-item ">
                                        <Link style={{ fontFamily: "Raleway", fontWeight: "700" }} className={`mt-5-xs nav-link text-black ml-5 ${classes.link_bottom}`} to="/Madad-Demo">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link style={{ fontFamily: "Raleway", fontWeight: "700" }} className="mt-5-xs nav-link text-black ml-5" to="/Madad-Demo/services">Services <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{ fontFamily: "Raleway", fontWeight: "700" }} to="/Madad-Demo/about" className="nav-link text-black ml-5">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{ fontFamily: "Raleway", fontWeight: "700" }} to="/Madad-Demo/contact" className="nav-link text-black ml-5">Contact Us</Link>
                                    </li>
                                    <li className="nav-item d-none d-md">
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
                </div >

            </>
        );
    }
}
export default Header;