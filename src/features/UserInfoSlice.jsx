import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;


export const getUserData = createAsyncThunk("getUserData", async (userId) => {
    const res = await axios.get(`${apiUrl}/user/info/${userId}`);
    return res.data.user;
});

const UserInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        userInfo: false,
        isLoading: false,
        error: false,
    },
    reducers: {
        resetUserInfo: (state) => {
            state.userInfo = false;
            state.isLoading = false;
            state.error = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUserData.fulfilled, (state, action) => {
            state.userInfo = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getUserData.rejected, (state) => {
            state.error = true;
            state.isLoading = false;
        });
    },
});

export const { resetUserInfo } = UserInfoSlice.actions;

export default UserInfoSlice.reducer;
