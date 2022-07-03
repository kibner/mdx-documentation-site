import React from "react"
import withStyles from "@mui/styles/withStyles"
import SvgIcon from "@mui/material/SvgIcon"

const StyledSvgIcon = withStyles(theme => ({
  root: {
    verticalAlign: "text-top",
    fontSize: "inherit"
  }
}))(SvgIcon)

const DieSvgIconWrapper = props => (
  <StyledSvgIcon viewBox={"0 0 24 24"} {...props} />
)

export default DieSvgIconWrapper
