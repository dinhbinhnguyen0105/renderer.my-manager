// LikeAndComment.tsx
import { useContext, useCallback } from "react";
import * as actions from "~/store/actions";
import { RobotInteractContext } from "~/store/Contexts";

import LikeCommentType_0 from "./LikeCommentType_0";
import LikeCommentType_1 from "./LikeCommentType_1";
import LikeCommentType_2 from "./LikeCommentType_2";
import LikeCommentType_3 from "./LikeCommentType_3";
import styles from "./LikeAndComment.module.scss";

const LikeAndComment: React.FC = () => {
    const [robotInteractState, robotInteractDispatch] = useContext(RobotInteractContext);

    type HandlerInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => void;
    const handlerNewsFeed: HandlerInputChange = useCallback((e, key) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotInteractDispatch(actions.setNewsFeed({
            ...robotInteractState.likeAndComment.newsFeed,
            [key]: key === "like" || key === "comment" || key === "share"
                ? {
                    ...robotInteractState.likeAndComment.newsFeed[key],
                    [name]: newValue,
                }
                : newValue
        }));
    }, [robotInteractDispatch, robotInteractState.likeAndComment.newsFeed])
    const handlerGroup: HandlerInputChange = useCallback((e, key) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotInteractDispatch(actions.setGroup({
            ...robotInteractState.likeAndComment.group,
            [key]: key === "like" || key === "comment" || key === "share"
                ? {
                    ...robotInteractState.likeAndComment.group[key],
                    [name]: newValue,
                }
                : newValue
        }));
    }, [robotInteractDispatch, robotInteractState.likeAndComment.group])
    const handlerWatch: HandlerInputChange = useCallback((e, key) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotInteractDispatch(actions.setWatch({
            ...robotInteractState.likeAndComment.watch,
            [key]: key === "like" || key === "comment" || key === "share"
                ? {
                    ...robotInteractState.likeAndComment.watch[key],
                    [name]: newValue,
                }
                : newValue
        }));
    }, [robotInteractDispatch, robotInteractState.likeAndComment.watch])
    const handlerPage: HandlerInputChange = useCallback((e, key) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotInteractDispatch(actions.setPage({
            ...robotInteractState.likeAndComment.page,
            [key]: key === "like" || key === "comment" || key === "share" || key === "invite"
                ? {
                    ...robotInteractState.likeAndComment.page[key],
                    [name]: newValue,
                }
                : newValue
        }));
    }, [robotInteractDispatch, robotInteractState.likeAndComment.page])

    const handleFriend: HandlerInputChange = useCallback((e, key) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotInteractDispatch(actions.setFriend({
            ...robotInteractState.likeAndComment.friend,
            [key]: key === "like" || key === "comment" || key === "poke" || key === "rePoke"
                ? {
                    ...robotInteractState.likeAndComment.friend[key],
                    [name]: newValue,
                }
                : newValue
        }));
    }, [robotInteractDispatch, robotInteractState.likeAndComment.friend]);
    const handleMarketplace: HandlerInputChange = useCallback((e, key) => {
        const { value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotInteractDispatch(actions.setMarketplace({
            ...robotInteractState.likeAndComment.marketplace,
            [key]: newValue
        }));
    }, [robotInteractDispatch, robotInteractState.likeAndComment.marketplace]);
    const handleNotification: HandlerInputChange = useCallback((e, key) => {
        const { value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotInteractDispatch(actions.setNotification({
            ...robotInteractState.likeAndComment.notification,
            [key]: newValue
        }));
    }, [robotInteractDispatch, robotInteractState.likeAndComment.notification]);
    const handleSearch: HandlerInputChange = useCallback((e, key) => {
        const { value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        robotInteractDispatch(actions.setSearch({
            ...robotInteractState.likeAndComment.search,
            [key]: newValue
        }));
    }, [robotInteractDispatch, robotInteractState.likeAndComment.search]);

    return (
        <div className={styles.likeAndComment}>
            <div className={styles.likeAndCommentContainer}>
                <div className={styles.thisSelected}>
                    <input type="checkbox" id="likeAndComment" name="isSelected" checked={robotInteractState.likeAndComment.isSelected} onChange={() => robotInteractDispatch(actions.selectLikeAndComment({ isSelected: !robotInteractState.likeAndComment.isSelected }))} />
                    <label htmlFor="likeAndComment">
                        Select Like & comment
                    </label>
                </div>
                {
                    robotInteractState.likeAndComment.isSelected && (
                        <div className={styles.likeAndCommentContent}>
                            <div className={styles.likeAndCommentSection}>
                                <LikeCommentType_1 nodes={{ label: "News feed", payload: robotInteractState.likeAndComment.newsFeed }} handleInputChange={handlerNewsFeed} />
                                <LikeCommentType_1 nodes={{ label: "Watch", payload: robotInteractState.likeAndComment.watch }} handleInputChange={handlerWatch} />
                                <LikeCommentType_1 nodes={{ label: "Group", payload: robotInteractState.likeAndComment.group }} handleInputChange={handlerGroup} />
                                <LikeCommentType_2 nodes={{ label: "Friend", payload: robotInteractState.likeAndComment.friend }} handleInputChange={handleFriend} />
                                <LikeCommentType_3 nodes={{ label: "Page", payload: robotInteractState.likeAndComment.page }} handleInputChange={handlerPage} />
                                <LikeCommentType_0 nodes={{ label: "Marketplace", payload: robotInteractState.likeAndComment.marketplace }} handleInputChange={handleMarketplace} />
                                <LikeCommentType_0 nodes={{ label: "Notification", payload: robotInteractState.likeAndComment.notification }} handleInputChange={handleNotification} />
                                <LikeCommentType_0 nodes={{ label: "Search", payload: robotInteractState.likeAndComment.search }} handleInputChange={handleSearch} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default LikeAndComment