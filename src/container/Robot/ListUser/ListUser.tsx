// ListUser.tsx
import { useState, useContext, useEffect, useCallback } from "react";

import { getUsers } from "~/APIs/users";
import * as actions from "~/store/actions";
import { UsersContext } from "~/store/Contexts";
import styles from "./ListUser.module.scss"
import Row from "./Row";


const ListUser: React.FC = () => {
    const [usersState, usersDispatch] = useContext(UsersContext);
    const [selectedAll, setSelectedAll] = useState<boolean>(false);

    useEffect(() => {
        getUsers()
            .then(res => usersDispatch(actions.setUsers({ users: res.data })));
    }, []);

    const handleSelectUser = useCallback((id: string | undefined, preSelectedValue: boolean): void => {
        if (id) {
            usersDispatch(actions.selectUser({ id: id, isSelected: !preSelectedValue }))
        }
    }, [usersDispatch]);

    const handleSelectAllUser: React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        const target = event.target as HTMLInputElement;
        setSelectedAll(target.checked);
        usersDispatch(actions.selectAllUser({ isSelected: target.checked }));
    }, []);

    return (
        <div className={styles.listUser}>
            <div className="listUserContainer">
                {
                    usersState.length ? (
                        <table className={styles.userTable}>
                            <thead className={styles.tableHeader}>
                                <tr>
                                    <th className={styles.tableCell}>
                                        <label htmlFor="selectAll">
                                            {selectedAll ? "deselect all" : "select all"}
                                        </label>
                                        <input type="checkbox" id="selectAll" name="selectAll" checked={selectedAll} onChange={handleSelectAllUser} hidden />
                                    </th>
                                    <th className={styles.tableCell}>n.o</th>
                                    <th className={styles.tableCell}>user name</th>
                                    <th className={styles.tableCell}>group</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    usersState.map((user, index) => (
                                        <Row
                                            key={index}
                                            index={index}
                                            user={user}
                                            isSelected={user.actions.isSelected || false}
                                            handleSelectUser={handleSelectUser}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    ) :
                        <h3 className={styles.errorMessage}>Unable to fetch users from database.</h3>
                }
            </div>
        </div>
    );
};

export default ListUser;