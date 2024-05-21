import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const checkCart = () => {
    if (localStorage.getItem("cartItems")) {
        return JSON.parse(localStorage.getItem("cartItems"));
    } else {
        return [];
    }
};

const calcTotalAmount = () => {
    const cartItems = checkCart();
    let result = 0;
    cartItems.forEach((e) => {
        result = result + Number(e.discount_price);
    });
    return result.toFixed(2);
};

const CartSlice = createSlice({
    name: "CartSlice",
    initialState: {
        cartItems: checkCart(),
        totalPrice: calcTotalAmount(),
    },
    reducers: {
        addToCart: (state, action) => {
            const bookAlreadyInCart = state.cartItems.some((e) => e.id === action.payload.id);

            if (!bookAlreadyInCart) {
                state.cartItems = [...state.cartItems, action.payload];
            }

            let result = 0;
            state.cartItems.forEach((e) => {
                result = result + Number(e.discount_price);
            });
            state.totalPrice = result.toFixed(2);

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            toast.success("Libro agregado en el carrito");
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((e) => e.id !== action.payload.id);

            let result = 0;
            state.cartItems.forEach((e) => {
                result = result + Number(e.discount_price);
            });
            state.totalPrice = result.toFixed(2);

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.success("Libro eliminado del carrito");
        },
    },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
