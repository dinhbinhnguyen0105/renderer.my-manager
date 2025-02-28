// Robot.tsx

import { Outlet, Link } from "react-router-dom";

import Header from "~/components/Header/Header";
import { UsersProvider } from "~/store/Providers";
import ListUser from "./ListUser/ListUser";

import styles from "./Robot.module.scss";

const Robot: React.FC = () => {

    return (
        <div className={styles.robotContainer}>
            <Header />
            <UsersProvider>
                <div className={styles.robotContent}>
                    <ListUser />
                    <div className={styles.configContainer}>
                        <nav className={styles.configNav}>
                            <ul className={styles.navList}>
                                <li className={styles.navItem}>
                                    <Link className={styles.navLink} to={"interact"}>interact</Link>
                                    <ul className={styles.subNavList}>
                                        <li className={styles.subNavItem}>
                                            <Link className={styles.subNavLink} to={"interact/like-comment"}>Like & comment</Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link className={styles.subNavLink} to={"interact/addfriend"}>add friend</Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link className={styles.subNavLink} to={"interact/group"}>group</Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link className={styles.subNavLink} to={"interact/post"}>post</Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link className={styles.subNavLink} to={"interact/seeding"}>seeding</Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link className={styles.subNavLink} to={"interact/another"}>another</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={styles.navItem}>
                                    <Link className={styles.navLink} to={"profile"}>profile</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link className={styles.navLink} to={"page"}>page</Link>
                                </li>
                            </ul>
                        </nav>
                        <Outlet />
                    </div>
                </div>
            </UsersProvider>
        </div>
    )
}

export default Robot;