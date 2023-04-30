import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "../features/data/data";
import { userSlice } from "../features/user/user";
import { uiSlice } from "../features/ui/ui";

const store = configureStore({
    devTools: true,
    reducer: {
        data: dataSlice.reducer,
        user: userSlice.reducer,
        ui: uiSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;