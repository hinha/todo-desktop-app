import React, { useState, useEffect } from "react";
import { PouchDB } from "react-pouchdb";

import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import AdjustRoundedIcon from "@material-ui/icons/AdjustRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

import { dummyNoteList } from "../../dummy/note";

import NoteBody from "./NoteBody";

// TODO
// Note List
// Note DB
const NoteList = (props) => {
  const { widthSidebar } = props;
  const [getDummyNote, setDummyNote] = useState([]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      // example
      // window.backend.noteBookHandler
      //   .Basic()
      //   .then((result) => {
      //     console.log(result, "noteBookHandler");
      //   })
      //   .catch((e) => {
      //     console.error(e);
      //   });
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
            iconState = <CancelRoundedIcon className="dropped-icon" />;
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

  return (
    <PouchDB name="note">
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
    </PouchDB>
  );
};

export default NoteList;
