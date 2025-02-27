// Reducers.tsx
import { SET_USERS } from "./constants";
import { IUser } from "~/interfaces/users";

interface Action {
    type: string,
    payload: {
        users: IUser[],
        [key: string]: unknown,
    }
};

const initUsersState: IUser[] = [];

const UsersReducer = (state: IUser[], action: Action): IUser[] => {
    console.log("Reducer.action: ", action);
    switch (action.type) {
        case SET_USERS: {
            return action.payload.users
        }
        default: throw new Error("Invalid action");
    };
};

export {
    initUsersState,
    UsersReducer,
};