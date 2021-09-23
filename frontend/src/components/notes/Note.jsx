import React from "react";

import "../../assets/css/note.css";
import NoteHeader from "./NoteHeader";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const NoteGroup = () => {
  return (
    <div className="note__card">
      <NoteHeader />
      <div className="note_header__search">
        <SearchOutlinedIcon />
        <input placeholder="Search" />
      </div>
    </div>
  );
};

export default NoteGroup;
