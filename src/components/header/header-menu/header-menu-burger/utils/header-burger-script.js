import { useCallback, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const ANIMATION = {
  DURATION: 300,
  DELAY: 10,
  BURGER: {
    OPEN: {
      MAIN: "rotateZ(90deg)",
      WINDOW: "translateX(0rem)",
      OPACITY: "1",
      DISPLAY: "flex"
    },
    CLOSE: {
      MAIN: "rotateZ(0deg)",
      WINDOW: "translateX(-9.375rem)",
      OPACITY: "0",
      DISPLAY: "none"
    }
  },
  SHOP: {
    OPEN: {
      BUTTON: "rotateZ(0deg) translateY(0.3125rem)",
      MENU: "translateY(0)",
      DISPLAY: "flex"
    },
    CLOSE: {
      BUTTON: "rotateZ(270deg)",
      MENU: "translateY(-0.9375rem)",
      DISPLAY: "none"
    }
  }
};

const BREAKPOINTS = {
  MD: 768
};

export const useHeaderBurger = () => {
  const isBurgerOpen = useRef(false);
  const isShopOpen = useRef(false);
  const isMd = useMediaQuery({ maxWidth: BREAKPOINTS.MD });

  useEffect(() => {
    const burgerWindow = document.getElementById("burger-window");
    const burgerMain = document.getElementById("burger-main");

    if (burgerWindow && burgerMain) {
      burgerMain.style.transform = ANIMATION.BURGER.CLOSE.MAIN;
      burgerWindow.style.transform = ANIMATION.BURGER.CLOSE.WINDOW;
      burgerWindow.style.display = ANIMATION.BURGER.CLOSE.DISPLAY;
      isBurgerOpen.current = false;
    }
  }, [isMd]);

  const handleBurgerToggle = useCallback(() => {
    const burgerWindow = document.getElementById("burger-window");
    const burgerMain = document.getElementById("burger-main");

    if (!burgerWindow || !burgerMain) return;

    isBurgerOpen.current = !isBurgerOpen.current;

    if (isBurgerOpen.current) {
      burgerMain.style.transform = ANIMATION.BURGER.OPEN.MAIN;
      burgerWindow.style.display = ANIMATION.BURGER.OPEN.DISPLAY;
      
      setTimeout(() => {
        burgerWindow.style.transform = ANIMATION.BURGER.OPEN.WINDOW;
        burgerWindow.style.opacity = ANIMATION.BURGER.OPEN.OPACITY;
      }, ANIMATION.DELAY);
    } else {
      burgerWindow.style.transform = ANIMATION.BURGER.CLOSE.WINDOW;
      burgerWindow.style.opacity = ANIMATION.BURGER.CLOSE.OPACITY;
      burgerMain.style.transform = ANIMATION.BURGER.CLOSE.MAIN;
      
      setTimeout(() => {
        burgerWindow.style.display = ANIMATION.BURGER.CLOSE.DISPLAY;
      }, ANIMATION.DURATION);
    }
  }, []);

  const handleShopToggle = useCallback(() => {
    const shopMenu = document.getElementById("shop-menu");
    const menuButton = document.getElementById("menu-button");

    if (!shopMenu || !menuButton) return;

    isShopOpen.current = !isShopOpen.current;

    if (isShopOpen.current) {
      menuButton.style.transform = ANIMATION.SHOP.OPEN.BUTTON;
      shopMenu.style.display = ANIMATION.SHOP.OPEN.DISPLAY;
      
      setTimeout(() => {
        shopMenu.style.transform = ANIMATION.SHOP.OPEN.MENU;
      }, ANIMATION.DELAY);
    } else {
      shopMenu.style.transform = ANIMATION.SHOP.CLOSE.MENU;
      menuButton.style.transform = ANIMATION.SHOP.CLOSE.BUTTON;
      
      setTimeout(() => {
        shopMenu.style.display = ANIMATION.SHOP.CLOSE.DISPLAY;
      }, ANIMATION.DURATION);
    }
  }, []);

  return { 
    isBurgerOpen: isBurgerOpen.current, 
    isShopOpen: isShopOpen.current, 
    handleBurgerToggle, 
    handleShopToggle 
  };
};