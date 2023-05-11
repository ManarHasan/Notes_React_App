import React, { useState } from "react";
import NoteFormContainer from "./NoteForm/Container";
import NotesListContainer from "./NotesList/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import "./home.css";

const Container = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Box className="home-container">
      <div>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleToggle}
        >
          <MenuIcon classes />
        </IconButton>
        <Collapse in={isOpen}>
          <NoteFormContainer handleCloseMenu={closeMenu} />
        </Collapse>
      </div>
      <div>
        <NotesListContainer />
      </div>
    </Box>
  );
};

export default Container;
