function NoteStatus({ notes }) {
  // derived state
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  //   const unCompletedNotes = notes.filter((n) => !n.completed).length;
  const unCompletedNotes = allNotes - completedNotes;

  if (!allNotes) return <h2>No notes has already been added</h2>;
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
