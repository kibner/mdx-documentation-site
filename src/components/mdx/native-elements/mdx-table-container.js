import withStyles from "@mui/styles/withStyles";
import TableContainer from "@mui/material/TableContainer";
import React from "react";
import MdxTable from "./mdx-table";

const StyledTableContainer = withStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2)
  }
}))(TableContainer);

const MdxTableContainer = props =>
  <StyledTableContainer>
    <MdxTable {...props} />
  </StyledTableContainer>
;

export default MdxTableContainer;
