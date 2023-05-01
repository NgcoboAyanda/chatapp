import React from 'react';

import './ChatsList.css';
import ArchivedBtn from '../ArchivedBtn/ArchivedBtn';
import { useAppDispatch, useAppSelector } from '../../base/hooks';
import ChatCard from '../ChatCard/ChatCard';
import { setChatViewerOpenChat } from '../../features/ui/ui';

const ChatsList = () => {
    const { chatViewer: { openChat }} = useAppSelector(state => state.ui);
    const { chats } = useAppSelector(state => state.data)

    const dispatch = useAppDispatch();

    const renderChatListCards = () => {
        return chats.map( (chat, i) => {
            //destructuring properties of chat object
            return (
                <React.Fragment key={i}>
                    <ChatCard
                        chat={chat}
                        isCurrentlyOpen={openChat !== null && openChat.id === chat.id?true:false}
                        handleClick={() => {
                            dispatch(
                                setChatViewerOpenChat({
                                    chat: chat
                                })
                            )
                        }}
                    />
                </React.Fragment>
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