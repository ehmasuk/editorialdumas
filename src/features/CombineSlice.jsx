import { createSlice } from "@reduxjs/toolkit";

const CombineSlice = createSlice({
    name: "combineslice",
    initialState: {
        loaderIsOpen: false,
    },
    reducers: {
        showLoader: (state) => {
            state.loaderIsOpen = true;
        },
        hideLoader: (state) => {
            state.loaderIsOpen = false;
        },
    },
});

export const { showLoader, hideLoader } = CombineSlice.actions;

export default CombineSlice.reducer;
