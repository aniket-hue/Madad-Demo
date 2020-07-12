import React from 'react'
import Harsh from '../../assets/harsh.jpg';
import classes from '../../assets/root.module.css'
import { Row } from 'reactstrap';
import Footer from '../../Components/Footer/Footer'
class AboutUs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container h-100 mt-5">
                    <h2
                        className={`text-black ${classes.our_team_about_us_heading}  mb-5 p-2`}
                        style={{ fontWeight: "700", fontSize: "3rem", fontFamily: "Raleway", color: "#ff7876" }}>
                        Our Team
                    </h2>
                    <Row>
                        <div className="col-xs-12 col-md-6 mb-5">
                            <img className="w-75" src={Harsh} width="100%" />
                        </div>
                        <div className="col-xs-12 col-md-6">
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
            </React.Fragment>
        )
    }
}
export default AboutUs;