// actions.ts
import { IUser } from "~/interfaces/users";
import {
    SET_USERS,
    SELECT_USER,
    SELECT_ALL_USER,
} from "./constants";

interface SetUsersProps {
    users: IUser[],
};
const setUsers = (payload: SetUsersProps) => ({
    type: SET_USERS,
    payload: payload,
});

interface SelectUserProps {
    id: string,
    isSelected: boolean
};
const selectUser = (payload: SelectUserProps) => ({
    type: SELECT_USER,
    payload: payload,
});

interface SelectAllUserProps {
    isSelected: boolean
}
const selectAllUser = (payload: SelectAllUserProps) => ({
    type: SELECT_ALL_USER,
    payload: payload,
})

export {
    setUsers,
    selectUser,
    selectAllUser,
};