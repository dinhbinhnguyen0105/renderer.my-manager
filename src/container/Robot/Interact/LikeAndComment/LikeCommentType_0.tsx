// LikeCommentType_0.tsx
import { TLikeComment_0 } from "~/interfaces/robot";
import styles from "./LikeCommentType.module.scss"

type Nodes = {
    label: string,
    payload: TLikeComment_0,
};
type HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => void;

const LikeCommentType_0: React.FC<{ nodes: Nodes, handleInputChange: HandleInputChange }> = ({ nodes, handleInputChange }) => {

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
                    type="text"
                    value={nodes.payload.value}
                    name="value"
                    onChange={e => handleInputChange(e, "value")}
                    className={`${styles.valueInput}`}
                />
                <span className={styles.labelText}>second</span>
            </div>
        </div>
    );
};

export default LikeCommentType_0;