// Update.tsx
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Update.module.scss";
import { getUser, updateUser } from "~/APIs/users";
import { IUser } from "~/interfaces/users";

const Update: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser>({
        info: {
            id: "",
            username: "",
            uid: "",
            password: "",
            twoFA: "",
            email: "",
            emailPassword: "",
            phoneNumber: "",
            birthDay: "",
            gender: "",
            avatar: "",
            group: "",
            type: "",
            note: "",
            status: "",
            createdAt: "",
            updatedAt: "",
        },
        browser: {
            name: "",
            mobile: {
                userAgent: "",
                screenHeight: -1,
                screenWidth: -1,
                viewportHeight: -1,
                viewportWidth: -1
            },
            desktop: {
                userAgent: "",
                screenHeight: -1,
                screenWidth: -1,
                viewportHeight: -1,
                viewportWidth: -1
            }
        },
        actions: {
            isSelected: false,
        },
    });
    const id = searchParams.get("id");
    useEffect(() => {
        if (id) {
            getUser(id)
                .then(res => setUser(res.data))
                .catch(err => console.error(err));
        } else { return; };
    }, [id]);

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
        setUser(prev => ({
            ...prev,
            info: {
                ...prev.info,
                [e.target.name]: e.target.value
            },
        }));
    };
    const handleOnCheckStatus: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        fetch(`https://graph.facebook.com/${user.info.uid}/picture?redirect=false`)
            .then(res => res.json())
            .then(res => {
                if (!res.data || (res.data && !res.data.width)) {
                    setUser(prev => ({
                        ...prev,
                        status: false,
                    }));
                } else {
                    setUser(prev => ({
                        ...prev,
                        status: true,
                    }));
                };
            })
            .catch(err => console.error(err));
    };

    const handleSaveButtonClicked: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        updateUser(user)
            .then(() => navigate("/user/list"))
            .catch(err => console.error(err));
    };

    return (
        <div className={styles.updateUser}>
            {
                user ? (
                    <div className={styles.updateContainer}>
                        <h2 className={styles.title}>Update {user.info.username}'s information</h2>
                        <div className={styles.updateContent}>
                            <div className={styles.updateSection}>
                                <label htmlFor="username">username</label>
                                <input type="text" id="username" name="username" value={user.info.username} onChange={handleOnChange} />
                            </div>

                            <div className={styles.updateSection}>
                                <label htmlFor="uid">uid</label>
                                <input type="text" id="uid" name="uid" value={user.info.uid} onChange={handleOnChange} />
                            </div>

                            <div className={styles.updateSection}>
                                <label htmlFor="password">password</label>
                                <input type="text" id="password" name="password" value={user.info.password} onChange={handleOnChange} />
                            </div>

                            <div className={styles.updateSection}>
                                <label htmlFor="twoFA">twoFA</label>
                                <input type="text" id="twoFA" name="twoFA" value={user.info.twoFA} onChange={handleOnChange} />
                            </div>

                            <div className={styles.updateSection}>
                                <label htmlFor="email">email</label>
                                <input type="text" id="email" name="email" value={user.info.email} onChange={handleOnChange} />
                            </div>

                            <div className={styles.updateSection}>
                                <label htmlFor="emailPassword">email password</label>
                                <input type="text" id="emailPassword" name="emailPassword" value={user.info.emailPassword} onChange={handleOnChange} />
                            </div>

                            <div className={styles.updateSection}>
                                <label htmlFor="phoneNumber">phone number</label>
                                <input type="text" id="phoneNumber" name="phoneNumber" value={user.info.phoneNumber} onChange={handleOnChange} />
                            </div>

                            <div className={styles.updateSection}>
                                <label htmlFor="birthDay">birthDay</label>
                                <input type="text" id="birthDay" name="birthDay" value={user.info.birthDay} onChange={handleOnChange} />
                            </div>

                            <div className={styles.updateSection}>
                                <label htmlFor="gender">gender</label>
                                <input type="text" id="gender" name="gender" value={user.info.gender} onChange={handleOnChange} />
                            </div>

                            <div className={styles.updateSection}>
                                <label htmlFor="avatar">avatar</label>
                                <input type="text" id="avatar" name="avatar" value={user.info.avatar} onChange={handleOnChange} />
                            </div>

                            <div className={styles.updateSection}>
                                <label htmlFor="group">group</label>
                                <input type="text" id="group" name="group" value={user.info.group} onChange={handleOnChange} />
                            </div>

                            <div className={styles.updateSection}>
                                <label htmlFor="type">type</label>
                                <input type="text" id="type" name="type" value={user.info.type} onChange={handleOnChange} />
                            </div>

                            <div className={styles.updateSection}>
                                <label htmlFor="note">note</label>
                                <input type="text" id="note" name="note" value={user.info.note} onChange={handleOnChange} />
                            </div>

                            {/* <div className={styles.updateSection}>
                                <label htmlFor="userAgent">mobile user-agent</label>
                                <span>{user.browser.mobile.userAgent}</span>
                                <button onClick={() => handleChangeUserAngent("mobile")}>random mobile</button>
                                <button onClick={() => handleChangeUserAngent("desktop")}>random desktop</button>
                            </div> */}

                            <div className={styles.updateSection}>
                                <label htmlFor="status">status</label>
                                <span><b>{user.info.status ? "Live" : "Checkpoint"}</b></span>
                                <button onClick={handleOnCheckStatus}>re-check</button>
                            </div>
                            <div className={styles.updateSection}>
                                <label htmlFor="updatedAt">updated at</label>
                                <input type="text" id="updatedAt" name="updatedAt" value={new Date().toISOString()} disabled />
                            </div>
                            <div className={styles.updateSection}>
                                <label htmlFor="createdAt">created at</label>
                                <input type="text" id="createdAt" name="createdAt" value={user.info.createdAt} disabled />
                            </div>
                        </div>
                        <div className={styles.updateAction}>
                            <button className={styles.saveBtn} onClick={handleSaveButtonClicked}>save</button>
                        </div>
                    </div>
                ) : (<h2 className={styles.errorMessage}>Unable to fetch user from database.</h2>)
            }
        </div>
    );
};

export default Update;