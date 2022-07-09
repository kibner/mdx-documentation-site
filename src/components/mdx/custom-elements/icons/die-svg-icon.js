import React from "react"
import SvgIcon from "@mui/material/SvgIcon"
import { styled } from "@mui/material/styles"

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  verticalAlign: "text-top",
  fontSize: "inherit"
}))

const DieSvgIconWrapper = props =>
  <StyledSvgIcon
    {...props}
    viewBox={"0 0 24 24"}
  />

export default DieSvgIconWrapper
