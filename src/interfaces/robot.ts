import { Dispatch } from "react";

export type TReactions = "like" | "love" | "haha" | "wow" | "sad" | "angry";

export type TLikeComment_0 = {
    isSelected: boolean,
    value: number,
};
export type TLikeComment_1 = {
    isSelected: boolean,
    value: number,
    like: {
        isSelected: boolean,
        value: TReactions[], //count ["like", "love", "haha", "wow", "sad", "angry"]
    },
    share: {
        isSelected: boolean,
        value: number,
    },
    comment: {
        isSelected: boolean,
        value: string[],
    },
};
export type TLikeComment_2 = {
    isSelected: boolean,
    isOnline: boolean,
    like: {
        isSelected: boolean,
        value: TReactions[], //count ["like", "love", "haha", "wow", "sad", "angry"]
    },
    comment: {
        isSelected: boolean,
        value: string[],
    },
    poke: {
        isSelected: boolean,
        value: number,
    },
    rePoke: {
        isSelected: boolean,
        value: number,
    },
};
export type TLikeComment_3 = {
    isSelected: boolean,
    value: number,
    like: {
        isSelected: boolean,
        value: TReactions[], //count ["like", "love", "haha", "wow", "sad", "angry"]
    },
    share: {
        isSelected: boolean,
        value: number,
    },
    comment: {
        isSelected: boolean,
        value: string[],
    },
    invite: {
        isSelected: boolean,
        value: number,
        url: string,
    }
};
export interface ILikeAndComment {
    isSelected: boolean,
    newsFeed: TLikeComment_1,
    watch: TLikeComment_1,
    group: TLikeComment_1,
    friend: TLikeComment_2,
    page: TLikeComment_3,
    marketplace: TLikeComment_0,
    notification: TLikeComment_0,
    search: TLikeComment_0,
};

export interface IRobotInteract {
    likeAndComment: ILikeAndComment,
}

export interface IRobot {
    interact: IRobotInteract
};

export type RobotContextType = [IRobot, Dispatch<any>];
export type RobotInteractContextType = [IRobotInteract, Dispatch<any>];

const initLikeAndCommentState: ILikeAndComment = {
    isSelected: false,
    friend: {
        isSelected: false,
        isOnline: false,
        like: {
            isSelected: false,
            value: [], //count ["like", "love", "haha", "wow", "sad", "angry"]
        },
        comment: {
            isSelected: false,
            value: [],
        },
        poke: {
            isSelected: false,
            value: -1,
        },
        rePoke: {
            isSelected: false,
            value: -1,
        },
    },
    newsFeed: {
        isSelected: false,
        value: 0,
        like: {
            isSelected: false,
            value: [], //count ["like", "love", "haha", "wow", "sad", "angry"]
        },
        share: {
            isSelected: false,
            value: -1,
        },
        comment: {
            isSelected: false,
            value: [],
        },
    },
    watch: {
        isSelected: false,
        value: -1,
        like: {
            isSelected: false,
            value: [], //count ["like", "love", "haha", "wow", "sad", "angry"]
        },
        share: {
            isSelected: false,
            value: -1,
        },
        comment: {
            isSelected: false,
            value: [],
        },
    },
    group: {
        isSelected: false,
        value: -1,
        like: {
            isSelected: false,
            value: [], //count ["like", "love", "haha", "wow", "sad", "angry"]
        },
        share: {
            isSelected: false,
            value: -1,
        },
        comment: {
            isSelected: false,
            value: [],
        },
    },
    page: {
        isSelected: false,
        value: -1,
        like: {
            isSelected: false,
            value: [], //count ["like", "love", "haha", "wow", "sad", "angry"]
        },
        share: {
            isSelected: false,
            value: -1,
        },
        comment: {
            isSelected: false,
            value: [],
        },
        invite: {
            isSelected: false,
            value: -1,
            url: "",
        }
    },
    marketplace: {
        isSelected: false,
        value: -1,
    },
    notification: {
        isSelected: false,
        value: -1,
    },
    search: {
        isSelected: false,
        value: -1,
    },
};

const initRobotInteract: IRobotInteract = {
    likeAndComment: initLikeAndCommentState,
};

const initRobotState: IRobot = {
    interact: initRobotInteract,
};

export {
    initRobotState,
    initRobotInteract,
    initLikeAndCommentState,
}