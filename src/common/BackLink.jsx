import React from "react";
import { Link as NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./backlink.css";

const BackLink = (props) => (
  <NavLink to="/">
    <ArrowBackIcon {...props} className="back-icon" />
  </NavLink>
);

export default BackLink;
