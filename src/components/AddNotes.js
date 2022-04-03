import React, {useState} from 'react';


const AddNotes = ({handleAddNote}) => {

    const [noteText, setNoteText] = useState('');
    const remaining = 200;

    const handleChange = (e) => {
        if (e.target.value.length <= 200) {
            setNoteText(e.target.value);
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 1) {
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
                <small>{remaining - noteText.length} mot encore..</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNotes;