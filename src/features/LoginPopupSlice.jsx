import { createSlice } from "@reduxjs/toolkit";

const LoginPopupSlice = createSlice({
    name: "loginpopupslice",
    initialState: {
        loginPopupIsOpen: false,
    },
    reducers: {
        showLoginPopup: (state) => {
            state.loginPopupIsOpen = true;
        },
        hideLoginPopup: (state) => {
            state.loginPopupIsOpen = false;
        },
    },
});

export const { showLoginPopup, hideLoginPopup } = LoginPopupSlice.actions;

export default LoginPopupSlice.reducer;
