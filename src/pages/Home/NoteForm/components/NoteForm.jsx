import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../overrides/Button";

const NoteForm = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const { onSubmit: submitHandler } = props;

  const onSubmit = (data, e) => {
    e.preventDefault();
    submitHandler(data);
    reset();
  };

  return (
    <form className="add-note" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          label="Title"
          color="secondary"
          className="text-field"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          {...register("title", { required: true, minLength: 2 })}
        />
        <TextField
          label="Body"
          color="secondary"
          className="text-field"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          {...register("body", { required: true, minLength: 2 })}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NoteForm;
