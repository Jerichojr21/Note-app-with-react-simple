import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <div className="note-form">
      <div className="note-list">
        {notes.length ? (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onArchive={onArchive}
              isArchived={note.archived}
              onDelete={onDelete}
              {...note}
            />
          ))
        ) : (
          <div className="data"> No Data Available </div>
        )}
      </div>
    </div>
  );
};

export default NoteList;
