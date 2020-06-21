import React, { useState, useEffect } from 'react';
import StickerItem from './StickerItem';
import service from '../service';
import StickerForm from './StickerForm';

function Sticker() {
    const [StickerItems, setStickerItems] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        service.get().then(({ data }) => setStickerItems(data));
    }, []);

    function toggleItem(item) {
        service.put(item.id, { ...item, isDone: !item.isDone }).then(({ data }) =>
            setStickerItems(
                StickerItems.map((item) => (item.id === data.id ? data : item))
            )
        );
    }

    function onTitleChange(e) {
        setTitle(e.target.value);
    }

    function onSave() {
        service.post('', {
            title,
            isDone: false,
        }).then(({ data }) => setStickerItems([...StickerItems, data]));

        setTitle('');
    }

    return (
        <>
            <ul>
                {StickerItems.map((item) => (
                    <StickerItem key={item.id} item={item} onToggle={toggleItem} />
                ))}
            </ul>
            <StickerForm
                title={title}
                onTitleChange={onTitleChange}
                onSave={onSave}
            />
        </>
    );
}

export default Sticker;