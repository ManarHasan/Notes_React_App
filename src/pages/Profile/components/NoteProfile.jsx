import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useCallback, useContext, useEffect } from "react";
import NotesContext from "../../../Context/NotesContext";
import { useForm } from "react-hook-form";
import Button from "../../../overrides/Button";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";

const NoteProfile = (props) => {
  const { title, body, createdAt, updatedAt, id } = props;
  const { register, handleSubmit, setValue } = useForm();
  const { handleEditNote, deleteNoteById } = useContext(NotesContext);
  const navigate = useNavigate();

  useEffect(() => {
    //sets initial value
    setValue("title", title);
    setValue("body", body);
  }, []);

  const onSubmit = (values) => {
    handleEditNote(id, values);
  };

  const onDelete = useCallback(() => {
    deleteNoteById(id);
    navigate("/");
  }, [id]);

  return (
    <Box className="profile-container">
      <Box className="profile-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="profile">
          <TextField
            color="primary"
            {...register("title")}
            label="Title"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            color="primary"
            multiline={true}
            minRows={3}
            {...register("body")}
            label="Body"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <Typography>Created at: {createdAt}</Typography>
          <Typography>Updated at: {updatedAt}</Typography>
          <Button type="submit">Edit</Button>
        </form>
        <IconButton onClick={onDelete}>
          <DeleteForeverIcon />
        </IconButton>
      </Box>
      <Box className="image" />
    </Box>
  );
};

export default NoteProfile;
