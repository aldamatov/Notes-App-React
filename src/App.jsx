import "./styles.css";
import { useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "15/04/2022"
    },
    {
      id: nanoid(),
      text: "This is my Second note",
      date: "20/10/2021"
    }
  ]);
  const [searchText, setSearchText] = useState("");

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: ` ${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleDeleteNote={deleteNote}
          handleAddNote={addNote}
        />
      </div>
    </div>
  );
}

export default App;
