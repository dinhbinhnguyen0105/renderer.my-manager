// actions.ts
import { IUser } from "~/interfaces/users";
import {
    SET_USERS,
    SELECT_USER,
    SELECT_ALL_USERS,
} from "./constants";

interface ActionsProps {
    users: IUser[],
    [key: string]: unknown,

};

const setUsers = (payload: ActionsProps) => ({
    type: SET_USERS,
    payload: payload,
});

export {
    setUsers
}