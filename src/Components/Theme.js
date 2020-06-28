import { createMuiTheme } from '@material-ui/core/styles'
export default createMuiTheme(
    {
        palette: {
            primary: {
                main: `#fff`
            },
            secondary: {
                main: `#3764eb`
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
            estimate: {
                fontFamily: "Pacifico",
                fontSize: "1rem",
                textTransform: "none",
            }
        }
    }

);