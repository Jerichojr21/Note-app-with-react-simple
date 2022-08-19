import React from "react";
import { getData } from "../utils/data";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import SearchBar from "./SearchBar";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        " " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds();

    this.state = {
      notes: getData(),
      date: date,
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: this.state.date,
          },
        ],
      };
    });
  }

  onSearch(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        search: event.target.value,
      };
    });
  }

  render() {
    const activeNotes = this.state.notes.filter(
      (note) => note.archived === false
    );
    const archivedNotes = this.state.notes.filter(
      (note) => note.archived === true
    );
    return (
      <div className="note-app">
        <h1>Note App</h1>
        <h2>Add Note</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Search Note</h2>
        <SearchBar search={this.search} onSearch={this.onSearch} />
        <h2>Note List</h2>
        <NoteList
          notes={activeNotes.filter((note) =>
            note.title.toLowerCase().includes(this.state.search.toLowerCase())
          )}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <h2>Note Archived</h2>
        <NoteList
          notes={archivedNotes.filter((note) =>
            note.title.toLowerCase().includes(this.state.search.toLowerCase())
          )}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
