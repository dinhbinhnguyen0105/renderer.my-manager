// actions.ts
import { IUser } from "~/interfaces/users";
import { TLikeComment_0, TLikeComment_1, TLikeComment_2, TLikeComment_3, IRobot } from "~/interfaces/robot";
import {
    SET_USERS,
    SELECT_USER,
    SELECT_ALL_USER,
    SELECT_LIKE_COMMENT,
    SET_NEWS_FEED,
    SET_WATCH,
    SET_GROUP,
    SET_PAGE,
    SET_FRIEND,
    SET_MARKETPLACE,
    SET_NOTIFICATION,
    SET_SEARCH,
    SET_SETTINGS,
    SET_ROBOT_CONFIGS,
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
    type: SELECT_LIKE_COMMENT,
    payload
});

const setMarketplace = (payload: TLikeComment_0) => ({
    type: SET_MARKETPLACE,
    payload,
});
const setNotification = (payload: TLikeComment_0) => ({
    type: SET_NOTIFICATION,
    payload,
});
const setSearch = (payload: TLikeComment_0) => ({
    type: SET_SEARCH,
    payload,
});
const setNewsFeed = (payload: TLikeComment_1) => {
    return ({
        type: SET_NEWS_FEED,
        payload,
    })
};
const setWatch = (payload: TLikeComment_1) => ({
    type: SET_WATCH,
    payload,
});
const setGroup = (payload: TLikeComment_1) => ({
    type: SET_GROUP,
    payload,
});
const setFriend = (payload: TLikeComment_2) => ({
    type: SET_FRIEND,
    payload,
});
const setPage = (payload: TLikeComment_3) => ({
    type: SET_PAGE,
    payload,
});

const setRobotConfigs = (payload: IRobot) => ({
    type: SET_ROBOT_CONFIGS,
    payload,
});


export {
    setUsers,
    selectUser,
    selectAllUser,

    setRobotConfigs,
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