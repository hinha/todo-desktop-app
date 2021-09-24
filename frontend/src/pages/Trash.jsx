import React, { useState } from "react";

import "../assets/css/note.css";
import NoteHeader from "../components/notes/NoteHeader";
import NoteBody from "../components/notes/NoteBody";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import { Resizable } from "react-resizable";

const Trash = () => {
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
            <NoteHeader title="Trash" />
            <div className="note_header__search">
              <SearchOutlinedIcon />
              <input placeholder="Search" />
            </div>
          </div>

          <NoteBody
            title="Contoh 1"
            shortText="lorem"
            updateSpan={0}
            categories={["c1"]}
            icon={<PauseCircleOutlineOutlinedIcon className="hold-icon" />}
          />
        </div>
      </Resizable>
      <div className="react-resizable"></div>
    </>
  );
};

export default Trash;
