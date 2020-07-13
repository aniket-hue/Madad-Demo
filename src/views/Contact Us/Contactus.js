import React, { Component } from 'react'
import Footer from '../../Components/Footer/Footer'
import FA from 'react-fontawesome'
import { Link } from 'react-router-dom'
class Contact extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid mt-5" style={{ height:"40vw"}}>
					<div style={{ textAlign: "center" }}>
						<span style={{ color: "#353535", fontWeight: "700", fontSize: "10vw" }}>hello!</span>
					</div>
					<div className="container">
						<div className="container">
							<span
								style={{ fontFamily: "Raleway" }}
							>
								Give us a call at <span style={{fontWeight:"700", background:"black", color:"white", padding:"1px"}}>+91-8010-101-010</span>. Calling is best for urgent issues that need immediate attention—our phone
								lines are open from 6 am to 4 pm PT (9 am to 7 pm ET) on business days,
								and from 7 am to 2 pm PT (10 am to 5 pm ET) on Saturdays.
								Our phone lines are closed on holidays and Sundays.
							</span>
						</div>
						<div className="container">
							<div className="d-inline-flex justify-content-between mt-5">
								<a href="https://www.instagram.com/callmadad" target="__blank">
									<FA
										name="instagram"
										size="3x"
										style={{ marginRight: "50px" }}

									/>
								</a>
								<a href="https://facebook.com/callmadad" target="__blank">
									<FA
										name="facebook"
										size="3x"
										style={{ marginRight: "50px" }}
									/>
								</a>
								<a target="__blank">
									<FA
										style={{ marginRight: "50px" }}
										name="youtube"
										size="3x"
									/>
								</a>
								<a href="https://facebook.com/callmadad" target="__blank">
									<FA
										name="linkedin"
										size="3x"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		)
	}
}

export default Contact