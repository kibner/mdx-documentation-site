import withStyles from "@mui/styles/withStyles";
import TableHead from "@mui/material/TableHead";
import React from "react";

const StyledTableHead = withStyles(theme => ({
  root: {}
}))(TableHead);

const MdxTableHead = props => <StyledTableHead {...props} />;

export default MdxTableHead;
