import React, { useState } from "react";

import "../assets/css/note.css";
import NoteHeader from "../components/notes/NoteHeader";
import NoteBody from "../components/notes/NoteBody";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import { Resizable } from "react-resizable";

const Notes = () => {
  const [widthSidebar, setWidthSidebar] = useState(400);

  const onResize = (event, { size }) => {
    setWidthSidebar(size.width);
  };

  return (
    <>
      <Resizable
        width={widthSidebar}
        height={0}
        onResize={onResize}
        minConstraints={[300, 200]}
        maxConstraints={[800, 300]}
      >
        <div className="note__wrap" style={{ flexBasis: `${widthSidebar}px` }}>
          <div className="note__title">
            <NoteHeader title="All Notes" />
            <div className="note_header__search">
              <SearchOutlinedIcon />
              <input placeholder="Search" />
            </div>
          </div>

          <NoteBody
            title="Contoh 1"
            description="lorem"
            updateSpan="1 days"
            icon={<PauseCircleOutlineOutlinedIcon className="hold-icon" />}
          />
          <NoteBody
            title="Contoh 2"
            description="lorem"
            updateSpan="1 days"
            icon={<CheckCircleRoundedIcon className="complete-icon" />}
          />
        </div>
      </Resizable>
      <div className="react-resizable"></div>
    </>
  );
};

export default Notes;
