import React from "react";

import SortByAlphaOutlinedIcon from "@material-ui/icons/SortByAlphaOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

const NoteHeader = ({ title = "Default" }) => {
  return (
    <div className="note__header noselect">
      <div className="note_header__left">
        <SortByAlphaOutlinedIcon className="note_header__icon" />
      </div>
      <div className="note_header__center">
        <h3 className="note_header__title">{title}</h3>
      </div>
      <div className="note_header__right">
        <CreateOutlinedIcon />
      </div>
    </div>
  );
};

export default NoteHeader;
