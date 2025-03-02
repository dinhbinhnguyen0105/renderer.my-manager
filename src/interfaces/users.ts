// users.ts
import { Dispatch } from "react";

export interface IUser {
    info: {
        id: string | undefined,
        username: string | undefined,
        uid: string | undefined,
        password: string | undefined,
        twoFA: string | undefined,
        email: string | undefined,
        emailPassword: string | undefined,
        phoneNumber: string | undefined,
        birthDay: string | undefined,
        gender: string | undefined,
        avatar: string | undefined,
        group: string | undefined,
        type: string | undefined,
        note: string | undefined,
        status: string | undefined,
        createdAt: string | undefined,
        updatedAt: string | undefined,
    },
    browser: {
        name: string | undefined,
        mobile: {
            userAgent: string | undefined,
            screenHeight: number | undefined,
            screenWidth: number | undefined,
            viewportHeight: number | undefined,
            viewportWidth: number | undefined,
        },
        desktop: {
            userAgent: string | undefined,
            screenHeight: number | undefined,
            screenWidth: number | undefined,
            viewportHeight: number | undefined,
            viewportWidth: number | undefined,
        }
    },
    actions: {
        isSelected: boolean | undefined,
        [key: string]: unknown,
    }
};
export type UsersContextType = [IUser[], Dispatch<any>];

export const initUsersState: IUser[] = [];

export const initUserState = {
    info: {
        id: "",
        username: "",
        uid: "",
        password: "",
        twoFA: "",
        email: "",
        emailPassword: "",
        phoneNumber: "",
        birthDay: undefined,
        gender: undefined,
        avatar: undefined,
        group: "",
        type: "",
        note: "",
        status: undefined,
        createdAt: undefined,
        updatedAt: undefined,
    },
    browser: {
        name: undefined,
        mobile: {
            userAgent: undefined,
            screenHeight: undefined,
            screenWidth: undefined,
            viewportHeight: undefined,
            viewportWidth: undefined
        },
        desktop: {
            userAgent: undefined,
            screenHeight: undefined,
            screenWidth: undefined,
            viewportHeight: undefined,
            viewportWidth: undefined
        }
    },
    actions: {
        isSelected: false,
    },
};