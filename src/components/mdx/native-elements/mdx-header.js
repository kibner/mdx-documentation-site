import { Typography } from "@mui/material"
import React from "react"
import { styled } from "@mui/material/styles"

const StyledHeader = styled(Typography)(({ theme }) => {
  const singleSpacingPixels = parseFloat(theme.spacing(1))

  return {
    marginBottom: theme.spacing(1),
    scrollMarginTop: `${
      theme.mixins.toolbar.minHeight + singleSpacingPixels
    }px`,
    "@media (min-width:0px) and (orientation: landscape)": {
      scrollMarginTop: `${
        theme.mixins.toolbar[
          "@media (min-width:0px) and (orientation: landscape)"
        ].minHeight + singleSpacingPixels
      }px`,
    },
    "@media (min-width:600px)": {
      scrollMarginTop: `${
        theme.mixins.toolbar["@media (min-width:600px)"].minHeight +
        singleSpacingPixels
      }px`,
    },
    "& > a.anchor": {
      height: "100%",
      "& > div": {
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& > svg": {
          fill: theme.palette.text.secondary,
        },
      },
    },
  }
})

const MdxHeader = props => <StyledHeader {...props} />

export default MdxHeader
