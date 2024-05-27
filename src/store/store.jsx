import { configureStore } from "@reduxjs/toolkit";
import AuthCheckerSlice from "../features/AuthCheckerSlice";
import LoginPopupSlice from "../features/LoginPopupSlice";
import CombineSlice from "../features/CombineSlice";
import UserInfoSlice from "../features/UserInfoSlice";
import CartSlice from "../features/CartSlice";
import WishlistSlice from "../features/WishlistSlice";
const store = configureStore({
    reducer: {
        AuthCheckerSlice,
        LoginPopupSlice,
        CombineSlice,
        UserInfoSlice,
        CartSlice,
        WishlistSlice,
    },
});

export default store;
