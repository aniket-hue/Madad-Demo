import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './views/Homepage/Homepage'
import Header from './Components/Header/Header'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import Index from './views/Register';
class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/Madad-Demo" component={Homepage} />
                        <Route exact path="/Madad-Demo/login" component={Index} />
                    </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
)