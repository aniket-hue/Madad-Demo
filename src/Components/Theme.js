import { createMuiTheme } from '@material-ui/core/styles'
export default createMuiTheme(
    {
        palette: {
            primary: {
                main: `#1b1b1c`
            },
            secondary: {
                main: `#FFFF`
            }
        },
        typography: {
            tab: {
                fontFamily: "Raleway",
                textTransform: "none",
                fontWeight: "700",
                fontSize: "1rem",
                minWidth: 10,
            },
        }
    }

);