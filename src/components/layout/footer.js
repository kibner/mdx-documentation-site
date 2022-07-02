import React from "react"
import { Typography } from "@material-ui/core"
import Link from "../link"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: theme.spacing(2)
  },
  link: {
    color: theme.palette.secondary.light
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant={"caption"}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link to={"https://www.gatsbyjs.com"} className={classes.link}>
          Gatsby
        </Link>
      </Typography>
    </footer>
  )
}

export default Footer
