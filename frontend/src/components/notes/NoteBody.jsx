import React from "react";

const NoteBody = ({ title, icon, description, updateSpan }) => {
  return (
    <div className="note__body noselect">
      <div className="note__body_title">
        {icon}
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
      <span>{updateSpan}</span>
    </div>
  );
};

export default NoteBody;
