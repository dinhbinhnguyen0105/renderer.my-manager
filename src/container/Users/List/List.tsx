// List.tsx
import { useState, useContext, useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import * as usersAPIs from "~/APIs/users";
import { UsersContext, SearchContext } from "~/store/Contexts";
import * as actions from "~/store/actions";
import styles from "./List.module.scss";
import Row from "./Row";

const List: React.FC = () => {
    const [usersState, usersDispatch] = useContext(UsersContext);
    const [expandRowIndex, setExpandRowIndex] = useState<number>(-1);
    const [searchValue] = useContext(SearchContext);
    const navigate = useNavigate();
    // Call API users
    useEffect(() => {
        usersAPIs.getUsers()
            .then(res => usersDispatch(actions.setUsers({ users: res.data })));
    }, []);

    const formatDate = (isoDateString: string): string => {
        const date = new Date(isoDateString);
        return date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit"
        });
    };

    const filterUsers = useMemo(() => {
        if (!searchValue.trim()) return usersState;
        return usersState.filter(({ info }) =>
            (["username", "uid", "type", "group", "createdAt"] as (keyof typeof info)[])
                .some(field =>
                    String(info[field]).toLowerCase().includes(searchValue.toLowerCase())
                )
        );
    }, [usersState, searchValue]);

    const handleRowContextMenu = (event: React.MouseEvent<HTMLTableRowElement>, index: number): void => {
        event.preventDefault();
        setExpandRowIndex(prevIndex => (prevIndex === index ? -1 : index));
    };

    const handleEditButtonClicked = useCallback((id: string): void => {
        const url = `/user/update?id=${id}`;
        navigate(url);
    }, [navigate]);

    const handleDeleteButtonClicked = useCallback((event: React.MouseEvent<EventTarget>, id: string): void => {
        const target = event.currentTarget as HTMLButtonElement;
        const defaultInnerHTML = target.innerHTML;
        target.innerHTML = "...";
        usersAPIs.deleteUser(id)
            .then(res => {
                if (res.statusCode === 200) {
                    usersAPIs.getUsers()
                        .then(res => usersDispatch(actions.setUsers({ users: res.data })));
                }
                console.log("Message [handleDeleteButtonClicked]: ", res.message);
            })
            .then(() => {
                target.innerHTML = defaultInnerHTML;
            })
            .catch(err => console.error(err));
    }, [usersDispatch]);

    const handleLaunchButtonClicked = useCallback((event: React.MouseEvent<EventTarget>, id: string): void => {
        const target = event.currentTarget as HTMLButtonElement;
        const defaultInnerHTML = target.innerHTML;
        target.innerHTML = "...";
        usersAPIs.launchUser(id)
            .then(res => {
                if (res.statusCode === 200) {
                    //
                }
                console.log("Message [handleLaunchButtonClicked]: ", res.message)
            })
            .then(() => target.innerHTML = defaultInnerHTML)
            .catch(err => console.error(err));
    }, []);

    return (
        <div className={styles.listUser}>
            <div className={styles.listUserContainer}>
                <h2 className={styles.title}>List of Users</h2>
                {
                    filterUsers.length ? (
                        <table className={styles.userTable}>
                            <thead className={styles.tableHeader}>
                                <tr>
                                    <th className={styles.tableCell}>N.O</th>
                                    <th className={styles.tableCell}>Create Date</th>
                                    <th className={styles.tableCell}>UID</th>
                                    <th className={styles.tableCell}>Username</th>
                                    <th className={styles.tableCell}>Type</th>
                                    <th className={styles.tableCell}>Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterUsers.map((user, index) => (
                                        <Row
                                            key={index}
                                            index={index}
                                            user={user}
                                            formatDate={formatDate}
                                            isExpanded={index === expandRowIndex}
                                            handleContextMenu={handleRowContextMenu}
                                            handleEditButtonClicked={handleEditButtonClicked}
                                            handleDeleteButtonClicked={handleDeleteButtonClicked}
                                            handleLaunchButtonClicked={handleLaunchButtonClicked}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <h2 className={styles.errorMessage}>Unable to fetch users from database.</h2>
                    )
                }
            </div>
        </div>
    )
};

export default List;
