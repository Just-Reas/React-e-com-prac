import { useCallback, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

export const headerBurgerScript = () => {
  const burgerFlag = useRef(false);
  const buttonFlag = useRef(false);

  const isMd = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const burgerWindow = document.getElementById("burger-window");
    const burgerMain = document.getElementById("burger-main");

    if (isMd || !isMd) {
      burgerMain.style.transform = "rotateZ(0deg)";
      burgerWindow.style.display = "none";
      burgerFlag.current = true;
      burgerWindow.style.transform = "translateX(-9.375rem)";
      burgerWindow.style.display = "none";
    }
  }, [isMd]);

  const openBurger = useCallback(() => {
    const burgerWindow = document.getElementById("burger-window");
    const burgerMain = document.getElementById("burger-main");
    console.log(burgerFlag.current);
    burgerFlag.current = !burgerFlag.current;

    if (!burgerFlag.current) {
      burgerMain.style.transform = "rotateZ(90deg)";
      burgerWindow.style.display = "flex";
      setTimeout(() => {
        burgerWindow.style.transform = "translateX(0rem)";
        burgerWindow.style.opacity = "1";
      }, 10);
    } else {
      burgerMain.style.transform = "rotateZ(0deg)";
      burgerWindow.style.transform = "translateX(-9.375rem)";
      burgerWindow.style.opacity = "0";
      setTimeout(() => {
        burgerWindow.style.display = "none";
      }, 300);
    }
  });

  const openShop = useCallback(() => {
    const shopMenu = document.getElementById("shop-menu");
    const menuButton = document.getElementById("menu-button");

    buttonFlag.current = !buttonFlag.current;

    if (buttonFlag.current) {
      menuButton.style.transform = "rotateZ(0deg) translateY(0.3125rem)";
      shopMenu.style.display = "flex";
      setTimeout(() => {
        shopMenu.style.transform = "translateY(0)";
      }, 10);
    } else {
      shopMenu.style.transform = "translateY(-0.9375rem)";
      menuButton.style.transform = "rotateZ(270deg)";
      setTimeout(() => {
        shopMenu.style.display = "none";
      }, 300);
    }
  });

  return { burgerFlag, buttonFlag, openBurger, openShop };
};
