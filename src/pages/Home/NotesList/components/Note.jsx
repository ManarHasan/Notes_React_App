import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as NavLink, generatePath } from "react-router-dom";
import NotesContext from "../../../../Context/NotesContext";
import { capitalizeFirstLetter } from "../../../../utils";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Note = (props) => {
  const { note } = props;
  const { handleSelectNote, deleteNoteById } = useContext(NotesContext);

  const onClick = (note) => handleSelectNote(note.id);

  return (
    <div style={{ position: "relative" }}>
      <IconButton
        className="list-delete-icon"
        onClick={() => deleteNoteById(note.id)}
      >
        <DeleteForeverIcon sx={{ color: "#ffffff" }} />
      </IconButton>
      <Link
        className="note-container"
        onClick={() => onClick(note)}
        component={NavLink}
        to={generatePath("/note/:id", { id: note.id })}
        key={note.id}
      >
        <Typography className="note-title">
          {capitalizeFirstLetter(note.title)}
        </Typography>
        <Typography className="note-body">
          {capitalizeFirstLetter(note.body)}
        </Typography>
        <Typography className="note-date">{note.createdAt}</Typography>
      </Link>
    </div>
  );
};

export default Note;
