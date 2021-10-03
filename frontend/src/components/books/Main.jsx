import React, { useState } from "react";

import { Resizable } from "react-resizable";

import "../../assets/css/note.css";
import NoteHeader from "../notes/NoteHeader";
import NoteList from "../notes/NoteList";
import BookTitle from "./Title";

const MainBooks = (props) => {
  const { bookTitle, notes, books, trash } = props;
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
          <BookTitle
            NoteHeader={<NoteHeader title={bookTitle} />}
            notes={notes}
            books={books}
            trash={trash}
          />

          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                overflowY: "scroll",
                height: "100vh",
                overflow: "auto",
              }}
            >
              <NoteList />
            </div>
          </div>
        </div>
      </Resizable>
      <div className="react-resizable"></div>
    </>
  );
};

export default MainBooks;
