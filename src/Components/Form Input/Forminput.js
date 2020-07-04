import React from 'react'
import classes from './FormInput.module.css'
const input = (props) => {
    return (
        <React.Fragment>
            <div className="d-flex flex-column mb-5">
                <label className={`mb-3 ${classes.label}`}>{props.label}</label>
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.change}
                    name={props.name}
                />
            </div>
        </React.Fragment>
    )
}
export default input