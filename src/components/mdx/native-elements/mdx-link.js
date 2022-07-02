import React from "react"
import Link from "../../link"
import { ThemeProvider, StyledEngineProvider, useTheme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  internalLink: {
    color: theme.palette.primary.light
  },
  externalLink: {
    color: theme.palette.secondary.light
  }
}))

const MdxLink = props => {
  const { href } = props
  const theme = useTheme()
  const classes = useStyles()

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Link
          to={href}
          internalClassName={classes.internalLink}
          externalClassName={classes.externalLink}
          {...props}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MdxLink
