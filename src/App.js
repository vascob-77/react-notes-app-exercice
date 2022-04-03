import NotesList from "./components/NotesList";
import {useState} from "react";
import {nanoid} from 'nanoid'

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
        <div className="App">
            <NotesList notes={notes} handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote}/>
        </div>
    );
}

export default App;
