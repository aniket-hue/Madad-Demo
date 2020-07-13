import React from 'react'
import classes from '../../assets/root.module.css'
import { motion } from 'framer-motion'
const Button = (props) => {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			animate={{ scale: 1 }}
			onClick={props.clicked} className={`${classes.custom_button} p-2`}>
			{props.name}
		</motion.button>
	)
}

export default Button