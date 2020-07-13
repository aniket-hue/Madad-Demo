import React, { Component } from 'react'
class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid p-2 mt-5" style={{ background: "#000000" }}>
                <div className="text-center pt-4" style={{ height: "5em" }}>
                    <h6 className="text-white " style={{letterSpacing:"2px"}}>© Madad 2020. All rights reserved.</h6>
                </div>
            </footer>
        );
    }
}

export default Footer