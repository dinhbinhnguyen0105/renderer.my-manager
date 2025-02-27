// Reducers.tsx
import { SELECT_ALL_USER, SELECT_USER, SET_USERS } from "./constants";
import { IUser } from "~/interfaces/users";

interface Action {
    type: string,
    payload: {
        users?: IUser[],
        id?: string,
        isSelected?: boolean,
        [key: string]: unknown,
    }
};

const initUsersState: IUser[] = [];

const UsersReducer = (state: IUser[], action: Action): IUser[] => {
    console.log("Reducer.action: ", action);
    switch (action.type) {
        case SET_USERS: {
            return action.payload.users || [];
        }
        case SELECT_USER: {
            if (action.payload.id) {
                return state.map(user => {
                    if (user.info.id === action.payload.id) {
                        const newUser = {
                            ...user,
                            actions: {
                                ...user.actions,
                                isSelected: action.payload.isSelected,
                            },
                        };
                        return newUser;
                    }
                    return user;
                })
            } else { return state; };
        }
        case SELECT_ALL_USER: {
            return state.map(user => ({
                ...user,
                actions: {
                    ...user.actions,
                    isSelected: action.payload.isSelected,
                }
            }));
        }
        default: throw new Error("Invalid action");
    };
};

export {
    initUsersState,
    UsersReducer,
};