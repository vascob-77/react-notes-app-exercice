import Note from "./Note";

const NotesList = ({notes}) => {
    return (
        <div className="notes-list">
            {notes.map(({id,text,date}) => {
               return <Note key={id} text={text} date={date}/>
            })}
        </div>
    );
};

export default NotesList;