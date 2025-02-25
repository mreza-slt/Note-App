import { useContext, useReducer } from "react";
import { createContext } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

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
      throw new Error("unknown Error " + type);
  }
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, INITIAL_STATE);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
