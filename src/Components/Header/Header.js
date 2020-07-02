import React, { Component } from 'react';
import { AppBar, Toolbar, useScrollTrigger, Tab, Tabs, Box, Collapse } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Helpline from '../../assets/helpline.svg';
import classes2 from './Header.module.css'
import classNames from 'classnames'
import { Link, Redirect, withRouter } from 'react-router-dom';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
const styles = theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "1.5em",
    },
    logo: {
        fontSize: "4rem",
        fontFamily: 'Raleway',
        cursor: "pointer",
        color: "#1b1b1c"
    },
    buttonContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        marginLeft: "25px",
        color: "white"
    },
    toolbar: {
        marginRight: "50px"
    },
    contact: {
        background: "#bbbbbb",
        width: "100%",
        paddingLeft: "10px",
        height: "20px",
    },
    support_img: {
        width: "1.4em",
        marginLeft: "25px",
        cursor: "pointer",
        opacity: ".5",
        '&:hover': {
            opacity: ".6"
        }
    },
    contactDetails: {
        color: "black",
        fontSize: ".9rem",
        fontFamily: "Raleway",
        fontWeight: "500"
    },
    appbar: {
        background: "#1b1b1c",
    },
    logo_box: {
        background: "white",
        width: "40%",
        textAlign: "center",
    }
})

class Header extends Component {
    state = {
        page: 0,
        contactShow: false
    }
    pageHandle = (event, value, title) => {
        this.setState({ page: value });
        this.props.history.push(`/Madad-Demo/${event.target.textContent.split(' ').join('-')}`)
        console.log(event.target)
    }
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <ElevationScroll>
                    <div>
                        <AppBar className={classes.appbar}>
                            <Toolbar disableGutters={true} className={classes.toolbar}>
                                <Box className={classNames(classes.logo_box, classes2.logo_box)}>
                                    <span className={classNames(classes.logo, classes2.logo)}>madad</span>
                                </Box>
                                <Tabs onChange={this.pageHandle} value={this.state.page} className={classes.buttonContainer}>
                                    <Tab className={classes.tab} label="Home" title="/" />
                                    <Tab className={classes.tab} label="Services" title="/Log-In" />
                                    <Tab className={classes.tab} label="Bussiness" title="/Log-In" />
                                    <Tab className={classes.tab} label="Log In" title="/Log-In" />
                                    <Tab className={classes.tab} label="About Us" title="/Log-In" />
                                    <img onClick={() => (this.setState({ contactShow: !this.state.contactShow }))} src={Helpline} className={classes.support_img} />
                                </Tabs>
                            </Toolbar>
                            <Collapse in={this.state.contactShow} timeout="auto">
                                <Box className={classes.contact} >
                                    <Box display="inline-flex">
                                        <Box marginRight="10px"><span className={classes.contactDetails}>Contact - +91-XXXXXXXXXX</span></Box>
                                        <span className={classes.contactDetails}>|</span>
                                        <Box marginLeft="10px"><span className={classes.contactDetails}> Email - email@madad.com</span></Box>
                                    </Box>
                                </Box>
                            </Collapse>
                        </AppBar>

                    </div>
                </ElevationScroll>


                <div className={classes.toolbarMargin} />
            </React.Fragment >
        )
    }
}

export default withRouter(withStyles(styles)(Header));
