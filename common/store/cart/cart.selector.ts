import { CartItem } from "@/common/types/wine.types";
import { createSelector } from "reselect";

const selectCartReducer = (state: any) => state.cart;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
        (total:number, cartItem:CartItem) => total + cartItem.quantity! * cartItem.price,
        0
    )
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((total:number, cartItem:CartItem) => total + cartItem.quantity!, 0)
);
