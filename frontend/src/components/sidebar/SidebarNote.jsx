import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

import "../../assets/css/sidebarnote.css";

function calc(width, text = "") {
  const minWidth = width / 4 - 46;
  let max = minWidth;
  return text.length > max ? text.substring(0, max - 3) + "..." : text;
}

const BlueOnGreenTooltip = withStyles({
  tooltip: {
    color: "lightblue",
    backgroundColor: "green",
  },
})(Tooltip);

const SidebarNote = ({ widthSidebar, subMenuText = "" }) => {
  return (
    <div className="sidebarNote">
      <div className="sidebarNote_text">
        <BlueOnGreenTooltip title={subMenuText}>
          <h4>{calc(widthSidebar, subMenuText)}</h4>
        </BlueOnGreenTooltip>
      </div>

      <div className="sidebarNote_text_hidden">
        <span className="detailNoteBtn">Detail →</span>
        <div className="sidebar__counter_hover">3</div>
      </div>
    </div>
  );
};

export default SidebarNote;
