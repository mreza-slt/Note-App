import { useNotes } from "../context/NotesContext";
import Message from "./Message";

function NoteStatus() {
  const notes = useNotes();
  // derived state
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  //   const unCompletedNotes = notes.filter((n) => !n.completed).length;
  const unCompletedNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <Message>
        <span>info</span>
        <span>no notes already been added</span>
      </Message>
    );
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
