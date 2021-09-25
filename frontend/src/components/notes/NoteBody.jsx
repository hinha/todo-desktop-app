import React from "react";
import { ellipsisText } from "../../utils/ellipsis";

const NoteBody = ({
  resizeWindow,
  title,
  icon,
  shortText,
  updateSpan,
  categories = [],
}) => {
  return (
    <div className="note__body noselect">
      <div className="note__body_title">
        {icon}
        <h4>{title}</h4>
      </div>
      <p>{ellipsisText(resizeWindow, shortText, 49)}</p>

      <span className="note__update">{ago(updateSpan)}</span>
      {categories.map((value, index) => {
        return (
          <span key={index} className="note__category">
            {value}
          </span>
        );
      })}
    </div>
  );
};

function ago(val = 1632000000) {
  val = 0 | ((Date.now() - new Date(val * 1000)) / 1000);
  var unit,
    length = {
      second: 60,
      minute: 60,
      hour: 24,
      days: 7,
      week: 4.35,
      month: 12,
      year: 10000,
    },
    result;

  for (unit in length) {
    result = val % length[unit];
    if (!(val = 0 | (val / length[unit]))) {
      if (result < 0) {
        return "a few seconds";
      }
      return result + " " + (result - 1 ? unit + "s" : unit);
    }
  }
}

export default NoteBody;
