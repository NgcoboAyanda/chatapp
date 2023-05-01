import React from "react";

import './MessagesHeader.css';
import { useAppSelector } from "../../base/hooks";
import Image from "../Image/Image";
import SubMenuBtn from "../SubMenuBtn/SubMenuBtn";

const MessageHeader = () => {
    const {chatViewer:{openChat}} = useAppSelector(state => state.ui);
    
    const renderSubmenuOptions = () : Array<{label: string}> => {
        if(openChat?.type === "group"){
            return [
                {
                    label: "Group info"
                },
                {
                    label: "Select Messages"
                },
                {
                    label: "Mute notifications"
                },
                {
                    label: "Clear messages"
                },
                {
                    label: "Exit group"
                }
            ]
        }
        else if(openChat?.type === "contact"){
            return [
                {
                    label: "Contact info",
                },
                {
                    label: "Select messages"
                },
                {
                    label: "Close chat"
                },
                {
                    label: "Mute notifications"
                },
                {
                    label: "Disappearing messages"
                },
                {
                    label: "Clear chat"
                },
                {
                    label: "Delete chat"
                },
                {
                    label: "Report"
                },
                {
                    label: "Block"
                }
            ]
        }
        else {
            return [];
        }
    }

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
                <div className="messages-header__submenu-btn">
                    <div>
                        <SubMenuBtn
                            options={renderSubmenuOptions()}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageHeader;