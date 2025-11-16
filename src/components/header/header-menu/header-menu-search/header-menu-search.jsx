import { useRef } from "react";
import styles from "./header-menu-search.module.scss";

const HeaderMenuSearch = () => {

  return (
    <div className={styles.search} id="search-main">
      <input
        className={styles.searchInput}
        id="search"
        type="text"
        placeholder="Search for products..."
      ></input>
      <ul className={styles.searchResults}>
        <li className={styles.searchResultsItem}>
          <a href="#" className={styles.searchResultsTitle}>
            First item
          </a>
        </li>
        <li className={styles.searchResultsItem}>
          <a href="#" className={styles.searchResultsTitle}>
            Second item
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenuSearch;
