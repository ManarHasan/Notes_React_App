import React from "react";
import MuiButton from "@mui/material/Button";

const Button = (props) => {
  const { children, ...rest } = props;
  return (
    <MuiButton variant="contained" color="secondary" {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;
