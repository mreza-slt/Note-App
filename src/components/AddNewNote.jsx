import { useState } from "react";
import { useNotesDispatch } from "../context/NotesContext";

function AddNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useNotesDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTitle("");
    setDescription("");
    dispatch({ type: "ADD", payload: newNote });
  }

  return (
    <div className="add-new-note">
      <h2>add new note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="note title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="note description"
        />
        <button className="btn btn--primary">add new note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
