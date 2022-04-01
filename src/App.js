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

    return (
        <div className="App">
            <NotesList notes={notes}/>
        </div>
    );
}

export default App;
