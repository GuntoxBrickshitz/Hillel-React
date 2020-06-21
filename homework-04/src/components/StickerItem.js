import React from 'react';

function StickerItem({ item, onToggle }) {
    return (
        <li onClick={onToggle.bind(null, item)} style={getStyles(item)}>
            {item.title}
        </li>
    );
}

export default StickerItem;

function getStyles(item) {
    return {
        backgroundColor: item.isDone ? 'green' : 'red',
    };
}