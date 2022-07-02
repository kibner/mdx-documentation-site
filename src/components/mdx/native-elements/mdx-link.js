import React from "react"
import Link from "../../link"
import { makeStyles, ThemeProvider, useTheme } from "@material-ui/core/styles"

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
    <ThemeProvider theme={theme}>
      <Link
        to={href}
        internalClassName={classes.internalLink}
        externalClassName={classes.externalLink}
        {...props}
      />
    </ThemeProvider>
  )
}

export default MdxLink
