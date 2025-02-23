import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

const INITIAL_STATE = [];

function notesReducer(state, { type, payload }) {
  switch (type) {
    case "ADD": {
      return [...state, payload];
    }
    case "DELETE": {
      return state.filter((s) => s.id !== payload);
    }

    case "COMPLETE": {
      return state.map((note) =>
        note.id === Number(payload)
          ? { ...note, completed: !note.completed }
          : note
      );
    }

    default:
     throw new Error("unknown Error " + type)
  }
}

function App() {
  const [notes, dispatch] = useReducer(notesReducer, INITIAL_STATE);
  const [sortBy, SetSortBy] = useState("latest");

  const handleNote = (newNote) => {
    dispatch({ type: "ADD", payload: newNote });
  };

  const handleDeleteNote = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleCompeleteNote = (e) => {
    const noteId = e.target.value;
    dispatch({ type: "COMPLETE", payload: noteId });
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => SetSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            sortBy={sortBy}
            notes={notes}
            onDelete={handleDeleteNote}
            onComplete={handleCompeleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
