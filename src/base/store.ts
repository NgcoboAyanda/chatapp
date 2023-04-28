import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "../features/data/data";
import { userSlice } from "../features/user/user";
import { uiSlice } from "../features/ui/ui";

const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        user: userSlice.reducer

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;