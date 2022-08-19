import React from "react";

const NoteItemBody = ({ title, body, createdAt }) => {
  return (
    <div className="note-item__body">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__time">{createdAt}</p>
      <p className="note-item__desc">{body}</p>
    </div>
  );
};

export default NoteItemBody;
