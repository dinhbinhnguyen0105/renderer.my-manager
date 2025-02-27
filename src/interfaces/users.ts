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
        selected: boolean | undefined,
        [key: string]: unknown,
    }
};
export type UsersContextType = [IUser[], Dispatch<any>];
