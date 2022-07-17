import ListItemText from "@mui/material/ListItemText"
import React from "react"
import { styled } from "@mui/material/styles"

const StyledListItemText = styled(ListItemText)(({ theme }) => ({}))

const MdxListItemText = props => <StyledListItemText primary={props.children} />

export default MdxListItemText
