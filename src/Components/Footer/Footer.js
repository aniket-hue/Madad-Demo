import React, { Component } from 'react'
import { withStyles, Box } from '@material-ui/core'
const styles = theme => ({
    footer: {
        background: "#06163a",
        textAlign: "center",
        height: "100px",
        // paddingTop:"50%"
    }
})
class Footer extends Component {
    render() {
        const { classes } = this.props
        return (
            <Box className={classes.footer}>
                <p style={{color:"white", fontFamily:"Raleway"}}>Demo Footer</p>
            </Box>
        )
    }
}

export default withStyles(styles)(Footer)