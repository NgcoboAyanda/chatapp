import React from 'react'
import { ChatInterface } from '../../../interfaces/data/dataInterfaces'

import './ChatCard.css'

interface ChatCardProps extends ChatInterface {

}

const ChatCard = ( { name, type, participants, messages } : ChatCardProps ) => {
    return (
        <div className="chat-card">
            <div>
                Chat Card
            </div>
        </div>
    )
}

export default ChatCard