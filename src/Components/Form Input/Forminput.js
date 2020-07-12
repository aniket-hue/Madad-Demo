import React from 'react'
import classes from '../../assets/root.module.css'
const input = (props) => {
    return (
        <React.Fragment>
            <div className="d-flex flex-column mb-5" style={{ maxWidth: "20em" }}>
                <label
                    className={`mb-3 ${classes.custom_label}`}
                    style={{
                        fontWeight: "200",
                        fontSize: "1.5rem",
                        fontFamily: "Raleway"
                    }}>
                    {props.label}
                </label>
                <input
                    style={{
                        border: "1px solid black",
                        padding: "10px",
                        fontFamily: "Raleway"
                    }}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.change}
                    name={props.name}
                />
            </div>
        </React.Fragment >
    )
}
export default input