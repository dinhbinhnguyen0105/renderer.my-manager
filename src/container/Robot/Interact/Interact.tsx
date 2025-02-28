// Interact.tsx
import { useContext, useEffect } from "react";

import { Outlet } from "react-router-dom";
import { RobotContext, UsersContext } from "~/store/Contexts";
import * as actions from "~/store/actions";
import * as robotAPIs from "~/APIs/robot";
import styles from "./Interact.module.scss";
import { IRobot } from "~/interfaces/robot";

const Interact: React.FC = () => {
    const [robotState, robotDispatch] = useContext(RobotContext);
    const [usersState, usersDispatch] = useContext(UsersContext);

    useEffect(() => {
        console.log("in Interact FC");
        robotAPIs.getRobotConfig()
            .then(res => {
                console.log({ message: res.message, statusCode: res.statusCode });
                robotDispatch(actions.setRobotConfig(res.data as IRobot));
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => console.log("End"));
    }, [robotState]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        robotDispatch(actions.setSetting({ ...robotState.settings, [e.target.name]: e.target.type === "text" ? e.target.value : e.target.checked }));
    }


    const handleSaveButtonClicked = () => {
        const selectedUsers = usersState.filter(user => user.actions.isSelected);
        const selectedUserIds = selectedUsers.map(user => user.info.id);
        // const robotInteract = 
    }

    return (
        <div className={styles.interactContainer}>
            <Outlet />
            <div className={styles.settingsContainer}>
                <div className={styles.content}>
                    <input
                        type="checkbox"
                        checked={robotState.settings.isMobile}
                        name="isMobile"
                        onChange={handleInputChange}
                        className={styles.checkbox}
                    />
                    <span className={styles.labelText}>Mobile display</span>
                </div>
                <div className={styles.content}>
                    <input
                        type="text"
                        value={robotState.settings.thread}
                        name="thread"
                        onChange={handleInputChange}
                        className={styles.valueInput}
                    />
                    <span className={styles.labelText}>Thread</span>
                </div>
                <div className={`${styles.content} ${styles.contentProxy}`}>
                    <input
                        type="text"
                        value={robotState.settings.proxy}
                        name="proxy"
                        onChange={handleInputChange}
                        className={`${styles.valueInput} ${styles.valueProxyInput}`}
                    />
                    <span className={styles.labelText}>Proxy</span>
                </div>
            </div>
            <div className={styles.actionsContainer}>
                <button className={styles.saveButton} onClick={handleSaveButtonClicked}>Save</button>
                <button className={styles.saveAndRunButton}>Save & Run</button>
            </div>
        </div>
    );
};

export default Interact;