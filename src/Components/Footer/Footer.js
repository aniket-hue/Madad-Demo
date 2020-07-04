import React, { Component } from 'react'
class Footer extends Component {
    render() {
        return (
            <div className=" container-fluid h-100 p-4 mt-5" style={{ background: "black" }}>
                <div className="text-center pt-4" style={{ height: "5em" }}>
                    <h6 className="text-white " style={{letterSpacing:"2px"}}>© Madad 2020. All rights reserved.</h6>
                </div>
            </div>
        );
    }
}

export default Footer