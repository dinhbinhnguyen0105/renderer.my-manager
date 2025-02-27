// Header.tsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ReactComponent as SearchSvgIcon } from "~/assets/icons/search.svg";

import { SearchContext } from "~/store/Contexts";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    const [searchValue, setSearchValue] = useContext(SearchContext);

    return (
        <div className={styles.headerContainer}>
            <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                    <li className={styles.navigationItem}><Link to="/">home</Link></li>
                    <li className={styles.navigationItem}><Link to="/marketplace">marketplace</Link></li>
                    {/* Create new property,
                        create new misc,
                        create new fashion,
                        create new flower,
                        create new verhicle,
                    */}
                    <li className={styles.navigationItem}>
                        <Link to="/user">user</Link>
                        <ul className={styles.navigationSubMenu}>
                            <li className={styles.navigationItem}><Link to="/user/create">create</Link></li>
                        </ul>
                    </li>
                    <li className={styles.navigationItem}><Link to="/robot">robot</Link></li>
                </ul>
            </nav>
            <div className={styles.searchContainer}>
                <div className={styles.searchInputContainer}>
                    <input className={styles.searchInput} type="text" placeholder="..." onChange={e => setSearchValue(e.target.value)} />
                    <SearchSvgIcon className={styles.searchIcon} />
                </div>
                <div className={styles.searchResultsContainer}></div>
            </div>
        </div>
    );
};

export default Header;