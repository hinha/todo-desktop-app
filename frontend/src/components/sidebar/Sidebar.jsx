import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Resizable } from "react-resizable";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";

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
  const classes = useStyles();

  const [widthSidebar, setWidthSidebar] = useState(260);
  const [openBox, setOpenBox] = useState(false);

  const handleOpen = () => {
    setOpenBox(true);
  };

  const handleClose = () => {
    setOpenBox(false);
  };

  const onResize = (event, { size }) => {
    setWidthSidebar(size.width);
  };

  return (
    <>
      <Resizable
        width={widthSidebar}
        height={0}
        onResize={onResize}
        minConstraints={[244, 200]}
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
            <NavLink className="sidebar__notesHeader side__cursor" exact to="/">
              <div className="sidebar__header">
                <DescriptionOutlinedIcon />
                <h4 className="f-400">All Notes</h4>
              </div>
              <span className="sidebar__counter">3</span>
            </NavLink>
            <div className="sidebar__notesHeader">
              <div className="sidebar__header">
                <CollectionsBookmarkOutlinedIcon />
                <h4 className="f-300">Notebooks</h4>
              </div>
              <AddCircleOutlineRoundedIcon
                className="sidebar__addNotes"
                onClick={handleOpen}
              />
            </div>

            <div className="sidebar__notesList">
              <SidebarNote
                widthSidebar={widthSidebar}
                subMenuText={"First Notebook"}
              />
              <SidebarNote
                widthSidebar={widthSidebar}
                subMenuText={"First Notebook Lecture"}
              />
              <SidebarNote
                widthSidebar={widthSidebar}
                subMenuText={"First Notebook Lecture Notebook Lecture"}
              />
            </div>
            <NavLink
              exact
              to="/trash"
              className="sidebar__notesHeader side__cursor"
            >
              <div className="sidebar__header">
                <DeleteOutlinedIcon />
                <h4 className="f-400">Trash</h4>
              </div>
            </NavLink>
            <div className="sidebar__notesHeader">
              <div className="sidebar__header">
                <ListAltRoundedIcon />
                <h4 className="f-300">Status</h4>
              </div>
              <ExpandMoreOutlinedIcon className="sidebar__addNotes" />
            </div>
          </div>
        </div>
      </Resizable>

      <div className="react-resizable"></div>
      <Dialog open={openBox} onClose={handleClose} maxWidth="lg">
        <div className="dialog_header">
          <CollectionsBookmarkOutlinedIcon />
          <h2 className="dialog_header_title">Add New Notebook</h2>
        </div>
        <DialogContent className="dialog_content">
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Enter notebook name"
              variant="outlined"
              fullWidth
              InputProps={{
                className: classes.input,
              }}
            />
          </form>
        </DialogContent>
        <DialogActions className="dialog_footer">
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Sidebar;

const useStyles = makeStyles(() => ({
  paper: { minWidth: "500px" },

  input: {
    color: "black",
  },
}));
