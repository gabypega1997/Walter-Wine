import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.store";

export const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"], // only persist the "user" slice of state
};

const rootReducer = combineReducers({
    user: persistReducer(persistConfig, userReducer),
    // add other reducers here, if any
});

export default rootReducer;