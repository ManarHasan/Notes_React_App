import React, { useContext, useState } from "react";
import PageHeader from "../../../common/PageHeader/PageHeader";
import NotesList from "./components/NotesList";
import NotesContext from "../../../Context/NotesContext";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Button from "../../../overrides/Button";
import { SORT_BUTTONS } from "../constants";
import { setObjectKeysToValue } from "../../../utils";

const Container = () => {
  const { notes, handleFilterNotes, sortNotes } = useContext(NotesContext);
  const [sort, setSort] = useState({
    title: false,
    body: false,
    createdAt: false,
    updatedAt: false,
  });

  return (
    <>
      <PageHeader
        title={"Your Notes"}
        subtitle={"Where your notes are kept safe"}
      />
      {/* shorthand for padding */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={2}
        alignItems={"center"}
        pt={2}
        pb={4}
      >
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          {SORT_BUTTONS.map((button) => (
            <Button
              key={button.id}
              onClick={() => {
                sortNotes(button.name, !sort[button.name]);
                setSort({
                  ...setObjectKeysToValue(sort, false),
                  [button.name]: !sort[button.name],
                });
              }}
            >
              {button.title}{" "}
              {sort[button.name] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>
          ))}
        </Box>
        <TextField
          placeholder="Search for a specific note..."
          color="secondary"
          label="search"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => handleFilterNotes(e.target.value)}
        />
      </Box>
      <NotesList notes={notes} />
    </>
  );
};

export default Container;
