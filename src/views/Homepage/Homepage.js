import React, { Component } from 'react'
import classes2 from './Homepage.module.css'
import Header from '../../Components/Header/Header'
import classNames from 'classnames'
import displayImage from '../../assets/demo_image.svg'
import bg from '../../assets/back.jpg'
import { withStyles, Box, Container, Grid } from '@material-ui/core'
import cardbg from '../../assets/cardbg.svg'
import hospital from '../../assets/hospital.svg'
import depression from '../../assets/depression.svg'
import electrician from '../../assets/electrician.svg'
import ngo from '../../assets/ngo.svg'
import medicine from '../../assets/medicine.svg'
import cooking from '../../assets/cooking.svg'
import architect from '../../assets/architect.svg'
import flights from '../../assets/flights.svg'
import banking from '../../assets/banking.svg'
import consultancy from '../../assets/consultant.svg'
import experts from '../../assets/experts.svg'
import trial from '../../assets/trial.svg'
import Footer from '../../Components/Footer/Footer'
import Harsh from '../../assets/harsh.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const styles = theme => ({
    bg: {
        width: "700px"
    },
    display: {
        height: "auto"
    },
    body: {
        textAlign: "center",
        padding: "0",
        margin: "0",
        width: "100%"
    },
    h3: {
        fontSize: "2.4rem",
        fontFamily: "Raleway",
        fontWeight: "700",
        color: "black"
    },
    h5: {
        fontFamily: "Raleway",
        fontSize: "1.5rem",
        fontWeight: "300"
    },
    card: {

    },
    container: {
        background: "#fcf132",
        padding: "3.5em",
        verticalAlign: "middle"
    },
    svg: {
        margin: "10px"
    },
    serviceImage: {
        width: "60px",
        height: "60px",
    },
    heading: {
        fontFamily: "Raleway",
        fontSize: "2rem",
        fontWeight: "300",
        flexBasis: "33.33%",
        marginBottom: "10px"

    },
    heading2: {
        fontFamily: "Raleway",
        fontSize: "2rem",
        fontWeight: "300",
        flexBasis: "33.33%",
        marginBottom: "10px",

    },
    helpText: {
        fontFamily: "Raleway",
        fontSize: "1rem",
        fontWeight: "200"
    },
    link: {
        textDecoration: "none",
        color: "black",
    },
    about: {
        background: "#bbbbb5",
        marginTop: "4em"
    },
    ourTeam_img: {
        padding: "100px",
    },
    img_harsh: {
        width: "500px"
    }
    ,
    ourTeam_about: {
        fontFamily: "Raleway",
        padding: 0,
        margin: 0,
        fontWeight: "600",
        color: "#1b1b1c"

    }
})
class Homepage extends Component {
    componentDidMount() {
        AOS.init({
            duration: 400
        })
    }
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                    <Box width="640px" paddingLeft="50px">
                        <span className={classes.h3}>
                            Why MADAD and "INDIA Helping INDIA" ?<br />
                        </span>
                        <span className={classes.h5}>
                            Because there cannot be a more perfect name and slogan that can suit our nature of
                            business. Our platform is letting the people of INDIA help each other and make a
                                great nation together.<br /><br />
                                With a Dream of <span style={{ fontWeight: 600 }}>आ म नभर भारत</span>,
                                We would like to Introduce our World's
                                First "Made in INDIA" One stop solution
                                for all the INDIANS for all their Problems.
                        </span>
                    </Box>
                    <Box width="700px" style={{ background: `url(${bg})`, backgroundSize: "cover" }}>
                    </Box>
                </Box>
                <div className={classes.body}>
                    <Box display="inline-flex"
                        flexWrap="wrap"
                        width="100%"
                        className={classes.container}>
                        {[{
                            img: experts,
                            heading: "Experts",
                            text: "We will provide you experts for your problems"

                        },
                        {
                            img: consultancy,
                            heading: "Consultants",
                            text: "You have an idea? You can consult with us"
                        },
                        {
                            img: trial,
                            heading: "30 Day Free Trial",
                            text: "Just test us.. We will not charge you"
                        }].map(data => {
                            return (
                                <Box data-aos="fade-right" className={classes.heading2}>
                                    <div className={classes.svg}>
                                        <img className={classes.serviceImage} src={data.img} />
                                    </div>
                                    <h3 className={classes.heading}>
                                        <span>{data.heading}</span>
                                    </h3>
                                    <p className={classes.helpText}>
                                        <span>{data.text}</span>
                                    </p>
                                    <a href="#"
                                        style={{
                                            fontFamily: "Raleway",
                                            fontSize: "1rem",
                                            textDecoration: "none",
                                            color: "black"
                                        }}>Read More</a>
                                </Box>
                            )
                        })
                        }
                    </Box>
                    <div
                        className={classes.card}
                    >
                        <Box style={{ background: "#1b1b1c" }} padding="1em" textAlign="left" marginBottom=".8em">
                            <span className={classes.h3} style={{ color: "white", fontWeight: "500", marginBottom: "20px" }}>Our Services</span>
                        </Box>
                        <Box display="flex"
                            flexWrap="wrap"
                            justifyContent="space-between"
                        >
                            {[{
                                heading: "NGO",
                                img: ngo,
                                text: "If you have any complaints or if you want any help tell us!"
                            },
                            {
                                heading: "Hospital",
                                img: hospital,
                                text: "We will connect you with our best doctors"
                            },
                            {
                                heading: "Depression",
                                img: depression,
                                text: "We are here to help answer any questions you might have about mental health. "
                            },
                            {
                                heading: "Electrician",
                                img: electrician,
                                text: "Light up your life with just one click and leave rest up to us!"
                            },
                            {
                                heading: "Cooking",
                                img: cooking,
                                text: "Aspire to be a cook or want to eat some good food. But don't know how ?"
                            },
                            {
                                heading: "Flights",
                                img: flights,
                                text: "Tired of bad flights again and again? Click us and find flights with reasonable price"
                            },
                            {
                                heading: "Banking",
                                img: banking,
                                text: "We can even you with your money and start investing with just one click"
                            },
                            {
                                heading: "Architect",
                                img: architect,
                                text: "New place ? or renovation ? Click Here! "
                            },
                            {
                                heading: "Medicine",
                                img: medicine,
                                text: "Tired of finding medicines around you? Tell us we will find for you"
                            },
                            ].map(data => {
                                return (
                                    <Box data-aos="fade-up" className={classes.heading2}>
                                        <div className={classes.svg}>
                                            <img className={classes.serviceImage} src={data.img} />
                                        </div>
                                        <a href="#" className={classes.link}>
                                            <h3 className={classes.heading}>
                                                <span>{data.heading}</span>
                                            </h3>
                                            <p className={classes.helpText}>
                                                <span>{data.text}</span>
                                            </p>
                                        </a>
                                    </Box>
                                )
                            })}
                        </Box>
                        <a
                            style={{
                                fontFamily: "Raleway",
                                fontSize: "2rem",
                            }}
                            className={classNames(classes2.More, classes.link)}
                            href="#" >More</a>

                    </div>
                </div>
                <Box className={classes.about} >
                    <span
                        
                        style={{
                            color: "white",
                            fontWeight: "600",
                            fontSize: "4rem",
                            fontFamily: "Raleway"
                        }}>
                        Our Team
                    </span>
                    <Box display="flex">
                        <Box className={classes.ourTeam_img}>
                            <img data-aos="fade-right" className={classes.img_harsh} src={Harsh} />
                        </Box>
                        <Box
                            display="flex"
                            paddingTop="100px"
                            textAlign="left"
                            lineHeight="1.5">
                            <Box>
                                <p className={classes.ourTeam_about}>
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
                                    <span style={{ fontWeight: "500" }}>CEO & Founder - Harsh Saxena</span>
                                </p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Footer />

            </React.Fragment >
        )
    }
}

export default withStyles(styles)(Homepage);