import React, { Component } from 'react'
import { withStyles, Box, Typography } from '@material-ui/core'
import Logo from '../../assets/Logo.png'
import Twitter from '../../assets/twitter.svg'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
const styles = theme => ({
    footer: {
        background: "black",
        textAlign: "center",
    },
    icons: {
        width: "2em",
    },
    h3: {
        fontFamily: "Raleway",
        color: "white",
        fontWeight: "400",
        fontSize: "1.1rem",
        marginBottom: "25px"
    }
})
class Footer extends Component {
    render() {
        const { classes } = this.props
        return (
            <Box className={classes.footer}>
                <Box padding="20px 500px 5px">
                    <h3 className={classes.h3}>© Madad 2020. All rights reserved.</h3>
                    <Box display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        padding="0 20px"
                        marginBottom="20px">
                        <img className={classes.icons} src={Twitter} />
                        <img className={classes.icons} src={Facebook} />
                        <img className={classes.icons} src={Instagram} />
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default withStyles(styles)(Footer)