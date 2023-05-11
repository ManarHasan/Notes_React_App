import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import NotesContext from "./Context/NotesContext";
import { NOTES_INITIAL_VALUE } from "./constants";
import AppHeader from "./common/AppHeader/AppHeader";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  const [notes, setNotes] = useState(NOTES_INITIAL_VALUE);
  const [filteredNotes, setFilteredNotes] = useState(NOTES_INITIAL_VALUE);
  const [selectedNote, setSelectedNote] = useState({});

  const handleAddNote = (note) => {
    const result = [...notes, note];
    setNotes(result);
    setFilteredNotes(result);
  };

  const handleEditNote = (id, payload) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          ...payload,
          updatedAt: new Date().toLocaleString(),
        };
      }
      return note;
    });
    setSelectedNote({
      ...selectedNote,
      ...payload,
      updatedAt: new Date().toLocaleDateString(),
    });
    setFilteredNotes(newNotes);
    setNotes(newNotes);
  };

  const handleFilterNotes = (value) => {
    if (!value) {
      setFilteredNotes(notes);
    }
    setFilteredNotes(
      notes.filter(
        (note) =>
          note.title.toLowerCase().includes(value.toLowerCase()) ||
          note.body.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSelectNote = (noteId) => {
    const result = notes.find((note) => note.id === noteId);
    if (!result) {
      setSelectedNote({});
    }
    setSelectedNote(result);
  };

  const sortNotes = (value, descending) => {
    const sortedNotes = filteredNotes.sort((a, b) => {
      if (descending) {
        return b[value].localeCompare(a[value]);
      } else {
        return a[value].localeCompare(b[value]);
      }
    });
    setFilteredNotes(sortedNotes);
  };

  const deleteNoteById = (id) => {
    setFilteredNotes(notes.filter((note) => note.id !== id));
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <ThemeProvider theme={theme}>
      <NotesContext.Provider
        value={{
          notes: filteredNotes,
          handleAddNote,
          selectedNote,
          handleSelectNote,
          handleEditNote,
          handleFilterNotes,
          sortNotes,
          deleteNoteById,
        }}
      >
        <AppHeader />
        <RouterProvider router={router} />
      </NotesContext.Provider>
    </ThemeProvider>
  );
}

export default App;
