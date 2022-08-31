import React from "react";
import Input from "./Input";

function NoteHeader({ search, setQuery }) {
    return (
        <div className="note-app__header">
            <h1>win Notes</h1>
            <div className="note-search">
                <Input
                    value={search}
                    onChange={setQuery}
                    type='search'
                    id='search_note'
                    name='search_note'
                    placeholder="cari catatan" />
            </div>
        </div>
    );
}

export default NoteHeader;