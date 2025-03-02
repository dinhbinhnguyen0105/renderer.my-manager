// Reducers.tsx
import { initRobotInteract, IRobot, IRobotInteract, TLikeComment_0, TLikeComment_1, TLikeComment_2, TLikeComment_3 } from "~/interfaces/robot";
import { SELECT_ALL_USER, SELECT_USER, SET_USERS, SELECT_INTERACT_LIKE_COMMENT, SET_INTERACT_NEWS_FEED, SET_INTERACT_GROUP, SET_INTERACT_WATCH, SET_INTERACT_PAGE, SET_INTERACT_FRIEND, SET_INTERACT_MARKETPLACE, SET_INTERACT_NOTIFICATION, SET_INTERACT_SEARCH, SET_ROBOT_INTERACT_CONFIG } from "./constants";
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
    payload: IRobotInteract | TLikeAndComment | TLikeComment_0 | TLikeComment_1 | TLikeComment_2 | TLikeComment_3 | IRobot
};

const RobotReducer = (state: IRobot, action: ActionRobotProp): IRobot => {
    console.log("RobotReducer [action]: ", action);
    switch (action.type) {
        case SET_ROBOT_INTERACT_CONFIG: {
            const robotInteractConfig = action.payload as IRobotInteract;
            return {
                ...state,
                interact: robotInteractConfig,
            };
        }
        case SELECT_INTERACT_LIKE_COMMENT: {
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
        case SET_INTERACT_NEWS_FEED: {
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
        case SET_INTERACT_GROUP: {
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
        case SET_INTERACT_WATCH: {
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
        case SET_INTERACT_FRIEND: {
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
        case SET_INTERACT_PAGE: {
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
        case SET_INTERACT_MARKETPLACE: {
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
        case SET_INTERACT_NOTIFICATION: {
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
        case SET_INTERACT_SEARCH: {
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

interface ActionRobotInteractProp {
    type: string,
    payload: IRobotInteract | TLikeAndComment | TLikeComment_0 | TLikeComment_1 | TLikeComment_2 | TLikeComment_3
};
const RobotInteractReducer = (state: IRobotInteract, action: ActionRobotInteractProp): IRobotInteract => {
    console.log("RobotInteractReducer [action]: ", action);
    switch (action.type) {
        case SET_ROBOT_INTERACT_CONFIG: {
            const robotInteractConfig = action.payload as IRobotInteract;
            return robotInteractConfig;
        }
        case SELECT_INTERACT_LIKE_COMMENT: {
            const isSelected = action.payload as TLikeAndComment;
            return ({
                ...state,
                likeAndComment: {
                    ...state.likeAndComment,
                    isSelected: isSelected.isSelected,
                }
            });
        }
        case SET_INTERACT_NEWS_FEED: {
            const newsFeed = action.payload as TLikeComment_1;
            return ({
                ...state,
                likeAndComment: {
                    ...state.likeAndComment,
                    newsFeed: newsFeed
                }
            });
        }
        case SET_INTERACT_GROUP: {
            const group = action.payload as TLikeComment_1;
            return ({
                ...state,
                likeAndComment: {
                    ...state.likeAndComment,
                    group: group
                }
            });
        }
        case SET_INTERACT_WATCH: {
            const watch = action.payload as TLikeComment_1;
            return ({
                ...state,
                likeAndComment: {
                    ...state.likeAndComment,
                    watch: watch
                }
            });
        }
        case SET_INTERACT_FRIEND: {
            const friend = action.payload as TLikeComment_2;
            return ({
                ...state,
                likeAndComment: {
                    ...state.likeAndComment,
                    friend: friend
                }
            });
        }
        case SET_INTERACT_PAGE: {
            const page = action.payload as TLikeComment_3;
            return ({
                ...state,
                likeAndComment: {
                    ...state.likeAndComment,
                    page: page
                }
            });
        }
        case SET_INTERACT_MARKETPLACE: {
            const marketplace = action.payload as TLikeComment_0;
            return ({
                ...state,
                likeAndComment: {
                    ...state.likeAndComment,
                    marketplace: marketplace
                }
            }
            );
        }
        case SET_INTERACT_NOTIFICATION: {
            const notification = action.payload as TLikeComment_0;
            return ({
                ...state,
                likeAndComment: {
                    ...state.likeAndComment,
                    notification: notification
                }
            }
            );
        }
        case SET_INTERACT_SEARCH: {
            const search = action.payload as TLikeComment_0;
            return ({
                ...state,
                likeAndComment: {
                    ...state.likeAndComment,
                    search: search
                }
            }
            );
        }
        default: throw new Error("Invalid action");
    };
};

export {
    UsersReducer,
    RobotReducer,
    RobotInteractReducer,
};