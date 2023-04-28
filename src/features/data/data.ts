import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../base/store';
import { ContactInterface, ChatInterface } from '../../interfaces/data/dataInterfaces';

// Define a type for the slice state
interface DataState {
    contacts: Array<ContactInterface>,
    chats: Array<ChatInterface>
};

const initialState: DataState = {
    contacts: [

    ],
    chats: [
        {
            name: "Linear Algebra Students University Of Heldenburg",
            type: "group",
            chatPicture: "https://i.pinimg.com/736x/16/9a/10/169a10315996fab765a9cea4027dd412.jpg",
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
                    author: {
                        displayName: "iris❤❤❤",
                        profilePicURL: "https://i.pinimg.com/564x/6c/66/6b/6c666bfcbbc29a8825a18f432e0dce9c.jpg",
                        phoneNumber: "+27 00 000 0000",
                        about: "the GOAT",
                    },
                    content: "lmaoo what the f?",
                    timeStamp: 1682679908001,
                    read: false
                },
                {
                    author: {
                        displayName: "malcomX",
                        profilePicURL: "",
                        phoneNumber: "+27 00 000 0005",
                        about: "miss me with that shiii",
                    },
                    content: "Shidd I saw that too😭😭",
                    timeStamp: 1682679908006,
                    read: false
                },
                {
                    author: {
                        displayName: "slatt🐍🐍🐍",
                        profilePicURL: "https://i.pinimg.com/736x/60/87/75/6087756f49924b9507b332de35cb0bdc.jpg",
                        phoneNumber: "+27 00 000 0000",
                        about: "the GOAT",
                    },
                    content: "Don't event try it, crusty ass mf😆",
                    timeStamp: 1682679908055,
                    read: false
                },
                {
                    author: {
                        displayName: "marvie",
                        profilePicURL: "https://i.pinimg.com/736x/fe/25/60/fe2560491a8495ad277535d6b704b41f.jpg",
                        phoneNumber: "+27 00 020 0000",
                        about: ""
                    },
                    content: "she spotted me onsite ☠",
                    timeStamp: 1682679908085,
                    read: false
                }
            ]
        }
    ]
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

    }
});

export default dataSlice;
