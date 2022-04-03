import Note from "./Note";
import AddNotes from "./AddNotes";

const NotesList = ({notes,handleAddNote}) => {
    return (
        <div className="notes-list">
            {notes.map(({id, text, date}) => {
                return  <Note key={id} text={text} date={date}/>
            })}
            <AddNotes handleAddNote={handleAddNote}/>
        </div>
    );
};

export default NotesList;