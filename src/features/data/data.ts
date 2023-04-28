import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../base/store'
import { ContactInterface, ChatInterface } from '../../interfaces/data/dataInterfaces'

// Define a type for the slice state
interface DataState {
    contacts: Array<ContactInterface>,
    chats: Array<ChatInterface>
}

const initialState: DataState = {
    contacts: [

    ],
    chats: [
        {
            name: 'Linear Algebra Students',
            type: 'group',
            participants: [
                "+27 00 000 0000",
                "+27 01 000 0000",
                "+27 02 000 0000",
                "+27 03 000 0000",
                "+27 04 000 0000",
                "+27 05 000 0000",
                "+27 06 000 0000",
            ],
            messages: [
                {
                    author: "+27 05 000 0000",
                    content: "lmaoo what the f?",
                    timeStamp: "1682679908001"
                },
                {
                    author: "+27 04 000 0000",
                    content: "Shidd I saw that too😭😭",
                    timeStamp: "1682679908006"
                },
                {
                    author: "+27 02 000 0000",
                    content: "Don't event try it, crusty ass mf😀",
                    timeStamp: "1682679908055"
                },
                {
                    author: "+27 01 000 0000",
                    content: "smd, go get back for ya mans",
                    timeStamp: "1682679908085"
                }
            ]
        }
    ]
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

    }
})

export default dataSlice
