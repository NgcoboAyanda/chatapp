import React, { useState } from 'react';

import './NewChatTab.css';
import { useAppDispatch, useAppSelector } from '../../base/hooks';
import { toggleTabIsOpen } from '../../features/ui/ui';
import ChatTabHeader from '../../components/ChatTabHeader/ChatTabHeader';
import InputSearch from '../../components/InputSearch/InputSearch';
import ContactCard from '../../components/ContactCard/ContactCard';

const NewChatTab = () => {
    const {contacts} = useAppSelector(state => state.data)
    const {NewChatTab}  = useAppSelector(state => state.ui);
    const [searchboxValue, setSearchboxValue] = useState<string>('')

    const dispatch = useAppDispatch();

    const renderContacts = () => {
        const arrangedContacts = [...contacts];
        return arrangedContacts.map((contact, i) => {
            return (
                <React.Fragment key={i}>
                    <ContactCard
                        contact={contact}
                    />
                </React.Fragment>
            );
        } );
    };

    return (
        <section className={`tab  new-chat-tab  ${NewChatTab.isOpen?'tab_visible':''}`}>
            <div>
                <ChatTabHeader
                    tabName="New Chat"
                    closeTab={ () => dispatch( toggleTabIsOpen({
                        tabName: "NewChatTab"
                    }) )}
                />
                <div className="new-chat-tab__search-box">
                    <div>
                        <InputSearch
                            value={searchboxValue}
                            placeholder="Search contacts"
                            handleChange={setSearchboxValue}
                        />
                    </div>
                </div>
                <div className="new-chat-tab__contacts">
                    <div>
                        <div className="new-chat-tab__contacts__label">
                            CONTACTS ON CHATAPP
                        </div>
                        <div className="new-chat-tab__contacts__list">
                            <div>
                                {renderContacts()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewChatTab;