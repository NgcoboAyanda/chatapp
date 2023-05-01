import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type {  RootState } from '../../base/store'
import { ChatInterface } from '../../interfaces/data/dataInterfaces';

//Define a type for the slice state
interface uiSliceState {
    [key: string]: {
        [key: string]: any,
    };
    UserProfileTab: {
        isOpen: boolean
    },
    CommunitiesTab: {
        isOpen: boolean
    },
    NewChatTab: {
        isOpen: boolean
    },
    ArchivedTab: {
        isOpen: boolean
    },
    chatViewer: {
        openChat: null | ChatInterface
    }
    
}

const initialState : uiSliceState = {
    /* these popup on the left side of the screen */
    UserProfileTab: {
        isOpen: false
    },
    CommunitiesTab: {
        isOpen: false
    },
    NewChatTab: {
        isOpen: false
    },
    ArchivedTab: {
        isOpen: false
    },
    chatViewer: {
        openChat: null
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        //Toggle tab open/closed
        toggleTabIsOpen: (state, action : PayloadAction<{ tabName: string }>) => {
            const { tabName } = action.payload;
            state[tabName].isOpen =!state[tabName].isOpen;
        },
        //set the currently open chat
        setChatViewerOpenChat: (state, action : PayloadAction<{ chat: ChatInterface }> ) => {
            const { chat } = action.payload;
            state.chatViewer.openChat = chat;
        }
    }
})

export const { toggleTabIsOpen, setChatViewerOpenChat } = uiSlice.actions;

export default uiSlice