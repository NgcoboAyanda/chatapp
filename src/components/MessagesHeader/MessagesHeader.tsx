import React from "react";

import './MessagesHeader.css';
import { useAppSelector } from "../../base/hooks";
import Image from "../Image/Image";

const MessageHeader = () => {
    const {chatViewer:{openChat}} = useAppSelector(state => state.ui);  
    
    return (
        <div className="messages-header">
            <div>
                <div className="messages-header__chat-picture">
                    <div>
                        <Image
                            src={openChat?.chatPicture}
                            height={40}
                            width={40}
                        />
                    </div>
                </div>
                <div className="messages-header__chat-name">
                    {openChat?.name}
                </div>
            </div>
        </div>
    )
}

export default MessageHeader;