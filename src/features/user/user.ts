import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../base/store'
import { UserInterface } from '../../interfaces/user/userInterfaces'


const initialState: UserInterface = {
    displayName: "Zorro",
    profilePicURL: "",
    about: "I got my foot on they neck",
    phoneNumber: "+27 00 000 0000"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

