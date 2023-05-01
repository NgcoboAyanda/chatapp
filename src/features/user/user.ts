import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../base/store';
import { UserInterface } from '../../interfaces/user/userInterfaces';


const initialState: UserInterface = {
    displayName: "👑 ●  Z o r r o",
    profilePicURL: "https://i.pinimg.com/564x/0a/0a/ae/0a0aaeefb39303351673a6593273c4b8.jpg",
    about: "I got my foot on they neck",
    phoneNumber: "+27 00 000 0000"
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
});

