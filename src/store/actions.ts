// actions.ts
import { IUser } from "~/interfaces/users";
import { TLikeComment_0, TLikeComment_1, TLikeComment_2, TLikeComment_3, IRobot, IRobotInteract } from "~/interfaces/robot";
import {
    SET_USERS,
    SELECT_USER,
    SELECT_ALL_USER,
    SELECT_INTERACT_LIKE_COMMENT,
    SET_INTERACT_NEWS_FEED,
    SET_INTERACT_WATCH,
    SET_INTERACT_GROUP,
    SET_INTERACT_PAGE,
    SET_INTERACT_FRIEND,
    SET_INTERACT_MARKETPLACE,
    SET_INTERACT_NOTIFICATION,
    SET_INTERACT_SEARCH,
    SET_ROBOT_INTERACT_CONFIG,
} from "./constants";
import { ISettings } from "~/interfaces/settings";

type SetUsersProps = {
    users: IUser[],
};
const setUsers = (payload: SetUsersProps) => ({
    type: SET_USERS,
    payload: payload,
});

type SelectUserProps = {
    id: string,
    isSelected: boolean
};
const selectUser = (payload: SelectUserProps) => ({
    type: SELECT_USER,
    payload: payload,
});

type SelectAllUserProps = {
    isSelected: boolean
};
const selectAllUser = (payload: SelectAllUserProps) => ({
    type: SELECT_ALL_USER,
    payload: payload,
});

const selectLikeAndComment = (payload: { isSelected: boolean }) => ({
    type: SELECT_INTERACT_LIKE_COMMENT,
    payload
});

const setMarketplace = (payload: TLikeComment_0) => ({
    type: SET_INTERACT_MARKETPLACE,
    payload,
});
const setNotification = (payload: TLikeComment_0) => ({
    type: SET_INTERACT_NOTIFICATION,
    payload,
});
const setSearch = (payload: TLikeComment_0) => ({
    type: SET_INTERACT_SEARCH,
    payload,
});
const setNewsFeed = (payload: TLikeComment_1) => {
    return ({
        type: SET_INTERACT_NEWS_FEED,
        payload,
    })
};
const setWatch = (payload: TLikeComment_1) => ({
    type: SET_INTERACT_WATCH,
    payload,
});
const setGroup = (payload: TLikeComment_1) => ({
    type: SET_INTERACT_GROUP,
    payload,
});
const setFriend = (payload: TLikeComment_2) => ({
    type: SET_INTERACT_FRIEND,
    payload,
});
const setPage = (payload: TLikeComment_3) => ({
    type: SET_INTERACT_PAGE,
    payload,
});

const setRobotInteractConfigs = (payload: IRobotInteract) => ({
    type: SET_ROBOT_INTERACT_CONFIG,
    payload,
});


export {
    setUsers,
    selectUser,
    selectAllUser,

    setRobotInteractConfigs,
    selectLikeAndComment,
    setMarketplace,
    setNotification,
    setSearch,
    setNewsFeed,
    setWatch,
    setGroup,
    setFriend,
    setPage,
};