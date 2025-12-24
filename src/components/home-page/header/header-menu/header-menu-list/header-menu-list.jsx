import styles from "./header-menu-list.module.scss";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import useClickOutside from "./utils/header-list-clickoutside";
import {
  ArrivalsRoute,
  BrandsRoute,
  SaleRoute,
  ShopRoute,
} from "../../../../../routes";
import Sale from "../../../../../pages/Sale";

const HeaderMenuList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

   useEffect(() => {
    if(!menuRef.current || !buttonRef.current) return
      if (isMenuOpen) {
        menuRef.current.classList.add(styles.menuShopOpened)
        menuRef.current.classList.remove(styles.menuShop)
        buttonRef.current.classList.add(styles.menuButtonRotate)
        buttonRef.current.classList.remove(styles.menuButton)
      } else {
        menuRef.current.classList.add(styles.menuShop)
        menuRef.current.classList.remove(styles.menuShopOpened)
        buttonRef.current.classList.add(styles.menuButton)
        buttonRef.current.classList.remove(styles.menuButtonRotate)
      }
  }, [isMenuOpen]);

  useClickOutside(menuRef, () => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  const handleShopButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <ul className={styles.menuList} id="menu-list">
        <li className={styles.menuListItem}>
          <div className="header-menu-list__shop">
            <Link to="/shop" className={styles.menuListItemA}>
              Shop
            </Link>
          </div>

          <button
            ref={buttonRef}
            className={styles.menuButton}
            onClick={handleShopButton}
            id="menu-button"
          >
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2826 1.28318L6.28255 6.28318C6.21287 6.3531 6.13008 6.40857 6.03892 6.44643C5.94775 6.48428 5.85001 6.50377 5.7513 6.50377C5.65259 6.50377 5.55485 6.48428 5.46369 6.44643C5.37252 6.40857 5.28973 6.3531 5.22005 6.28318L0.220051 1.28318C0.0791548 1.14228 -2.09952e-09 0.951183 0 0.751926C2.09952e-09 0.552669 0.0791548 0.361572 0.220051 0.220676C0.360947 0.0797797 0.552044 0.000625136 0.751301 0.000625133C0.950558 0.000625131 1.14165 0.0797797 1.28255 0.220676L5.75193 4.69005L10.2213 0.220051C10.3622 0.079155 10.5533 0 10.7526 0C10.9518 0 11.1429 0.079155 11.2838 0.220051C11.4247 0.360948 11.5039 0.552044 11.5039 0.751301C11.5039 0.950559 11.4247 1.14165 11.2838 1.28255L11.2826 1.28318Z"
                fill="black"
              />
            </svg>
          </button>

          <ul className={styles.menuShop} id="menu-shop" ref={menuRef}>
            <li className={styles.menuShopItem}>
              <a href="#">Men</a>
            </li>
            <li className={styles.menuShopItem}>
              <a href="#">Women</a>
            </li>
            <li className={styles.menuShopItem}>
              <a href="#">Outerwear</a>
            </li>
            <li className={styles.menuShopItem}>
              <a href="#">Outfits</a>
            </li>
            <li className={styles.menuShopItem}>
              <a href="#">Shoes</a>
            </li>
          </ul>
        </li>
        <li className={styles.menuListItem}>
          <a href={SaleRoute.path} className={styles.menuListItemA}>
            On Sale
          </a>
        </li>
        <li className={styles.menuListItem}>
          <a href={ArrivalsRoute.path} className={styles.menuListItemA}>
            New Arrivals
          </a>
        </li>
        <li className={styles.menuListItem}>
          <a href={BrandsRoute.path} className={styles.menuListItemA}>
            Brands
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenuList;
