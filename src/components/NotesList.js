import Note from "./Note";
import AddNotes from "./AddNotes";

const NotesList = ({notes,handleAddNote,handleDeleteNote}) => {
    return (
        <div className="notes-list">
            {notes.map(({id, text, date}) => {
                return  <Note key={id} id={id} text={text} date={date} handleDeleteNote={handleDeleteNote}/>
            })}
            <AddNotes handleAddNote={handleAddNote}/>
        </div>
    );
};

export default NotesList;