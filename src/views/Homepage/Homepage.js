import React, { Component } from 'react'
import classes from './Homepage.module.css'
import { Row } from 'reactstrap'
import Button from '../../Components/Button/Button'
import { Animated } from "react-animated-css";
import Image from '../../assets/about.jpg'
import AOS from 'aos'
import { data, data2 } from './data'
import 'aos/dist/aos.css';
import help from '../../assets/help.svg'
import Footer from '../../Components/Footer/Footer';
import Harsh from '../../assets/harsh.jpg'
class Homepage extends Component {
    state = {
        show: false
    }
    componentDidMount() {
        AOS.init({
            duration: 400
        })
    }
    render() {

        const items =
            data.map((data, index) =>
                (index >= 3 ?

                    <div data-aos="fade-in" className="col-md-4 col-sm-6 col-xs-6 mb-5" >
                        <div className="w-25 h-50 d-inline-block mb-4">
                            <img width="100%" src={data.img} />
                        </div>
                        <h3 style={{ fontFamily: "Raleway" }}>{data.heading}</h3>
                        <p style={{ fontFamily: "Raleway" }}>{data.text}</p>
                    </div>
                    : null)
            )

        return (
            <React.Fragment>
                <div style={{ width: "100%" }} className={`${classes.container} container-fluid mt-5`}>
                    <div className="d-inline-block ml-5 mt-5">
                        <Animated animationIn="fadeIn"
                            animationOut="fadeOutLeft">
                            <h1
                                style={{
                                    fontSize: "4rem",
                                    color: "White",
                                    fontFamily: "Raleway"

                                }}>आ म नभर भारत</h1>
                        </Animated>
                        <h5 className="text-white" style={{ textShadow: "1px 1px gray" }}>
                            Our dream is to see India helping India
                        </h5>
                    </div>
                </div>
                <div className="container text-center py-5">
                    <h2 className="text-black mb-5" style={{ fontWeight: "700", fontFamily: "Raleway" }}>What do we do?</h2>
                    <Row>
                        <div className="col-lg-6 col-md-6 mb-4 ">
                            <img width="50%" src={help} />
                        </div>
                        <div className="col-lg-6 col-md-6 agile-abt-info text-left">
                            <span style={{ fontWeight: "500", fontSize: "2rem" }}>
                                "आ म नभर भारत"
                            </span>
                            <p style={{ fontFamily: "Open Sans, sans-serif", lineHeight: "1.5" }}>

                                We are the one stop solution for your problems
                                we will provide you our valuable connections so that you can solve your
                                problems. You just need to tell us about your problem and our team will
                                response you in seconds. Yes that's how easy it is.
                            </p>
                            <Button name="Read more" />
                        </div>
                    </Row>
                </div>
                <div className="container-fluid p-1" style={{ background: "#dc3545" }}>
                    <div className="d-flex justify-content-between m-5 flex-wrap" >
                        {data2.map(data => (
                            <div data-aos="fade-up" className="text-center mb-5" >
                                <div className="w-25 h-50 d-inline-block mb-4" >
                                    <img width="100%" src={data.img} />
                                </div>
                                <div>
                                    <h3 style={{ fontFamily: "Raleway" }}>{data.heading}</h3>
                                </div>
                                <br />
                                <div>
                                    <p className="text-white">{data.text}</p>
                                </div>
                            </div>
                        ))
                        }

                    </div>
                </div>
                <div className="container-fluid text-center mt-5 mb-5">
                    <h2 className="text-black mb-5" style={{ fontWeight: "700", fontFamily: "Raleway" }}>Our Services</h2>
                    <div className="row">
                        {data.map((data, index) =>
                            (index < 3 ?
                                <div data-aos="fade-in" className="col-md-4 col-sm-6 col-xs-6 mb-5" >
                                    <div className="w-25 h-50 d-inline-block mb-4">
                                        <img width="100%" src={data.img} />
                                    </div>
                                    <h3 style={{ fontFamily: "Raleway" }}>{data.heading}</h3>
                                    <p style={{ fontFamily: "Raleway" }}>{data.text}</p>
                                </div> : null)

                        )
                        }
                    </div>
                    {this.state.show && <div className="row">
                        {items}
                    </div>}
                    <Button name={this.state.show ? "Show Less" : "Show More"} clicked={() => (this.setState({ show: !this.state.show }))} />
                </div>
                <div className="container h-100">
                    <h2
                        className={`text-black ${classes.our_team}  mb-5 p-2`}
                        style={{ fontWeight: "700", fontSize: "3rem", fontFamily: "Raleway", color: "#ff7876" }}>
                        Our Team
                    </h2>
                    <Row>
                        <div className="col">
                            <img className="w-75" src={Harsh} width="100%" />
                        </div>
                        <div className="col">
                            <span style={{ fontFamily: "Raleway" }}>
                                “MADAD – INDIA helping INDIA” was founded by Harsh Saxena.
                                A simple middle-class person who always dreamt of being the first
                                and best mover in the business that should impact everybody’s life,
                                but in real life, it seems difficult because in the family of engineers
                                and government servants, he wanted to do business but like every
                                typical middle-class family they asked him to focus on study and
                                job.However, he made some decisions that quite justified above are
                                written statements; at least for him like in the family of Engineer he
                                chooses to do a management degree from Guru Gobind Singh Inderprastha University,
                                Delhi (although he was an average student) then he started from customer care
                                executive to Data analyst in E-commerce giant while he was doing good at his job on
                                one D-day he again took a decision that gives his whole family a bomb blast situation,
                                however he was determined so his family ended up supporting him however like every
                                other entrepreneur he was not having any idea what will he do but he was sure he will
                                do something.So his friend “Madad” him by guiding and motivating him to start his
                                entrepreneurial journey by Paper cup manufacturing business then RO water
                                distribution business. Everything was going well, but he was missing one thing in his
                                life, i.e. To be the first &amp; best mover and a unique idea.<br /><br />
                                <span style={{ fontWeight: "700" }}>CEO & Founder - Harsh Saxena</span>
                            </span>
                        </div>
                    </Row>
                </div>
                <Footer />
                {/* <Slider /> */}

            </React.Fragment>
        )
    }
}
export default Homepage