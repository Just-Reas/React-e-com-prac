import HeaderMenuBurger from "./header-menu-burger/header-menu-burger";
import HeaderMenuButtons from "./header-menu-buttons/header-menu-buttons";
import HeaderMenuIcon from "./header-menu-icon/header-menu-icon";
import HeaderMenuList from "./header-menu-list/header-menu-list";
import HeaderMenuSearch from "./header-menu-search/header-menu-search";

import styles from './header-menu.module.scss';

const HeaderMenu = () => {
  return (
    <div className={styles.headerMenu}>
      <div className="container">
        <div className={styles.headerInner} id="header-inner">
            
            <HeaderMenuBurger/>

            <HeaderMenuIcon/>

            <HeaderMenuList/>

            <HeaderMenuSearch/>

            <HeaderMenuButtons/>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
