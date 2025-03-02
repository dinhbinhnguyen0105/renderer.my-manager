// Interact.tsx
import { useContext, useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import { RobotInteractContext, UsersContext } from "~/store/Contexts";
import * as actions from "~/store/actions";
import * as robotAPIs from "~/APIs/robot";
import * as settingsAPIs from "~/APIs/settings";
import styles from "./Interact.module.scss";
import { IRobotInteract } from "~/interfaces/robot";
import { initSettingsState, ISettings } from "~/interfaces/settings";

const Interact: React.FC = () => {
    const [robotInteractState, robotInteractDispatch] = useContext(RobotInteractContext);
    const [usersState, usersDispatch] = useContext(UsersContext);
    const [settingsState, setSettingsState] = useState<ISettings>(initSettingsState);

    useEffect(() => {
        robotAPIs.getRobotInteractConfig()
            .then(res => {
                console.log("Response [getRobotInteractConfig]: ", { message: res.message, statusCode: res.statusCode });
                robotInteractDispatch(actions.setRobotInteractConfigs(res.data as IRobotInteract));
            })
            .catch(err => console.error(err));
    }, []);
    useEffect(() => {
        settingsAPIs.getSetting()
            .then(res => {
                console.log("Response [getSetting]: ", { message: res.message, statusCode: res.statusCode });
                setSettingsState(res.data as ISettings);
            })
            .catch(err => console.error(err));
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSettingsState(prev => ({ ...prev, [e.target.name]: e.target.type === "text" ? e.target.value : e.target.checked }));
    };

    const handleSaveButtonClicked: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
        const target = e.target as HTMLButtonElement
        const defaultInnerHTML = target.innerHTML;
        target.innerHTML = "Saving ...";
        robotAPIs.updateRobotInteractConfig(robotInteractState)
            .then(res => console.log("Response [updateRobotInteractConfig]: ", { message: res.message, statusCode: res.statusCode }))
            .catch(err => console.error(err))
            .finally(() => target.innerHTML = defaultInnerHTML);
    };

    const handleSaveAndRunButtonClicked: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
        const target = e.target as HTMLButtonElement
        const defaultInnerHTML = target.innerHTML;
        target.innerHTML = "Saving ...";
        robotAPIs.updateRobotInteractConfig(robotInteractState)
            .then(res => console.log("Response [updateRobotInteractConfig]: ", { message: res.message, statusCode: res.statusCode }))
            .then(() => {
                const selectedUsers = usersState.filter(user => user.actions.isSelected);
                const userIDs = selectedUsers
                    .map(user => user.info.id)
                    .filter((id): id is string => typeof id === "string");
                target.innerHTML = "Running ...";
                return robotAPIs.runRobotInteract(userIDs, robotInteractState);
            })
            .then(res => console.log("Response [runRobotInteract]: ", { message: res.message, statusCode: res.statusCode }))
            .catch(err => console.error(err))
            .finally(() => target.innerHTML = defaultInnerHTML);
    };

    return (
        <div className={styles.interactContainer}>
            <Outlet />
            <div className={styles.settingsContainer}>
                <div className={styles.content}>
                    <input
                        type="checkbox"
                        checked={settingsState.isMobile}
                        name="isMobile"
                        onChange={handleInputChange}
                        className={styles.checkbox}
                        id="isMobile"
                    />
                    <label className={styles.labelText} htmlFor="isMobile" id="isMobile">Mobile display</label>
                </div>
                <div className={styles.content}>
                    <input
                        type="text"
                        value={settingsState.thread}
                        name="thread"
                        onChange={handleInputChange}
                        className={styles.valueInput}
                    />
                    <label htmlFor="thread" id="thread" className={styles.labelText}>Thread</label>
                </div>
                <div className={`${styles.content} ${styles.contentProxy}`}>
                    <input
                        type="text"
                        value={settingsState.proxy}
                        name="proxy"
                        onChange={handleInputChange}
                        className={`${styles.valueInput} ${styles.valueProxyInput}`}
                    />
                    <label htmlFor="proxy" id="proxy" className={styles.labelText}>Proxy</label>
                </div>
            </div>
            <div className={styles.actionsContainer}>
                <button className={styles.saveButton} onClick={handleSaveButtonClicked}>Save</button>
                <button className={styles.saveAndRunButton} onDoubleClick={handleSaveAndRunButtonClicked}>Save & Run</button>
            </div>
        </div>
    );
};

export default Interact;