// Reducers.tsx
import { IRobot, TLikeComment_0, TLikeComment_1, TLikeComment_2, TLikeComment_3 } from "~/interfaces/robot";
import { SELECT_ALL_USER, SELECT_USER, SET_USERS, SELECT_LIKE_COMMENT, SET_NEWS_FEED, SET_GROUP, SET_WATCH, SET_PAGE, SET_FRIEND, SET_MARKETPLACE, SET_NOTIFICATION, SET_SEARCH, SET_ROBOT_CONFIGS } from "./constants";
import { IUser } from "~/interfaces/users";

interface ActionUsersProp {
    type: string,
    payload: {
        users?: IUser[],
        id?: string,
        isSelected?: boolean,
        [key: string]: unknown,
    }
};

const UsersReducer = (state: IUser[], action: ActionUsersProp): IUser[] => {
    console.log("UsersReducer [action]: ", action);
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

type TLikeAndComment = { isSelected: boolean };
interface ActionRobotProp {
    type: string,
    payload: TLikeAndComment | TLikeComment_0 | TLikeComment_1 | TLikeComment_2 | TLikeComment_3 | IRobot
};

const RobotReducer = (state: IRobot, action: ActionRobotProp): IRobot => {
    console.log("RobotReducer [action]: ", action);
    switch (action.type) {
        case SET_ROBOT_CONFIGS: {
            const robotConfigs = action.payload as IRobot;
            return robotConfigs;
        }
        case SELECT_LIKE_COMMENT: {
            const isSelected = action.payload as TLikeAndComment;
            return ({
                ...state,
                interact: {
                    ...state.interact,
                    likeAndComment: {
                        ...state.interact.likeAndComment,
                        isSelected: isSelected.isSelected,
                    }
                }
            });
        }
        case SET_NEWS_FEED: {
            const newsFeed = action.payload as TLikeComment_1;
            return ({
                ...state,
                interact: {
                    ...state.interact,
                    likeAndComment: {
                        ...state.interact.likeAndComment,
                        newsFeed: newsFeed
                    }
                }
            });
        }
        case SET_GROUP: {
            const group = action.payload as TLikeComment_1;
            return ({
                ...state,
                interact: {
                    ...state.interact,
                    likeAndComment: {
                        ...state.interact.likeAndComment,
                        group: group
                    }
                }
            });
        }
        case SET_WATCH: {
            const watch = action.payload as TLikeComment_1;
            return ({
                ...state,
                interact: {
                    ...state.interact,
                    likeAndComment: {
                        ...state.interact.likeAndComment,
                        watch: watch
                    }
                }
            });
        }
        case SET_FRIEND: {
            const friend = action.payload as TLikeComment_2;
            return ({
                ...state,
                interact: {
                    ...state.interact,
                    likeAndComment: {
                        ...state.interact.likeAndComment,
                        friend: friend
                    }
                }
            });
        }
        case SET_PAGE: {
            const page = action.payload as TLikeComment_3;
            return ({
                ...state,
                interact: {
                    ...state.interact,
                    likeAndComment: {
                        ...state.interact.likeAndComment,
                        page: page
                    }
                }
            });
        }
        case SET_MARKETPLACE: {
            const marketplace = action.payload as TLikeComment_0;
            return ({
                ...state,
                interact: {
                    ...state.interact,
                    likeAndComment: {
                        ...state.interact.likeAndComment,
                        marketplace: marketplace
                    }
                }
            });
        }
        case SET_NOTIFICATION: {
            const notification = action.payload as TLikeComment_0;
            return ({
                ...state,
                interact: {
                    ...state.interact,
                    likeAndComment: {
                        ...state.interact.likeAndComment,
                        notification: notification
                    }
                }
            });
        }
        case SET_SEARCH: {
            const search = action.payload as TLikeComment_0;
            return ({
                ...state,
                interact: {
                    ...state.interact,
                    likeAndComment: {
                        ...state.interact.likeAndComment,
                        search: search
                    }
                }
            });
        }
        default: throw new Error("Invalid action");
    };
};

// tạo mới dữ liệu cho setting, call từ 

export {
    UsersReducer,
    RobotReducer
};