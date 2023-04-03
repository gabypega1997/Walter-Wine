import { Wine, CartItem } from "@/common/types/wine.types";

export const addCartItem = (cartItems: CartItem[], productToAdd: Wine) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity! + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (
    cartItems: CartItem[],
    cartItemToRemove: Wine
) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem!.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity! - 1 }
            : cartItem
    );
};

export const clearCartItem = (cartItems: CartItem[], cartItemToClear: Wine) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
