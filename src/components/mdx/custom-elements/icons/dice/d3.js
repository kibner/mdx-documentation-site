import React from "react"
import DieSvgIconWrapper from "../die-svg-icon"

const D3 = props => (
  <DieSvgIconWrapper {...props}>
    <g id="blank">
      <rect width="24" height="24" fill="none" />
    </g>
    <g id="die">
      <rect width="24" height="24" rx="4" fill="#f7f3f0" />
    </g>
    <g id="_3" data-name="3">
      <circle cx="5.5" cy="5.5" r="2.5" fill="#161515" />
      <circle cx="12" cy="12" r="2.5" fill="#161515" />
      <circle cx="18.5" cy="18.5" r="2.5" fill="#161515" />
    </g>
  </DieSvgIconWrapper>
)

export default D3
