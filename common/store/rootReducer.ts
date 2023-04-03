import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.store";
import { cartReducer } from "./cart/cart.reducer";

export const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "cart"], // only persist the "user" slice of state
};

const rootReducer = combineReducers({
    user: persistReducer(persistConfig, userReducer),
    cart: persistReducer(persistConfig, cartReducer),
    // add other reducers here, if any
});

export default rootReducer;
