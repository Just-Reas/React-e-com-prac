import { useCallback, useRef } from "react";

export const headerListScript = () =>{
    const buttonFlag = useRef(false);

  const shopButton = useCallback(() => {
    buttonFlag.current = !buttonFlag.current;
    const menu = document.getElementById('menu-shop')
    const button = document.getElementById('menu-button')
    if (buttonFlag.current == true) {
      menu.style.opacity = "1"
      menu.style.transform = "translateY(0)"
      button.style.transform = "rotateX(180deg) translateY(-0.125rem)"
    } else {
      menu.style.opacity = "0"
      menu.style.transform = "translateY(-1.25rem)"
      button.style.transform ="rotateX(0) translateY(0)"
    }
  },[]);

  return {shopButton}
}