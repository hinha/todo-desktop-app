import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { ellipsisText } from "../../utils/ellipsis";

import "../../assets/css/sidebarnote.css";

const BlueOnGreenTooltip = withStyles({
  tooltip: {
    color: "lightblue",
    backgroundColor: "green",
  },
})(Tooltip);

export const SidebarNote = ({ widthSidebar, subMenuText = "" }) => {
  return (
    <div className="sidebarNote">
      <div className="sidebarNote_text">
        <BlueOnGreenTooltip title={subMenuText}>
          <h4>{ellipsisText(widthSidebar, subMenuText)}</h4>
        </BlueOnGreenTooltip>
      </div>

      <div className="sidebarNote_text_hidden">
        <span className="detailNoteBtn">Detail →</span>
        <div className="sidebar__counter_hover">3</div>
      </div>
    </div>
  );
};

export const SidebarCategory = (props) => {
  const { icon, label, counterStatus } = props;
  return (
    <div className="sidebarStatus">
      <div className="sidebarNote_text flex-center">
        {icon}
        <h4>{label}</h4>
      </div>

      <div className="sidebarNote_text_hidden">
        <span className="detailNoteBtn">Detail →</span>
        <div className="sidebar__counter_hover">{counterStatus}</div>
      </div>
    </div>
  );
};
