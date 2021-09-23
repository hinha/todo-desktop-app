import React, { useState } from "react";
import { Resizable } from "react-resizable";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import CollectionsBookmarkOutlinedIcon from "@material-ui/icons/CollectionsBookmarkOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import "../../assets/css/sidebar.css";

import SidebarNote from "../sidebar/SidebarNote";

const Sidebar = () => {
  const [widthSidebar, setWidthSidebar] = useState(200);

  const onResize = (event, { size }) => {
    setWidthSidebar(size.width);
  };

  return (
    <Resizable
      width={widthSidebar}
      height={0}
      onResize={onResize}
      minConstraints={[200, 200]}
      maxConstraints={[600, 300]}
    >
      <div
        className="sidebar noselect"
        style={{ flexBasis: `${widthSidebar}px` }}
      >
        <div className="sidebar__top">
          <h3>Username</h3>
          <ExpandMoreIcon />
        </div>

        <div className="sidebar__notes">
          <div className="sidebar__notesHeader side__cursor">
            <div className="sidebar__header">
              <DescriptionOutlinedIcon />
              <h4>All Notes</h4>
            </div>
            <span className="sidebar__counter">3</span>
          </div>
          <div className="sidebar__notesHeader">
            <div className="sidebar__header">
              <CollectionsBookmarkOutlinedIcon />
              <h4>Notebooks</h4>
            </div>
            <AddCircleOutlineRoundedIcon className="sidebar__addNotes" />
          </div>

          <div className="sidebar__notesList">
            <SidebarNote />
            <SidebarNote />
          </div>
          <div className="sidebar__notesHeader side__cursor">
            <div className="sidebar__header">
              <DeleteOutlinedIcon />
              <h4>Trash</h4>
            </div>
          </div>
          <div className="sidebar__notesHeader">
            <div className="sidebar__header">
              <ListAltRoundedIcon />
              <h4>Status</h4>
            </div>
            <ExpandMoreOutlinedIcon className="sidebar__addNotes" />
          </div>
        </div>
      </div>
    </Resizable>
  );
};

export default Sidebar;
