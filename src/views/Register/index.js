import React from 'react'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Footer from '../../Components/Footer/Footer'
import { withRouter } from 'react-router'
const index = (props) => {
	console.log(props)
	return (<React.Fragment>
		<div className="container-fluid p-0"
			style={{ margin: 0 }}>
			{props.match.path === '/Madad-Demo/login' ?
				<Login /> :
				<Signup />
			}
		</div>
		<Footer />
	</React.Fragment>)
}
export default withRouter(index);