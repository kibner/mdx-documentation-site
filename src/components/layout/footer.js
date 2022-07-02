import React from "react"
import { Typography } from "@mui/material"
import Link from "../link"
import { ThemeProvider, StyledEngineProvider, useTheme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: theme.spacing(2)
  },
  link: {
    color: theme.palette.secondary.light
  }
}))

const Footer = () => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <footer className={classes.footer}>
          <Typography variant={"caption"}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link to={"https://www.gatsbyjs.com"} className={classes.link}>
              Gatsby
            </Link>
          </Typography>
        </footer>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Footer
