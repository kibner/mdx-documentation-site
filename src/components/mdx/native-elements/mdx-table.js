import withStyles from "@mui/styles/withStyles";
import Table from "@mui/material/Table";
import React from "react";

const StyledTable = withStyles(theme => ({
  root: {}
}))(Table);

const MdxTable = props => <StyledTable {...props} />;

export default MdxTable;
