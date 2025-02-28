// LikeCommentType_2.tsx
import { TLikeComment_2 } from "~/interfaces/robot";
import styles from "./LikeCommentType.module.scss"

type Nodes = {
    label: string,
    payload: TLikeComment_2
};
type HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => void;

const LikeCommentType_2: React.FC<{ nodes: Nodes, handleInputChange: HandleInputChange }> = ({ nodes, handleInputChange }) => {

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
                <input
                    type="checkbox"
                    checked={nodes.payload.isOnline}
                    name="isOnline"
                    onChange={(e) => handleInputChange(e, "isOnline")}
                    className={`${styles.isOnlineCheckbox} ${styles.checkbox}`}
                />
                <span className={styles.labelText}>Online</span>

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

            <div className={`${styles.pokeContainer} ${styles.content}`}>
                <input
                    type="checkbox"
                    checked={nodes.payload.poke.isSelected}
                    name="isSelected"
                    onChange={e => handleInputChange(e, "poke")}
                    className={`${styles.pokeCheckbox} ${styles.checkbox}`}
                />
                <span className={styles.labelText}>Poke</span>
                <input
                    type="text"
                    value={nodes.payload.poke.value}
                    name="value"
                    onChange={e => handleInputChange(e, "poke")}
                    className={`${styles.valueInput}`}
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
            <div className={`${styles.rePokeContainer} ${styles.content}`}>
                <input
                    type="checkbox"
                    checked={nodes.payload.rePoke.isSelected}
                    name="isSelected"
                    onChange={e => handleInputChange(e, "rePoke")}
                    className={`${styles.rePokeCheckbox} ${styles.checkbox}`}
                />
                <span className={styles.labelText}>Re-poke</span>
                <input
                    type="text"
                    value={nodes.payload.rePoke.value}
                    name="value"
                    onChange={e => handleInputChange(e, "rePoke")}
                    className={`${styles.valueInput}`}
                />
                <span className={styles.labelText}>times</span>
            </div>
        </div>
    );
};

export default LikeCommentType_2;