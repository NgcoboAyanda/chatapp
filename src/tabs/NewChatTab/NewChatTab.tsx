import React from 'react';

import './NewChatTab.css';
import { useAppDispatch, useAppSelector } from '../../base/hooks';
import { toggleTabIsOpen } from '../../features/ui/ui';
import ChatTabHeader from '../../components/ChatTabHeader/ChatTabHeader';

const NewChatTab = () => {
    const {NewChatTab}  = useAppSelector(state => state.ui);

    const dispatch = useAppDispatch();

    return (
        <section className={`tab  new-chat-tab  ${NewChatTab.isOpen?'tab_visible':''}`}>
            <div>
                <ChatTabHeader
                    tabName="New Chat"
                    closeTab={ () => dispatch( toggleTabIsOpen({
                        tabName: "NewChatTab"
                    }) )}
                />
            </div>
        </section>
    )
}

export default NewChatTab;