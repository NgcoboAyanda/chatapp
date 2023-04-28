import React, { useState } from 'react';
import './ChatsToolbar.css';
import InputSearch from '../InputSearch/InputSearch';
import FilterBtn from '../FilterBtn/FilterBtn';


const ChatsToolbar = () => {
    const [searchboxValue, setSearchboxValue] = useState<string>('');
    const [filterEnabled, setFilterEnabled] = useState<boolean>(false);

    return (
        <div className="chats-toolbar">
            <div>
                <InputSearch
                    placeholder="Search of start new chat"
                    value={searchboxValue}
                    handleChange={setSearchboxValue}
                />
                <FilterBtn
                    enabled={filterEnabled}
                    icon={
                        <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet"version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path></svg>
                    }
                    toggle = {() => setFilterEnabled(!filterEnabled)}
                />
            </div>
        </div>
    )
}

export default ChatsToolbar;