import React from 'react';
import {MdSearch} from "react-icons/md";

const Search = ({searchNote}) => {
    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3em"/>
            <input onChange={(e) => searchNote(e.target.value)} type="text" placeholder="Rechercher une note"/>
        </div>
    );
};

export default Search;