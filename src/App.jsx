import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, SetSortBy] = useState("latest");

  const handleNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  const handleCompeleteNote = (e) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === Number(e.target.value)
          ? { ...note, completed: !note.completed }
          : note
      )
    );
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
