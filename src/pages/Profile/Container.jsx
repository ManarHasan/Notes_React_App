import React, { useContext } from "react";
import NotesContext from "../../Context/NotesContext";
import PageHeader from "../../common/PageHeader/PageHeader";
import NoteProfile from "./components/NoteProfile";
import Link from "@mui/material/Link";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./profile.css";
import Box from "@mui/material/Box";
import BackLink from "../../common/BackLink";

const Container = () => {
  const { selectedNote } = useContext(NotesContext);
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id);
  if (selectedNote.id !== id) {
    return <Navigate to="/404" />;
  }

  return (
    <Box className="profile-main">
      <Link color={"primary"} component={BackLink} />
      <PageHeader title={selectedNote.title} />
      <NoteProfile {...selectedNote} />
    </Box>
  );
};

export default Container;
