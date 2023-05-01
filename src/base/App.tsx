import React from 'react';

import './App.css';

import ChatsHeader from '../components/ChatsHeader/ChatsHeader';
import MessagesHeader from '../components/MessagesHeader/MessagesHeader';
import ChatsToolbar from '../components/ChatsToolbar/ChatsToolbar';
import ChatsList from '../components/ChatsList/ChatsList';
import UserProfileTab from '../tabs/UserProfileTab/UserProfileTab';
import { useAppDispatch, useAppSelector } from './hooks';
import { toggleTabIsOpen } from '../features/ui/ui';
import CommunitiesTab from '../tabs/CommunitiesTab/CommunitiesTab';
import NewChatTab from '../tabs/NewChatTab/NewChatTab';
import MessagesViewer from '../components/MessagesViewer/MessagesViewer';
import MessagesToolbar from '../components/MessagesToolbar/MessagesToolbar';
const chatBgImage = require('../images/chat-bg.png');


const App = () => {
  const {chatViewer: {openChat}} = useAppSelector(state => state.ui);

  const renderMessagesSection = () => {
    if(openChat !== null){
      //if there is an open chat
      return (
        <section className="app__messages">
          <div>
            <MessagesHeader/>
            <MessagesViewer/>
            <MessagesToolbar/>
          </div>
        </section>
      )
    }
    else{
      //if there is no open chat
    }
  }

  return (
    <div className="app">
      <div>
        <section className="app__chats">
          <div>
            {/* The header, toolbar and chat list */}
            <ChatsHeader/>
            <ChatsToolbar/>
            <ChatsList/>
            {/* All the popup tabs  */ }
            <UserProfileTab/>
            <CommunitiesTab/>
            <NewChatTab/>
          </div>
        </section>
        {renderMessagesSection()}
      </div>
    </div>
  );
}

export default App;
