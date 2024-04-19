'use client'
import { configureStore } from "@reduxjs/toolkit";
import AuthCheckerSlice from "../features/AuthCheckerSlice";
const store = configureStore({
    reducer: {
        AuthCheckerSlice,
    },
});

export default store;
