import { CartItem, Wine } from "./wine.types";

export type SignInData = {
    email: string;
    password: string;
};

export type SignupFormData = {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type UserType = {
    displayName: string;
    email: string;
    createDate: string;
    photoURL: string;
    orders: [] | CartItem[];
    uid:  string;
};
