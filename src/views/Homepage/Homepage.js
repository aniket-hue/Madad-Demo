import React, { Component } from 'react'
import classes from '../../assets/root.module.css'
import { Row } from 'reactstrap'
import Button from '../../Components/Button/Button'
import AOS from 'aos'
import { data, data2 } from './data'
import 'aos/dist/aos.css';
import help from '../../assets/help.svg'
import Footer from '../../Components/Footer/Footer';
import { motion } from 'framer-motion';
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
                    <div
                        style={{ display: this.state.show ? "" : "none" }}
                        data-aos="fade-in" className="col-md-4 col-sm-12 col-xs-12 mb-5" >
                        <motion.div className="w-25 h-50 d-inline-block mb-4">
                            <img width="100%" src={data.img} />
                        </motion.div>
                        <h3 style={{ fontFamily: "Raleway" }}>{data.heading}</h3>
                        <p style={{ fontFamily: "Raleway" }}>{data.text}</p>
                    </div>
                    : null)
            )
        return (
            <React.Fragment>
                {<div style={{ width: "100%" }}
                    className={`${classes.container_first_image_homepage} 
                    container-fluid text-center`}>
                    <motion.div
                        initial={{ y: "-100vw" }}
                        animate={{ y: 0 }}
                        transition={{ type: "tween" }}
                        className="d-inline-block  ml-5 mt-5">
                        <h1
                            style={{
                                fontSize: "5rem",
                                color: "black",
                                fontFamily: 'Rajdhani sans-serif'
                            }}>आत्म निर्भर</h1>
                        <h5
                            className="text-black"
                            style={{ textShadow: "1px 1px gray" }}>
                            Our dream is to see India helping India
                        </h5>
                    </motion.div>
                </div>}
                <div className="container-fluid text-center py-5" style={{ background: "#ebeaeb" }}>
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
                <div className="container-fluid" style={{ background: "#ff5757" }}>
                    <div className="row p-5 text-center">
                        {data2.map(data => (
                            <div data-aos="fade-up" className="col-xs-12 col-md-4" >
                                <div className="d-inline-block mb-4 " >
                                    <img width="100em" src={data.img} />
                                </div>
                                <div>
                                    <h3 style={{ fontFamily: "Raleway" }}>{data.heading}</h3>
                                    <br />
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
                                <motion.div data-aos="fade-in" className="col-md-4 col-sm-6 col-xs-6 mb-5"
                                    whileHover={{
                                        rotateZ: -3,
                                    }}>
                                    <div className="w-25 h-50 d-inline-block mb-4">
                                        <img width="100%" src={`${data.img}`} />
                                    </div>
                                    <h3 style={{ fontFamily: "Raleway" }}>{data.heading}</h3>
                                    <p style={{ fontFamily: "Raleway" }}>{data.text}</p>
                                </motion.div> : null)

                        )
                        }
                    </div>
                    <motion.div
                        className="row"
                        initial={{ height: this.state.show ? "0" : "100%" }}
                        animate={{ height: this.state.show ? "100%" : "0" }}
                        transition={{ type: "spring" }}
                    >
                        {items}
                    </motion.div>
                    <Button
                        name={this.state.show ? "Show Less" : "Show More"} clicked={() => (this.setState({ show: !this.state.show }))} />
                    <div></div>
                </div>
                
                <Footer />
                {/* <Slider /> */}

            </React.Fragment>
        )
    }
}
export default Homepage