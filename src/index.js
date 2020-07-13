import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './views/Homepage/Homepage'
import Header from './Components/Header/Header'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import Index from './views/Register';
import AboutUs from './views/About Us/AboutUs';
import Contact from './views/Contact Us/Contactus';
import Service from './views/Service/Service';
import Whowe from './views/WhoWeAre/whowe'
class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/Madad-Demo" component={Homepage} />
                        <Route exact path="/Madad-Demo/login" component={Index} />
                        <Route exact path="/Madad-Demo/signup" component={Index} />
                        <Route exact path="/Madad-Demo/about" component={AboutUs} />
                        <Route exact path="/Madad-Demo/contact" component={Contact} />
                        <Route exact path="/Madad-Demo/service" component={Service} />
                        <Route exact path="/Madad-Demo/whoweare" component={Whowe} />
                    </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
)