import { useCallback, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const BREAKPOINTS = {
  LG: 992,
  MD: 768,
  SM: 576,
};

const DISPLAY_STYLES = {
  FLEX: "flex",
  NONE: "none",
  UNSET: "unset",
};

export const useHeaderMenu = () => {
  const isLg = useMediaQuery({ maxWidth: BREAKPOINTS.LG });
  const isMd = useMediaQuery({ maxWidth: BREAKPOINTS.MD });
  const isSm = useMediaQuery({ maxWidth: BREAKPOINTS.SM });

  const getElements = () => {
    return {
      search: document.getElementById("search"),
      searchMain: document.getElementById("search-main"),
      list: document.getElementById("menu-list"),
      discount: document.getElementById("discount-button"),
      searchButton: document.getElementById("search-button"),
      profileButton: document.getElementById("profile-button"),
      buyButton: document.getElementById("buy-button"),
      headerIcon: document.getElementById("header-icon"),
      headerInner: document.getElementById("header-inner"),
    };
  };

  useEffect(() => {
    const elements = getElements();
    
    if (Object.values(elements).some(el => !el)) return;

    const {
      search, searchMain, list, discount, searchButton,
      profileButton, buyButton, headerIcon, headerInner
    } = elements;

    if (isSm) {
      headerInner.style.rowGap = "0";
      search.style.display = DISPLAY_STYLES.NONE;
      searchButton.style.display = DISPLAY_STYLES.FLEX;
      discount.style.display = DISPLAY_STYLES.NONE;
      profileButton.style.display = DISPLAY_STYLES.FLEX;
      buyButton.style.display = DISPLAY_STYLES.FLEX;
      headerIcon.style.display = DISPLAY_STYLES.FLEX;
    } else if (isMd) {
      searchButton.style.display = DISPLAY_STYLES.FLEX;
      discount.style.display = DISPLAY_STYLES.NONE;
      list.style.display = DISPLAY_STYLES.NONE;
      search.style.display = DISPLAY_STYLES.NONE;
    } else if (isLg) {
      profileButton.style.display = DISPLAY_STYLES.FLEX;
      buyButton.style.display = DISPLAY_STYLES.FLEX;
      headerIcon.style.display = DISPLAY_STYLES.FLEX;
      discount.style.display = DISPLAY_STYLES.NONE;
      searchButton.style.display = DISPLAY_STYLES.FLEX;
      search.style.display = DISPLAY_STYLES.NONE;
      searchMain.style.maxWidth = DISPLAY_STYLES.UNSET;
      list.style.display = DISPLAY_STYLES.FLEX;
    } else {
      search.style.display = DISPLAY_STYLES.UNSET;
      searchMain.style.display = DISPLAY_STYLES.UNSET;
      list.style.display = DISPLAY_STYLES.FLEX;
      discount.style.display = DISPLAY_STYLES.NONE;
      searchButton.style.display = DISPLAY_STYLES.NONE;
    }
  }, [isLg, isMd, isSm]);

  const handleSearchOpen = useCallback(() => {
    const elements = getElements();
    if (Object.values(elements).some(el => !el)) return;

    const {
      search, searchMain, list, discount, searchButton,
      profileButton, buyButton, headerIcon, headerInner
    } = elements;

    if (isSm) {
      headerInner.style.rowGap = "1rem";
      search.style.display = DISPLAY_STYLES.FLEX;
      searchMain.style.display = DISPLAY_STYLES.FLEX;
      searchButton.style.display = DISPLAY_STYLES.NONE;
      discount.style.display = DISPLAY_STYLES.FLEX;
    } else {
      searchMain.style.display = DISPLAY_STYLES.UNSET;
      search.style.display = DISPLAY_STYLES.UNSET;
      list.style.display = DISPLAY_STYLES.NONE;
      searchButton.style.display = DISPLAY_STYLES.NONE;
      discount.style.display = DISPLAY_STYLES.FLEX;

      if (isMd) {
        buyButton.style.display = DISPLAY_STYLES.NONE;
        profileButton.style.display = DISPLAY_STYLES.NONE;
        headerIcon.style.display = DISPLAY_STYLES.NONE;
      }
    }
  }, [isSm, isMd]);

  const handleSearchClose = useCallback(() => {
    const elements = getElements();
    if (Object.values(elements).some(el => !el)) return;

    const {
      search, searchMain, list, discount, searchButton,
      profileButton, buyButton, headerIcon, headerInner
    } = elements;

    if (isSm) {
      setTimeout(() => {
        if (headerInner) headerInner.style.rowGap = "0";
      }, 10);
      search.style.display = DISPLAY_STYLES.NONE;
      searchMain.style.display = DISPLAY_STYLES.NONE;
      searchButton.style.display = DISPLAY_STYLES.FLEX;
      discount.style.display = DISPLAY_STYLES.NONE;
    } else {
      discount.style.display = DISPLAY_STYLES.NONE;
      searchButton.style.display = DISPLAY_STYLES.FLEX;
      search.style.display = DISPLAY_STYLES.NONE;

      if (isMd) {
        list.style.display = DISPLAY_STYLES.NONE;
        buyButton.style.display = DISPLAY_STYLES.FLEX;
        profileButton.style.display = DISPLAY_STYLES.FLEX;
        headerIcon.style.display = DISPLAY_STYLES.FLEX;
      } else {
        list.style.display = DISPLAY_STYLES.FLEX;
      }
    }
  }, [isSm, isMd]);

  return { 
    handleSearchOpen, 
    handleSearchClose 
  };
};