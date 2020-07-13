import React, { Component } from 'react'
import Footer from '../../Components/Footer/Footer'
import { motion } from 'framer-motion'
class whowe extends Component {
    render() {
        const style = {
            color: "black",
            fontSize: "5rem",
            fontFamily: "Raleway",
        }
        return (
            <>
                <div className="container text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={style}>
                        Who we are?
                        </motion.span>
                </div>
                <div className="container-fluid mt-5 p-5"
                    style={{
                        background: "#f5f5f5",

                    }}
                >
                    <p style={{ fontFamily: "Raleway" }}>
                        Who We Are
                        <strong> “MADAD – INDIA helping INDIA” </strong> was founded by Harsh Saxena.<br />
                        A simple middle-class person who always dreamt of being the first and best mover in the business that should impact everybody’s life, but in real life, it seems difficult because in the family of engineers and government servants, he wanted to do business but like every typical middle-class family they asked him to focus on study and job.However, he made some decisions that quite justified above are written statements; at least for him like in the family of Engineer he chooses to do a management degree from Guru Gobind Singh Inderprastha University, Delhi (although he was an average student) then he started from customer care executive to Data analyst in E-commerce giant while he was doing good at his job on one D-day he again took a decision that gives his whole family a bomb blast situation, however he was determined so his family ended up supporting him however like every other entrepreneur he was not having any idea what will he do but he was sure he will do something.So his friend “Madad” him by guiding and motivating him to start his entrepreneurial journey by Paper cup manufacturing business then RO water distribution business. Everything was going well, but he was missing one thing in his life, i.e. To be the first & best mover and a unique idea. Unfortunately, this COVID-19 pandemic hit him hard and like every other person his business went down being locked in house and while talking to his friends he came to different problems like:
                        “What if there was a helpline for free basic cooking instruction for my trapped bachelor friends who end up eating noodles these days?”
                        “What if there was a helpline for free Career/Job counselling?”“What if there was a help line for older people who are living alone in their home and want some technical help and their children are not giving them time for such small things?”And many scenarios…
                        Then his unique and problem solving idea came into existence which will really change INDIA now then this world.So he moves forward toward his lifelong dream by finding a new solution for some new and some old problems he faced himself. That’s how “MADAD – INDIA helping INDIA” was launched in June 2020 (Part of Revive INDIA Consultant Private Limited).
                </p>
                </div>
                <Footer />
            </>
        )
    }
}

export default whowe