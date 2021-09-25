import React, { useState, useEffect } from "react";

import "../assets/css/note.css";
import NoteHeader from "../components/notes/NoteHeader";
import NoteBody from "../components/notes/NoteBody";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import AdjustRoundedIcon from "@material-ui/icons/AdjustRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import { Resizable } from "react-resizable";
import { dummyNoteList } from "../dummy/note";

const Notes = () => {
  const [widthSidebar, setWidthSidebar] = useState(400);
  const [getDummyNote, setDummyNote] = useState([]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      let noteData = [];
      dummyNoteList.forEach((value) => {
        let iconState = null;
        switch (value.iconStatus) {
          case "active":
            iconState = <AdjustRoundedIcon />;
            break;
          case "hold":
            iconState = (
              <PauseCircleOutlineOutlinedIcon className="hold-icon" />
            );
            break;
          case "complete":
            iconState = <CheckCircleRoundedIcon className="complete-icon" />;
            break;
          case "dropped":
            iconState = <CancelRoundedIcon />;
            break;
          default:
            iconState = null;
            break;
        }
        noteData.push({ ...value, ...{ icon: iconState } });
      });
      setDummyNote(noteData);
    }

    return () => (mounted = false);
  }, []);

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

          {/* style="overflow-y: scroll; height:400px;" */}
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                overflowY: "scroll",
                height: "100vh",
                overflow: "auto",
              }}
            >
              {getDummyNote.map((val, index) => {
                return (
                  <NoteBody
                    resizeWindow={widthSidebar}
                    key={index}
                    title={val.title}
                    shortText={val.shortText}
                    updateSpan={val.update_at}
                    categories={val.categories}
                    icon={val.icon}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Resizable>
      <div className="react-resizable"></div>
    </>
  );
};

export default Notes;
