import React from "react"
import Link from "../../link"
import makeStyles from "@mui/styles/makeStyles"

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
  const classes = useStyles()

  return (
    <Link
      to={href}
      internalClassName={classes.internalLink}
      externalClassName={classes.externalLink}
      {...props}
    />
  )
}

export default MdxLink
