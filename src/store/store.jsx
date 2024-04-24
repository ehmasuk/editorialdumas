"use client";
import { configureStore } from "@reduxjs/toolkit";
import AuthCheckerSlice from "../features/AuthCheckerSlice";
import LoginPopupSlice from "../features/LoginPopupSlice";
const store = configureStore({
    reducer: {
        AuthCheckerSlice,
        LoginPopupSlice,
    },
});

export default store;
