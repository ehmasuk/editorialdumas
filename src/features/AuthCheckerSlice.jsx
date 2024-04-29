import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const checkLogedin = () => {
    if (localStorage.getItem("isLogedin")) {
        return true;
    } else {
        return false;
    }
};

const AuthCheckerSlice = createSlice({
    name: "authcheck",
    initialState: {
        isLogedin: checkLogedin(),
    },
    reducers: {
        authCheck: (state) => {
            state.isLogedin = true;
        },
        authUnCheck: (state) => {
            localStorage.removeItem("isLogedin");
            state.isLogedin = false;
            toast.success("Loged out");
        },
    },
});

export const { authCheck, authUnCheck } = AuthCheckerSlice.actions;

export default AuthCheckerSlice.reducer;
