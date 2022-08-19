import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      name: "",
      tag: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          required
        />
        <textarea
          type="textarea"
          placeholder="Text here..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          required
        />
        <button id="btn" type="submit">
          ADD
        </button>
      </form>
    );
  }
}

export default NoteInput;
