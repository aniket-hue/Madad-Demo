import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import displayImage from '../../assets/demo_image.svg'
import bg from '../../assets/back.jpeg'
import { withStyles, Box, Fade } from '@material-ui/core'
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
import { Carousel } from 'react-bootstrap'
const styles = theme => ({
    back: {
        height: "100%",
        background: `url(${bg}) no-repeat`,
        backgroundSize: "100%",
        paddingTop: "100px",
        display: "flex",
        alignItem: "flex-end"
    },
    display: {
        // marginTop:"4px"
        height: "auto"
    },
    body: {
        padding: "40px 10px",
        textAlign: "center"
    },
    h3: {
        fontSize: "3rem",
        fontFamily: "Raleway",
        fontWeight: "300",
        color: "#0d3885"
    },
    card: {
        padding: "70px",
        marginTop: "30px",
        border: "1px solid #ecf4fe",
        background: "#ecf4fe",
        borderRadius: "10px"
    },
    container: {
        background: "white",
        padding: "20px",
        marginTop: "20px",
        marginBottom: "20px"
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
        background: `url(${cardbg}) no-repeat`,
        backgroundSize: "50%",
        backgroundPosition: "center",
        marginBottom: "10px"

    },
    helpText: {
        fontFamily: "Raleway",
        fontSize: "1rem",
        fontWeight: "200"
    },
    link: {
        textDecoration: "none",
        color: "black",
        '&:hover': {
            color: "#3764eb",
        }
    }
})
class Homepage extends Component {
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <Header />
                <div className={classes.back}>
                    <img className={classes.display} src={displayImage} />
                </div>
                <div className={classes.body}>
                    <h3 className={classes.h3}>
                        We are bringing people together to help each other and making our nation great.
                    </h3>


                    <Box display="flex"
                        flexWrap="wrap"
                        justifyContent="space-between"
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
                                <Box className={classes.heading2}>
                                    <div className={classes.svg}>
                                        <img className={classes.serviceImage} src={data.img} />
                                    </div>
                                    <h3 className={classes.heading}>
                                        <span>{data.heading}</span>
                                    </h3>
                                    <p className={classes.helpText}>
                                        <span>{data.text}</span>
                                    </p>
                                    <a href="#" style={{
                                        fontFamily: "Raleway",
                                        fontSize: "1rem",
                                        textDecoration: "none"
                                    }}>Read More</a>
                                </Box>
                            )
                        })
                        }
                    </Box>
                    <Box
                        className={classes.card}
                    >
                        <span className={classes.h3} style={{ color: "#06163a", fontWeight: "500", marginBottom: "20px" }}>Our Services</span>
                        <Box display="flex"
                            flexWrap="wrap"
                            justifyContent="space-between"
                            className={classes.container}>
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
                                    <Box className={classes.heading}>
                                        <div className={classes.svg}>
                                            {/* <Fade> */}
                                            <img className={classes.serviceImage} src={data.img} />
                                            {/* </Fade> */}
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
                            href="#" className={classes.link}>More</a>
                    </Box>
                </div>

                
                <Footer />
            </React.Fragment >
        )
    }
}

export default withStyles(styles)(Homepage);