import React from "react";
import Typography from "@mui/material/Typography";
import "./page-header.css";
import { capitalizeFirstLetter } from "../../utils";

const PageHeader = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="header">
      <Typography className="header-title" variant="h3">
        {capitalizeFirstLetter(title)}
      </Typography>
      {subtitle && (
        <Typography className="header-subtitle" variant="h6">
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default PageHeader;
