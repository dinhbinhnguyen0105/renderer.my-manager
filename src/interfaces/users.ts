// users.ts

export interface IUser {
    info: {
        id: string,
        username: string,
        uid: string,
        password: string,
        twoFA: string,
        email: string,
        emailPassword: string,
        phoneNumber: string,
        birthDay: string
        gender: string
        avatar: string
        group: string,
        type: string
        note: string
        status: string
        createdAt: string
        updatedAt: string
    },
    browser: {
        name: string,
        mobile: {
            userAgent: string,
            screenHeight: number,
            screenWidth: number,
            viewportHeight: number,
            viewportWidth: number
        },
        desktop: {
            userAgent: string,
            screenHeight: number,
            screenWidth: number,
            viewportHeight: number,
            viewportWidth: number
        }
    },
    actions: {
        selected: boolean,
        [key: string]: unknown,
    }
};