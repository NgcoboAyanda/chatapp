import React from 'react';
import './App.css';
import ChatsHeader from '../components/ChatsHeader/ChatsHeader';
import MessageHeader from '../components/MessagesHeader/MessagesHeader';
import ChatsToolbar from '../components/ChatsToolbar/ChatsToolbar';

const App = () => {
  return (
    <div className="app">
      <div>
        <section className="app__chats">
          <div>
            <ChatsHeader/>
            <ChatsToolbar/>
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
