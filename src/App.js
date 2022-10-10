import { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Notescom from "./components/Notescom";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "First",
      text: "This is the first one",
      date: "09/10/22",
    },

    {
      id: nanoid(),
      title: "Second",
      text: "This is the second",
      date: "09/10/22",
    },

    {
      id: nanoid(),
      title: "Third",
      text: "This is the third",
      date: "09/10/22",
    },
  ]);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, title) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="App">
        <Header handleToggleDarkMode={setDarkMode} />
        <Notescom
          notes={notes}
          handleAddNotes={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
