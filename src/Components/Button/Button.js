import React from 'react'
import classes from './Button.module.css'
import { Animated } from "react-animated-css";

const Button = (props) => {
    return (
        <button type="button" onClick={props.clicked} className={`${classes.button} p-2`}>
            {props.name}
        </button>
    )
}

export default Button