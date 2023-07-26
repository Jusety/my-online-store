import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import auth from "./reducers/auth";
import device from "./reducers/device";

export const store = configureStore({
    reducer: { auth, device },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
