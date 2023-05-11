import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./app-header.css";

const AppHeader = () => {
  return (
    <Box className="app-header-container">
      <Typography variant="h1" className="app-header">
        Notes App
      </Typography>
    </Box>
  );
};

export default AppHeader;
