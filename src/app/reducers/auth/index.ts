import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";

interface IAuthState {
    isAuth: boolean;
    error: null | string;
    isLoading: boolean;
    user: IUser;
    isModalLoginOpen: boolean;
}

const initialState: IAuthState = {
    isAuth: false,
    error: null,
    isLoading: false,
    user: {} as IUser,
    isModalLoginOpen: false,
};

export const authSlicer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        setIsModalLoginOpen(state, action: PayloadAction<boolean>) {
            state.isModalLoginOpen = action.payload;
        },
    },
});

export default authSlicer.reducer;
