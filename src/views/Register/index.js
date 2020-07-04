import React from 'react'
import Login from './Login/Login'
import Signup from './Signup/Signup'
const index = () => (
    <div className="container-fluid">
        <div className="row mb-5 mt-5">
            <div className="col-sm-12 col-md-12 col-xl-6 col-lg-2">
                <Login />
            </div>
            <div className="col-sm-12 col-md-12 col-xl-6 col-lg-2">
                <Signup />
            </div>
        </div>
    </div>
)
export default index;