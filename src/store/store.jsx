"use client";
import { configureStore } from "@reduxjs/toolkit";
import AuthCheckerSlice from "../features/AuthCheckerSlice";
import LoginPopupSlice from "../features/LoginPopupSlice";
import CombineSlice from "../features/CombineSlice";
import UserInfoSlice from "../features/UserInfoSlice";
const store = configureStore({
    reducer: {
        AuthCheckerSlice,
        LoginPopupSlice,
        CombineSlice,
        UserInfoSlice
    },
});

export default store;
