import React from 'react';

import './ChatsList.css';
import ArchivedBtn from '../ArchivedBtn/ArchivedBtn';
import { useAppSelector } from '../../base/hooks';
import ChatCard from '../ChatCard/ChatCard';

const ChatsList = () => {
    const { chats } = useAppSelector(state => state.data)

    const renderChatListCards = () => {
        return chats.map( (chat, i) => {
            //destructuring properties of chat object
            const {name, type, chatPicture, participants, messages} = chat
            return (
                <ChatCard
                    name={name}
                    type={type}
                    chatPicture={chatPicture}
                    participants={participants}
                    messages={messages}
                />
            )
        })
    }

    return (
        <div className="chats-list">
            <div>
                <ArchivedBtn
                    handleClick={() => console.log('clicked ChatsList')}
                />
                <div className="chats-list__cards">
                    <div>
                        {renderChatListCards()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatsList;