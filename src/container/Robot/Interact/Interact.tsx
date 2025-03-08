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
    const [usersState] = useContext(UsersContext);
    const [settingsState, setSettingsState] = useState<ISettings>(initSettingsState);

    useEffect(() => {
        fetchRobotInteractConfig();
        fetchSettings();
    }, []);

    const fetchRobotInteractConfig = async () => {
        try {
            const res = await robotAPIs.getRobotInteractConfig();
            console.log("Response [getRobotInteractConfig]: ", { message: res.message, statusCode: res.statusCode });
            robotInteractDispatch(actions.setRobotInteractConfigs(res.data as IRobotInteract));
        } catch (err) {
            console.error(err);
        }
    };

    const fetchSettings = async () => {
        try {
            const res = await settingsAPIs.getSetting();
            console.log("Response [getSetting]: ", { message: res.message, statusCode: res.statusCode });
            setSettingsState(res.data as ISettings);
        } catch (err) {
            console.error(err);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, type, value, checked } = e.target;
        setSettingsState(prev => ({ ...prev, [name]: type === "text" ? value : checked }));
    };

    const handleSaveButtonClicked = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        const target = e.target as HTMLButtonElement;
        const defaultInnerHTML = target.innerHTML;
        target.innerHTML = "Saving ...";

        try {
            await robotAPIs.updateRobotInteractConfig(robotInteractState);
            console.log("Response [updateRobotInteractConfig]: ", { message: "Config updated", statusCode: 200 });
            await settingsAPIs.updateSetting(settingsState);
            console.log("Response [updateSetting]: ", { message: "Settings updated", statusCode: 200 });
        } catch (err) {
            console.error(err);
        } finally {
            target.innerHTML = defaultInnerHTML;
        }
    };

    const handleSaveAndRunButtonClicked = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        const target = e.target as HTMLButtonElement;
        const defaultInnerHTML = target.innerHTML;
        target.innerHTML = "Saving ...";

        try {
            await robotAPIs.updateRobotInteractConfig(robotInteractState);
            console.log("Response [updateRobotInteractConfig]: ", { message: "Config updated", statusCode: 200 });

            const selectedUsers = usersState.filter(user => user.actions.isSelected);
            const userIDs = selectedUsers.map(user => user.info.id).filter((id): id is string => typeof id === "string");

            target.innerHTML = "Running ...";
            await robotAPIs.runRobotInteract(userIDs, robotInteractState);
            console.log("Response [runRobotInteract]: ", { message: "Robot running", statusCode: 200 });

            await settingsAPIs.updateSetting(settingsState);
            console.log("Response [updateSetting]: ", { message: "Settings updated", statusCode: 200 });
        } catch (err) {
            console.error(err);
        } finally {
            target.innerHTML = defaultInnerHTML;
        }
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
                    <label className={styles.labelText} htmlFor="isMobile">Mobile display</label>
                </div>
                <div className={styles.content}>
                    <input
                        type="text"
                        value={settingsState.thread}
                        name="thread"
                        onChange={handleInputChange}
                        className={styles.valueInput}
                    />
                    <label htmlFor="thread" className={styles.labelText}>Thread</label>
                </div>
                <div className={`${styles.content} ${styles.contentProxy}`}>
                    <input
                        type="text"
                        value={settingsState.proxy}
                        name="proxy"
                        onChange={handleInputChange}
                        className={`${styles.valueInput} ${styles.valueProxyInput}`}
                    />
                    <label htmlFor="proxy" className={styles.labelText}>Proxy</label>
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