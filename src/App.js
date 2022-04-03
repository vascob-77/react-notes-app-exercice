import NotesList from "./components/NotesList";
import {useEffect, useState} from "react";
import {nanoid} from 'nanoid'
import Search from "./components/Search";
import Header from "./components/Header";

function App() {



    // State

    const [notes, setNotes] = useState([])

    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    // Cycle de vie

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem('react-notes-app-data')
        );

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
        );
    }, [notes]);

    // Fonctions

    const handleAddNote = (text) => {
        const date = new Date();

        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }

        setNotes([...notes, newNote])
    }

    const handleDeleteNote = (id) => {
        const newNote = notes.filter((note) => note.id !== id)
        setNotes(newNote)
    }


    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="App">
                <Header handleToggleDarkMode={setDarkMode}/>
                <Search handleSearchNote={setSearchText}/>
                <NotesList notes={notes.filter((note) => note.text.toLocaleString().includes(searchText))}
                           handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote}/>
            </div>
        </div>
    );
}

export default App;
