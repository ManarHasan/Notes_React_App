import React, { useContext } from "react";
import NoteForm from "./components/NoteForm";
import PageHeader from "../../../common/PageHeader/PageHeader";
import NotesContext from "../../../Context/NotesContext";
import { nanoid } from "nanoid";
import Box from "@mui/material/Box";
import "./form.css";

const Container = (props) => {
  const { handleCloseMenu } = props;
  const { handleAddNote } = useContext(NotesContext);

  const onSubmit = (formValues) => {
    const newNote = {
      title: formValues.title,
      body: formValues.body,
      id: nanoid(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };
    handleAddNote(newNote);
    // handleCloseMenu();
  };

  return (
    <Box>
      <PageHeader title="Create a note" />
      <NoteForm onSubmit={onSubmit} />
    </Box>
  );
};

export default Container;
