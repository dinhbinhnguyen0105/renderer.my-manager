// Row.tsx
import { IUser } from "~/interfaces/users";
import styles from "./Row.module.scss";

interface RowPops {
    index: number,
    user: IUser,
    isSelected: boolean,
    handleSelectUser: (id: string | undefined, preSelectedValue: boolean) => void,
}

const Row: React.FC<RowPops> = ({ index, user, isSelected, handleSelectUser }) => {

    return (
        <>
            <tr className={`${styles.tableRow} ${isSelected ? styles.selected : ""}`}>
                <td>
                    <input type="checkbox" checked={isSelected} onChange={() => handleSelectUser(user.info.id, isSelected)} />
                </td>
                <td className={styles.tableCell}>{index + 1}</td>
                <td className={styles.tableCell}>{user.info.username}</td>
                <td className={styles.tableCell}>{user.info.group}</td>
                <td className={styles.tableCell}>{user.info.group}</td>
            </tr>
        </>
    )
}

export default Row;