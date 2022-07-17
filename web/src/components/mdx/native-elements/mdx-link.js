import React from "react"
import Link from "../../link"

const MdxLink = props => {
  const { href } = props

  return (
    <Link
      to={href}
      // uses sx syntax
      internalStyle={{
        color: theme => theme.palette.primary.light,
        textDecorationColor: "inherit",
      }}
      // uses sx syntax
      externalStyle={{
        color: theme => theme.palette.secondary.light,
        textDecorationColor: "inherit",
      }}
      {...props}
    />
  )
}

export default MdxLink
