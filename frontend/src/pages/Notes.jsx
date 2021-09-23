import React from "react";

import "../assets/css/note.css";
import NoteHeader from "../components/notes/NoteHeader";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const Notes = () => {
  return (
    <div className="note__card">
      <NoteHeader title="All Notes" />
      <div className="note_header__search">
        <SearchOutlinedIcon />
        <input placeholder="Search" />
      </div>
    </div>
  );
};

export default Notes;
