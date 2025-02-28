// LikeCommentType_3.tsx
import { TLikeComment_3 } from "~/interfaces/robot";
import styles from "./LikeCommentType.module.scss"

type Nodes = {
    label: string,
    payload: TLikeComment_3
};
type HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => void;

const LikeCommentType_3: React.FC<{ nodes: Nodes, handleInputChange: HandleInputChange }> = ({ nodes, handleInputChange }) => {

    return (
        <div className={styles.likeCommentType1Container}>
            <div className={`${styles.selectionContainer} ${styles.content}`}>
                <input
                    type="checkbox"
                    checked={nodes.payload.isSelected}
                    name="isSelected"
                    onChange={(e) => handleInputChange(e, "isSelected")}
                    className={`${styles.isSelectedCheckbox} ${styles.checkbox}`}
                />
                <span className={styles.labelText}>{nodes.label}</span>
            </div>

            <div className={`${styles.likeContainer} ${styles.content}`}>
                <input
                    type="checkbox"
                    checked={nodes.payload.like.isSelected}
                    name="isSelected"
                    onChange={e => handleInputChange(e, "like")}
                    className={`${styles.likeCheckbox} ${styles.checkbox}`}
                />
                <span className={styles.labelText}>Like</span>
                <input
                    type="text"
                    value={nodes.payload.like.value}
                    name="value"
                    onChange={e => handleInputChange(e, "like")}
                    placeholder={`["like" | "love" | "haha" | "wow" | "sad" | "angry"]`}
                    className={`${styles.likeValueInput} ${styles.valueInput}`}
                />
            </div>
            <div className={`${styles.shareContainer} ${styles.content}`}>
                <input
                    type="checkbox"
                    checked={nodes.payload.share.isSelected}
                    name="isSelected"
                    onChange={e => handleInputChange(e, "share")}
                    className={`${styles.shareCheckbox} ${styles.checkbox}`}
                />
                <span className={styles.labelText}>Share</span>
                <input
                    type="text"
                    value={nodes.payload.share.value}
                    name="value"
                    onChange={e => handleInputChange(e, "share")}
                    className={`${styles.shareValueInput} ${styles.valueInput}`}
                />
                <span className={styles.labelText}>times</span>
            </div>
            <div className={`${styles.commentContainer} ${styles.content}`}>
                <input
                    type="checkbox"
                    checked={nodes.payload.comment.isSelected}
                    name="isSelected"
                    onChange={e => handleInputChange(e, "comment")}
                    className={`${styles.commentCheckbox} ${styles.checkbox}`}
                />
                <span className={styles.labelText}>Comment</span>
                <input
                    type="text"
                    value={nodes.payload.comment.value}
                    name="value"
                    onChange={e => handleInputChange(e, "comment")}
                    placeholder={`["comment-1", "comment-2"]`}
                    className={`${styles.commentValueInput} ${styles.valueInput}`}
                />
            </div>
            <div className={`${styles.inviteContainer} ${styles.content}`}>
                <input
                    type="checkbox"
                    checked={nodes.payload.invite.isSelected}
                    name="isSelected"
                    onChange={e => handleInputChange(e, "invite")}
                    className={`${styles.inviteCheckbox} ${styles.checkbox}`}
                />
                <span className={styles.labelText}>Invite</span>
                <input
                    type="text"
                    value={nodes.payload.invite.value}
                    name="value"
                    onChange={e => handleInputChange(e, "invite")}
                    className={`${styles.inviteValueInput} ${styles.valueInput}`}
                />
                <span className={styles.labelText}>times</span>
                <span className={styles.labelText}>URL: </span>
                <input
                    type="text"
                    value={nodes.payload.invite.url}
                    name="url"
                    onChange={e => handleInputChange(e, "invite")}
                    className={`${styles.inviteURLInput} ${styles.valueInput}`}
                />
            </div>
        </div>
    );
};

export default LikeCommentType_3;