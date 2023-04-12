import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { takeUserDocumentFromAuth } from "@/common/utils/firebase/authentication.function";
import { DocumentData } from "firebase/firestore";
import { UserType } from "@/common/types/user.types";

export type UserState = {
    user: null | UserType;
};
const initialState: UserState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType | null>) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
