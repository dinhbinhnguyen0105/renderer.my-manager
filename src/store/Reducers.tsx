// Reducers.tsx
import { SET_USERS } from "./constants";
import { IUser } from "~/interfaces/users";

interface Action {
    type: string,
    payload: {
        [key: string]: unknown,
    }
}
const SearchReducer = (state: IUser[], action: Action) => {
    switch (action.type) {
        case SET_USERS: {
            return [
                ...state,
                action.payload
            ]
        }
            throw new Error("Invalid action");
    };
};

export {
    SearchReducer,
};