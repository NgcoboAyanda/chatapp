import React from 'react';
import './App.css';
import ChatsHeader from '../components/ChatsHeader/ChatsHeader';
import MessageHeader from '../components/MessagesHeader/MessagesHeader';
import ChatsToolbar from '../components/ChatsToolbar/ChatsToolbar';
import ChatsList from '../components/ChatsList/ChatsList';
import UserProfileTab from '../tabs/UserProfileTab/UserProfileTab';
import { useAppDispatch, useAppSelector } from './hooks';
import { toggleTabIsOpen } from '../features/ui/ui';
import CommunitiesTab from '../tabs/CommunitiesTab/CommunitiesTab';
import NewChatTab from '../tabs/NewChatTab/NewChatTab';

const App = () => {

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
        <section className="app__messages">
          <div>
            <MessageHeader/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
