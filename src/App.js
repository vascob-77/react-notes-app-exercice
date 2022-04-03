import NotesList from "./components/NotesList";
import {useState} from "react";
import {nanoid} from 'nanoid'
import Search from "./components/Search";
import Header from "./components/Header";

function App() {


    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "notes notes notes",
            date: "15/04/2022"
        },
        {
            id: nanoid(),
            text: "Test2",
            date: "14/04/2022"
        },
        {
            id: nanoid(),
            text: "Test3",
            date: "06/04/2022"
        },
    ])

    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

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

    // const handleSearchNote = (searchText) => {
    //     setSearchText(searchText)
    // }

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
