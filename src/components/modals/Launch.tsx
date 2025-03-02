// Launch.tsx
import { useContext, useEffect, useState } from "react";
import * as userAPIs from "~/APIs/users";
import * as settingsAPIs from "~/APIs/settings";
import styles from "./Launch.module.scss";
import { initSettingsState, ISettings } from "~/interfaces/settings";

const Launch: React.FC<{ isOpen: boolean, onClose: () => void, id: string }> = ({ isOpen, onClose, id }) => {
    if (!isOpen) { return null; };
    const [settingsState, setSettingsState] = useState<ISettings>(initSettingsState);

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

    const handleLaunchButtonClicked: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
        const target = e.target as HTMLButtonElement
        const defaultInnerHTML = target.innerHTML;
        target.innerHTML = "Saving settings ...";
        settingsAPIs.updateSetting(settingsState)
            .then(res => console.log("Response [updateRobotInteractConfig]: ", { message: res.message, statusCode: res.statusCode }))
            .then(() => {
                target.innerHTML = "Launching ...";
                return userAPIs.launchUser({ id: id, isMobile: settingsState.isMobile, proxy: settingsState.proxy });
            })
            .then(res => console.log("Response [runRobotInteract]: ", { message: res.message, statusCode: res.statusCode }))
            .catch(err => console.error(err))
            .finally(() => target.innerHTML = defaultInnerHTML);
    }
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.launchContainer} onClick={e => e.stopPropagation()}>
                <div className={styles.launchSettings}>
                    <div className={styles.content}>
                        <input
                            type="checkbox"
                            checked={settingsState.isMobile}
                            name="isMobile"
                            onChange={handleInputChange}
                            className={styles.checkbox}
                        />
                        <label className={styles.labelText} htmlFor="isMobile">Mobile display</label>
                    </div>
                    <div className={`${styles.content} ${styles.contentProxy}`}>
                        <input
                            type="text"
                            value={settingsState.proxy}
                            name="proxy"
                            onChange={handleInputChange}
                            className={`${styles.valueInput} ${styles.valueProxyInput}`}
                        />
                        <label className={styles.labelText} htmlFor="proxy">Proxy</label>
                    </div>
                </div>
                <div className={styles.launchActions}>
                    <button className={styles.launchButton} onDoubleClick={handleLaunchButtonClicked}>Launch</button>
                </div>
            </div>
        </div>
    );
};

export default Launch;

{/*

*/}

