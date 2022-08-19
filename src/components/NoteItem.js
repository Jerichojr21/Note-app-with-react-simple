import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

const NoteItem = ({
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArchive,
  isArchived,
}) => {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <ArchiveButton id={id} onArchive={onArchive} isArchived={isArchived} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
};

export default NoteItem;
