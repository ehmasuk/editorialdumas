import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const checkWishlist = () => {
    if (localStorage.getItem("wishlistItems")) {
        return JSON.parse(localStorage.getItem("wishlistItems"));
    } else {
        return [];
    }
};


const WishlistSlice = createSlice({
    name: "WishlistSlice",
    initialState: {
        wishlistItems: checkWishlist()
    },
    reducers: {
        addToWishlist: (state, action) => {
            const bookAlreadyInWishlist = state.wishlistItems.some((e) => e.id === action.payload.id);

            if (!bookAlreadyInWishlist) {
                state.wishlistItems = [...state.wishlistItems, action.payload];
            }



            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));

            toast.success("Libros agregados a su lista de deseos");
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter((e) => e.id !== action.payload.id);

            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
            toast.success("Libro eliminado de su lista de deseos");
        },
    },
});

export const { addToWishlist, removeFromWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
