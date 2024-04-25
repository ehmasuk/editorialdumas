"use client";
import { configureStore } from "@reduxjs/toolkit";
import AuthCheckerSlice from "../features/AuthCheckerSlice";
import LoginPopupSlice from "../features/LoginPopupSlice";
import CombineSlice from "../features/CombineSlice";
const store = configureStore({
    reducer: {
        AuthCheckerSlice,
        LoginPopupSlice,
        CombineSlice
    },
});

export default store;
