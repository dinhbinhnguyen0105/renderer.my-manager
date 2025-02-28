


type TReactions = "like" | "love" | "haha" | "wow" | "sad" | "angry";

export interface ILikeAndComment {
    isSelected: boolean,
    newsFeed: {
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
    },
    watch: {
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
    },
    friend: {
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
    },
    group: {
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
    },
    page: {
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
    },
    marketplace: {
        isSelected: boolean,
        value: number,
    },
    notification: {
        isSelected: boolean,
        value: number,
    },
    search: {
        isSelected: boolean,
        value: number,
    },
}

export const initLikeAndCommentState: ILikeAndComment = {
    isSelected: false,
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
