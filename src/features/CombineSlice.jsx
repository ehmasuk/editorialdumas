import { createSlice } from "@reduxjs/toolkit";

const CombineSlice = createSlice({
    name: "combineslice",
    initialState: {
        loaderIsOpen: false,
        confettiIsOpen : false,
    },
    reducers: {
        showLoader: (state) => {
            state.loaderIsOpen = true;
        },
        hideLoader: (state) => {
            state.loaderIsOpen = false;
        },
        blastConfetti: (state) => {
            state.confettiIsOpen = true;
        },
    },
});

export const { showLoader, hideLoader, blastConfetti } = CombineSlice.actions;

export default CombineSlice.reducer;
