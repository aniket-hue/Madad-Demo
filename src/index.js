import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'
import Theme from './Components/Theme'
import Homepage from './views/Homepage/Homepage'
import Header from './Components/Header/Header'
import { Route } from 'react-router'
import Login from './views/Login/Login'
import { BrowserRouter, Switch } from 'react-router-dom'
class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <ThemeProvider theme={Theme}>
                    <Header />
                    <Switch>
                        <Route exact path="/Madad-Demo/Home" component={Homepage} />
                        <Route exact path="/Madad-Demo/Log-in" component={Login} />
                    </Switch>
                </ThemeProvider>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <Root />
    ,
    document.getElementById('root')
)