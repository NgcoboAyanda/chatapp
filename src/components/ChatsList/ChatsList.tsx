import React from 'react';

import './ChatsList.css';
import ArchivedBtn from '../ArchivedBtn/ArchivedBtn';

const ChatsList = () => {
    return (
        <div className="chats-list">
            <div>
                <ArchivedBtn
                    handleClick={() => console.log('clicked ChatsList')}
                />
            </div>
        </div>
    )
}

export default ChatsList;