import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type {  RootState } from '../../base/store'

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
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleTabIsOpen: (state, action : PayloadAction<{ tabName: string }>) => {
            const { tabName } = action.payload;
            state[tabName].isOpen =!state[tabName].isOpen;
        }
    }
})

export const { toggleTabIsOpen } = uiSlice.actions;

export default uiSlice