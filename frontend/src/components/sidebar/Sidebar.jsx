import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Resizable } from "react-resizable";
import { makeStyles } from "@material-ui/core/styles";
// import UnopDropdown from "unop-react-dropdown";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";

import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import CollectionsBookmarkOutlinedIcon from "@material-ui/icons/CollectionsBookmarkOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ArchiveSharpIcon from "@material-ui/icons/ArchiveSharp";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import AlbumSharpIcon from "@material-ui/icons/AlbumSharp";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

import "../../assets/css/sidebar.css";

import { SidebarNote, SidebarCategory } from "../sidebar/SidebarNote";
// import SidebarStatus from "./SidebarStatus";

const Sidebar = () => {
  const classes = useStyles();

  const [widthSidebar, setWidthSidebar] = useState(260);
  const [openBox, setOpenBox] = useState(false);
  const [openDropdownStatus, setOpenDropdownStatus] = useState("block");
  const [openDropdownTags, setOpenDropdownTags] = useState("block");

  const handleOpen = () => {
    setOpenBox(true);
  };

  const handleClose = () => {
    setOpenBox(false);
  };

  const onResize = (event, { size }) => {
    setWidthSidebar(size.width);
  };

  const dropdownstatus = () => {
    if (openDropdownStatus === "block") {
      setOpenDropdownStatus("none");
    } else {
      setOpenDropdownStatus("block");
    }
  };

  const dropdownTags = () => {
    if (openDropdownTags === "block") {
      setOpenDropdownTags("none");
    } else {
      setOpenDropdownTags("block");
    }
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

          {/* sidebar notes */}
          <div className="sidebar__notes">
            <div className="l-navbar" id="nav-bar">
              <nav className="nav">
                <div style={{ overflow: "hidden" }}>
                  <div
                    className="nav_list"
                    style={{
                      overflowY: "scroll",
                      height: "100vh",
                      overflow: "auto",
                    }}
                  >
                    <NavLink exact to="/" className="nav_link jsspace">
                      <div className="flex-center">
                        <DescriptionOutlinedIcon className="mr-1" />
                        <h4 className="f-400">All Notes</h4>
                      </div>
                      <span className="sidebar__counter mr-2">3</span>
                    </NavLink>
                    <div className="nav_link jsspace">
                      <div className="flex-center">
                        <CollectionsBookmarkOutlinedIcon className="mr-1" />
                        <h4 className="f-200">Notebooks</h4>
                      </div>
                      <AddCircleOutlineRoundedIcon
                        className="sidebar__addNotes mr-2"
                        onClick={handleOpen}
                      />
                    </div>
                    <NavLink to="/notebooks" className="nav_link_sub">
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
                          subMenuText={
                            "First Notebook Lecture Notebook Lecture"
                          }
                        />
                      </div>
                    </NavLink>
                    {/* Trash */}
                    <NavLink
                      exact
                      to="/trash"
                      className="nav_link side__cursor mr-1"
                    >
                      <div className="flex-center">
                        <DeleteOutlinedIcon className="mr-1" />
                        <h4 className="f-400">Trash</h4>
                      </div>
                    </NavLink>
                    {/* End Trash */}

                    {/* Status */}
                    <div className="nav_link jsspace">
                      <div className="flex-center">
                        <ListAltRoundedIcon className="mr-1" />
                        <h4 className="f-200">Status</h4>
                      </div>
                      <ExpandMoreOutlinedIcon
                        className="sidebar-down sidebar__addNotes mr-2"
                        onClick={dropdownstatus}
                      />
                    </div>
                    {/* End Status */}
                    {/* Dropdown Status */}
                    <div style={{ display: openDropdownStatus }}>
                      <Link to="#">
                        <SidebarCategory
                          icon={<AlbumSharpIcon className="white-200" />}
                          label="Active"
                          counterStatus="3"
                        />
                      </Link>
                      <Link to="#">
                        <SidebarCategory
                          icon={
                            <PauseCircleOutlineOutlinedIcon className="hold-icon" />
                          }
                          label="Hold"
                          counterStatus="3"
                        />
                      </Link>

                      <Link to="#">
                        <SidebarCategory
                          icon={
                            <CheckCircleRoundedIcon className="complete-icon" />
                          }
                          label="Complete"
                          counterStatus="3"
                        />
                      </Link>
                      <Link to="#">
                        <SidebarCategory
                          icon={<ArchiveSharpIcon className="white-200" />}
                          label="Archived"
                          counterStatus="3"
                        />
                      </Link>
                      <Link to="#">
                        <SidebarCategory
                          icon={<CancelRoundedIcon className="dropped-icon" />}
                          label="Dropped"
                          counterStatus="3"
                        />
                      </Link>
                    </div>
                    {/* End Dropdown Status  */}
                    {/* Tags */}
                    <div className="nav_link jsspace">
                      <div className="flex-center">
                        <LocalOfferRoundedIcon className="mr-1" />
                        <h4 className="f-200">Tags</h4>
                      </div>
                      <ExpandMoreOutlinedIcon
                        className="sidebar-down sidebar__addNotes mr-2"
                        onClick={dropdownTags}
                      />
                    </div>
                    {/* End Tags */}
                    {/* Dropdown Tags */}
                    <div style={{ display: openDropdownTags }}>
                      {Array.from(Array(5).keys()).map((index) => {
                        return (
                          <Link to={"/" + (index + 1)} key={index}>
                            <SidebarCategory
                              icon={
                                <FiberManualRecordIcon className="white-200" />
                              }
                              label={"Tags " + (index + 1)}
                              counterStatus="3"
                            />
                          </Link>
                        );
                      })}
                    </div>
                    {/* End Dropdown Tags */}
                  </div>
                </div>
              </nav>
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
