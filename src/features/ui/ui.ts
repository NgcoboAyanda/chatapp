import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type {  RootState } from '../../base/store'

//Define a type for the slice state
interface uiSliceState {
    profile: {
        open: boolean
    },
    communities: {
        open: boolean
    },
    newChat: {
        open: boolean
    },
    archived: {
        open: boolean
    },
    chatList: {
        filterEnabled: boolean
    },
    chatViewer: {
        currentChat: any
    }
}

const initialState : uiSliceState = {
    profile: {
        open: false
    },
    communities: {
        open: false
    },
    newChat: {
        open: false
    },
    archived: {
        open: false
    },
    chatList: {
        filterEnabled: false
    },
    chatViewer: {
        currentChat: null
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {

    }
})

export default uiSlice