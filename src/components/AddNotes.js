import React,{useState} from 'react';



const AddNotes = ({handleAddNote}) => {

    const [noteText,setNoteText] = useState('');

    const handleChange = (e) => {
        setNoteText(e.target.value);
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 1){
            handleAddNote(noteText)
            setNoteText('')
        }
    }

    return (
        <div className="note new">
            <textarea
                onChange={handleChange}
                value={noteText}
                rows='8'
                cols='10'
                placeholder='Ajoute une note 😀'
            />
                <div className="note-footer">
                    <small>200 mot encore..</small>
                    <button className="save" onClick={handleSaveClick}>Save</button>
                </div>
        </div>
    );
};

export default AddNotes;