import React from 'react'
import classes from '../../assets/root.module.css'
import { Row } from 'reactstrap';
import Footer from '../../Components/Footer/Footer'
import { motion } from 'framer-motion';
class AboutUs extends React.Component {
    render() {
        const style = {
            lineHeight:"1.5"
        }
        return (
            <React.Fragment>
                <div className="container h-100 mt-5">
                    <motion.h2
                        initial={{scale:0}}
                        animate={{scale:1}}
                        className={`text-black text-center mb-5 p-2`}
                        style={{ fontWeight: "400", fontSize: "4rem", fontFamily: "Raleway" }}>
                        How we Started!
                    </motion.h2>
                    <Row>
                        <div className="container mt-3">
                            <div className="text-center mb-5">
                                <h2 style={{fontFamily:"Raleway"}}>
                                    <pre>
                                        Turned Pandemic into Opportunity.<br/>
                                        Time has changed, things has changed
                                        SO AS WE
                                    </pre>
                                </h2>
                            </div>
                            <div className="container">
                                <p style={{lineHeight:"1.9", fontFamily:"Raleway"}}>
                                    The story began when the Covid-19 Pandemic hit our world when the world was facing recession and inflation,
                                    People became jobless even after having the skills, degree, and everything. People were going through mental trauma and serious depression, but there was no one who can help them.
                                    The same tragedy hit our Founder {`&`} CEO, Mr. Harsh Saxena, as well because his business went down, and he had to move to his hometown. He was surviving only on his savings.
                                    One fine day when our Founder was thinking about the current situation, he thought that he has friends and family support,
                                    but what about them who don’t have anyone for help.
                                    He thought there should be a service that could help people with any type of problem from day-to-day chores to technical and financial help to their mental health.
                                    After that, he shared this IDEA with his friend, who also believed that this was the need of the hour, and then he decided to build WORLD’S FIRST MADE IN INDIA – HELPLINE FOR EVERY SINGLE MATTER with a motto that no matter is small.. just talk!!!
                                </p>
                            </div>
                            <div className="container mt-3">
                                <h3 style={{fontFamily:"Raleway"}}>Why named MADAD and slogan INDIA Helping INDIA?</h3>
                                <p style={{lineHeight:"1.9", fontFamily:"Raleway"}}>
                                    The story behind the title <em><strong> “MADAD- INDIA helping INDIA” </strong></em><br/>
                                    Because there could not be a more perfect name and slogan that could suit our nature of business.<br/><br/>
                                    Our platform lets the people of INDIA help each other and make a great nation together however our Founder took MADAD (help) from her fiancée.
                                    She, after considering the nature and motive behind the business, suggested this title.
                                </p>
                            </div>
                        </div>
                    </Row>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
export default AboutUs;