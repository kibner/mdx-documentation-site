import Divider from "@mui/material/Divider"
import React from "react"
import { styled } from "@mui/material/styles"

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}))

const MdxDivider = props => (
  <StyledDivider
    {...props}
    variant={props.variant ?? "middle"}
  />
)

export default MdxDivider
