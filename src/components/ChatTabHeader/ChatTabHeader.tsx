import React from 'react';

import './ChatTabHeader.css';

interface ChatTabHeaderProps {
    tabName: string,
    closeTab: () => void,
}

const ChatTabHeader = ( {tabName, closeTab}: ChatTabHeaderProps ) => {

    return (
        <div className="chat-tab-header">
            <div>
                <button className="btn chat-tab-header__close-btn" onClick={closeTab}>
                    <div>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
                    </div>
                </button>
                <div className="chat-tab-header__tab-name">
                    <div>
                        {tabName}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ChatTabHeader;