import React from "react";
import Box from "@mui/material/Box";
import Note from "./Note";

const NotesList = (props) => {
  const { notes } = props;

  return (
    <Box className="notes-container">
      {notes.map((note) => {
        return <Note note={note} />;
      })}
    </Box>
  );
};

export default NotesList;
