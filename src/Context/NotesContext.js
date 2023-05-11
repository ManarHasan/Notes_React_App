import { createContext } from "react";

// NotesContex exists to act as a link between the form and the list of data and the profile without losing the data.

const NotesContext = createContext(null);

export default NotesContext;
