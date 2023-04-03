import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, removeCartItem, clearCartItem } from "./cart.functions";
import { CartItem } from "@/common/types/wine.types";

type CartItemStateType = {
    cartItems: CartItem[] | [];
};

const CART_INITIAL_STATE: CartItemStateType = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: CART_INITIAL_STATE,
    reducers: {
        addItemToCart(state, action) {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart(state, action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        clearItemFromCart(state, action) {
            state.cartItems = clearCartItem(state.cartItems, action.payload);
        },
    },
});

export const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    cartSlice.actions;

export const cartReducer = cartSlice.reducer;
