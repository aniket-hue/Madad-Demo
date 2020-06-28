import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'
import Theme from './Components/Theme'
import Homepage from './views/Homepage/Homepage'
class Root extends Component {
    render() {
        return (
            <ThemeProvider theme={Theme}>
                <Homepage />
            </ThemeProvider>
        )
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
)