import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Notes = () => {
    return (
        <div className="note">
            <span>Hey, c'est t'as première note ! Hourraaa </span>
            <div className="note-footer">
                <small>13/04/2021</small>
                <MdDeleteForever className="delete-icons" size='1.3em'/>
            </div>
        </div>
    );
};

export default Notes;