import React from 'react';

function StickerForm({ title, onTitleChange, onSave }) {
    function onSubmit(e) {
        e.preventDefault();
        onSave();
    }
    return (
        <form action="" onSubmit={onSubmit}>
            <input type="text" value={title} onChange={onTitleChange} />
        </form>
    );
}

export default StickerForm;