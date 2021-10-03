import React from "react";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FilterListIcon from "@material-ui/icons/FilterList";

const BookTitle = (props) => {
  const { NoteHeader, notes, books, trash } = props;

  let icon = <SearchOutlinedIcon />;
  let placeHolder = "Search";
  if (notes) {
    icon = <SearchOutlinedIcon />;
    placeHolder = "Search";
  }
  if (books) {
    icon = <FilterListIcon />;
    placeHolder = "Filter";
  }

  return (
    <div className="note__title">
      {NoteHeader}
      {trash ? null : (
        <div className="note_header__search">
          {icon}
          <input placeholder={placeHolder} />
        </div>
      )}
    </div>
  );
};

export default BookTitle;
