// LikeAndComment.tsx
import { useState, useContext, useEffect, useCallback } from "react";
import * as actions from "~/store/actions";
import { RobotContext } from "~/store/Contexts";

import LikeCommentType_0 from "./LikeCommentType_0";
import LikeCommentType_1 from "./LikeCommentType_1";
import LikeCommentType_2 from "./LikeCommentType_2";
import LikeCommentType_3 from "./LikeCommentType_3";
import styles from "./LikeAndComment.module.scss";

const LikeAndComment: React.FC = () => {
    const [robotState, robotDispatch] = useContext(RobotContext);

    type HandlerInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => void;
    const handlerNewsFeed: HandlerInputChange = useCallback((e, key) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotDispatch(actions.setNewsFeed({
            ...robotState.interact.likeAndComment.newsFeed,
            [key]: key === "like" || key === "comment" || key === "share"
                ? {
                    ...robotState.interact.likeAndComment.newsFeed[key],
                    [name]: newValue,
                }
                : newValue
        }));
    }, [robotDispatch, robotState.interact.likeAndComment.newsFeed])
    const handlerGroup: HandlerInputChange = useCallback((e, key) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotDispatch(actions.setGroup({
            ...robotState.interact.likeAndComment.group,
            [key]: key === "like" || key === "comment" || key === "share"
                ? {
                    ...robotState.interact.likeAndComment.group[key],
                    [name]: newValue,
                }
                : newValue
        }));
    }, [robotDispatch, robotState.interact.likeAndComment.group])
    const handlerWatch: HandlerInputChange = useCallback((e, key) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotDispatch(actions.setWatch({
            ...robotState.interact.likeAndComment.watch,
            [key]: key === "like" || key === "comment" || key === "share"
                ? {
                    ...robotState.interact.likeAndComment.watch[key],
                    [name]: newValue,
                }
                : newValue
        }));
    }, [robotDispatch, robotState.interact.likeAndComment.watch])
    const handlerPage: HandlerInputChange = useCallback((e, key) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotDispatch(actions.setPage({
            ...robotState.interact.likeAndComment.page,
            [key]: key === "like" || key === "comment" || key === "share" || key === "invite"
                ? {
                    ...robotState.interact.likeAndComment.page[key],
                    [name]: newValue,
                }
                : newValue
        }));
    }, [robotDispatch, robotState.interact.likeAndComment.page])

    const handleFriend: HandlerInputChange = useCallback((e, key) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotDispatch(actions.setFriend({
            ...robotState.interact.likeAndComment.friend,
            [key]: key === "like" || key === "comment" || key === "poke" || key === "rePoke"
                ? {
                    ...robotState.interact.likeAndComment.friend[key],
                    [name]: newValue,
                }
                : newValue
        }));
    }, [robotDispatch, robotState.interact.likeAndComment.friend]);
    const handleMarketplace: HandlerInputChange = useCallback((e, key) => {
        const { value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotDispatch(actions.setMarketplace({
            ...robotState.interact.likeAndComment.marketplace,
            [key]: newValue
        }));
    }, [robotDispatch, robotState.interact.likeAndComment.marketplace]);
    const handleNotification: HandlerInputChange = useCallback((e, key) => {
        const { value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotDispatch(actions.setNotification({
            ...robotState.interact.likeAndComment.notification,
            [key]: newValue
        }));
    }, [robotDispatch, robotState.interact.likeAndComment.notification]);
    const handleSearch: HandlerInputChange = useCallback((e, key) => {
        const { value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotDispatch(actions.setSearch({
            ...robotState.interact.likeAndComment.search,
            [key]: newValue
        }));
    }, [robotDispatch, robotState.interact.likeAndComment.search]);

    return (
        <div className={styles.likeAndComment}>
            <div className={styles.likeAndCommentContainer}>
                <div className={styles.thisSelected}>
                    <input type="checkbox" id="likeAndComment" name="isSelected" checked={robotState.interact.likeAndComment.isSelected} onChange={() => robotDispatch(actions.selectLikeAndComment({ isSelected: !robotState.interact.likeAndComment.isSelected }))} />
                    <label htmlFor="likeAndComment">
                        Select Like & comment
                    </label>
                </div>
                {
                    robotState.interact.likeAndComment.isSelected && (
                        <div className={styles.likeAndCommentContent}>
                            <div className={styles.likeAndCommentSection}>
                                <LikeCommentType_1 nodes={{ label: "News feed", payload: robotState.interact.likeAndComment.newsFeed }} handleInputChange={handlerNewsFeed} />
                                <LikeCommentType_1 nodes={{ label: "Watch", payload: robotState.interact.likeAndComment.watch }} handleInputChange={handlerWatch} />
                                <LikeCommentType_1 nodes={{ label: "Group", payload: robotState.interact.likeAndComment.group }} handleInputChange={handlerGroup} />
                                <LikeCommentType_2 nodes={{ label: "Friend", payload: robotState.interact.likeAndComment.friend }} handleInputChange={handleFriend} />
                                <LikeCommentType_3 nodes={{ label: "Page", payload: robotState.interact.likeAndComment.page }} handleInputChange={handlerPage} />
                                <LikeCommentType_0 nodes={{ label: "Marketplace", payload: robotState.interact.likeAndComment.marketplace }} handleInputChange={handleMarketplace} />
                                <LikeCommentType_0 nodes={{ label: "Notification", payload: robotState.interact.likeAndComment.notification }} handleInputChange={handleNotification} />
                                <LikeCommentType_0 nodes={{ label: "Search", payload: robotState.interact.likeAndComment.search }} handleInputChange={handleSearch} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default LikeAndComment