import { UserType } from "@/common/types/user.types";


export const selectUser = (state: any):UserType => state.user.user;
