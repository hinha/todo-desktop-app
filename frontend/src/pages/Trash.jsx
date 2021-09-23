import React from "react";

import "../assets/css/note.css";
import NoteHeader from "../components/notes/NoteHeader";

const Trash = () => {
  return (
    <div className="note__card">
      <NoteHeader title="Trash" />
    </div>
  );
};

export default Trash;
