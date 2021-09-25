import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

import "../../assets/css/editor.css";

import RemoveIcon from "@material-ui/icons/Remove";
import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CollectionsBookmarkOutlinedIcon from "@material-ui/icons/CollectionsBookmarkOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";

function MainEditor() {
  const [value, setValue] = useState("**Hello world!!!**");

  return (
    <div className="editor_wrap">
      <div className="editor_window">
        <div className="editor-header__window-l"></div>
        <div className="editor-header__window-r">
          <div className="editor-header_control">
            <RemoveIcon className="windowMinimize" />
            <CheckBoxOutlineBlankSharpIcon className="windowMaximize" />
            <CloseIcon className="windowClose" />
          </div>
        </div>
      </div>
      <div className="editor_title">
        <input type="text" placeholder="Untitled" defaultValue="Contoh 1" />
        <MoreVertIcon className="windowProperties" />
      </div>
      <div className="editor_navigator noselect">
        <div className="navigator_notes">
          <CollectionsBookmarkOutlinedIcon fontSize="small" />
          <div className="navigator_notes_text">First Notebook</div>
        </div>
        <div className="navigator_status">
          <div className="navigator_notes_text">Status</div>
          <ArrowDropDownOutlinedIcon fontSize="small" />
        </div>
        <div className="navigator_tags">
          <div className="navigator_label_tags_get">
            <p>tags 1</p>
            <p>tags 1</p>
            <p>tags 1</p>
            <p>tags 1</p>
          </div>
          <div className="navigator_label_tags_set">
            <input type="text" placeholder="Add Tags" />
          </div>
        </div>
      </div>
      <div className="editor_manager">
        <MDEditor
          height={500}
          minHeight={400}
          maxHeight={600}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
}

export default MainEditor;
