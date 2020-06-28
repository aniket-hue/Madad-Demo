import React, { Component } from 'react'
import { AppBar, Toolbar, useScrollTrigger, Tab, Tabs, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Logo from '../../assets/Logo.png';

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
        marginBottom:"2em"
    },
    logo: {
        width: "18em"
    },
    buttonContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        marginLeft: "25px",
    }
    ,button: {
        ...theme.typography.estimate,
        marginRight: "25px",
        marginLeft: "50px",
        borderRadius: "50px",
        height: "45px",
        color: "white"
    },
    toolbar: {
        marginLeft: "50px",
        marginRight:"50px"
    },
    appbar: {
        paddingTop: "30px",
    }
})

class Header extends Component {
    state = {
        page: 0
    }
    pageHandle = (event, value) => {
        this.setState({ page: value })
    }
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <ElevationScroll>
                    <AppBar className={classes.appbar}>
                        <Toolbar disableGutters={true} className={classes.toolbar}>
                            <img src={Logo} />
                            <Tabs onChange={this.pageHandle} value={this.state.page} className={classes.buttonContainer}>
                                <Tab className={classes.tab} label="Home" />
                                <Tab className={classes.tab} label="Services" />
                                <Tab className={classes.tab} label="Bussiness" />
                                <Tab className={classes.tab} label="Log In" />
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <div className={classes.toolbarMargin} />
            </React.Fragment >
        )
    }
}

export default withStyles(styles)(Header);