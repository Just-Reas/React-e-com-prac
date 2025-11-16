import { useCallback, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const headerMenuScript = () => {
  const isLg = useMediaQuery({ maxWidth: 992 });
  const isMd = useMediaQuery({ maxWidth: 768 });
  const isSm = useMediaQuery({ maxWidth: 576 });



  useEffect(() => {
    const search = document.getElementById("search");
    const searchMain = document.getElementById("search-main");
    const list = document.getElementById("menu-list");
    const discount = document.getElementById("discount-button");
    const searchButton = document.getElementById("search-button");
    const profileButton = document.getElementById("profile-button");
    const buyButton = document.getElementById("buy-button");
    const headerIcon = document.getElementById("header-icon");
    const headerInner = document.getElementById("header-inner")
    // const burgerWindow = document.getElementById("burger-window");
    // const burgerMain = document.getElementById("burger-main");

    if (!isSm) {
      if (!isMd) {
        if (!isLg) {
          search.style.display = "unset";
          searchMain.style.display="unset"
          list.style.display = "flex";
          discount.style.display = "none";
          searchButton.style.display = "none";
          console.log(`1`);
        } else {
          // burgerMain.style.transform ="rotateZ(0deg)"
          // burgerWindow.style.display = "none";
          profileButton.style.display="flex"
          buyButton.style.display="flex"
          headerIcon.style.display="flex"
          discount.style.display="none"
          searchButton.style.display = "flex";
          search.style.display = "none";
          searchMain.style.maxWidth = "unset";
          list.style.display = "flex";
          console.log(`2`);
        }
      } else {
        searchButton.style.display="flex"
        discount.style.display="none"
        list.style.display = "none";
        search.style.display = "none";
        console.log(`3`);
      }
    }else{
      headerInner.style.rowGap = "0"
      search.style.display="none"
      searchButton.style.display="flex"
      discount.style.display="none"

      profileButton.style.display="flex"
          buyButton.style.display="flex"
          headerIcon.style.display="flex"
      console.log('4')
    }
  }, [isLg, isMd, isSm]);

  const buttonSearch = useCallback(() => {
    const discount = document.getElementById("discount-button");
    const search = document.getElementById("search");
    const list = document.getElementById("menu-list");
    const searchButton = document.getElementById("search-button");
    const searchMain = document.getElementById("search-main");
    const buyButton = document.getElementById("buy-button");
    const profileButton = document.getElementById("profile-button");
    const headerIcon = document.getElementById("header-icon");
    const headerInner = document.getElementById("header-inner")

    if (!isSm){
      if (!isMd) {
      searchMain.style.display = "unset";
      search.style.display = "unset";
      list.style.display = "none";
      searchButton.style.display = "none";
      discount.style.display = "flex";
    } else {
      searchMain.style.display = "unset";
      search.style.display = "unset";
      list.style.display = "none";
      searchButton.style.display = "none";
      discount.style.display = "flex";
      buyButton.style.display = "none";
      profileButton.style.display = "none";
      headerIcon.style.display = "none";
    }
    }else{
      headerInner.style.rowGap = "1rem"
      search.style.display="flex"
      searchMain.style.display="flex"
      searchButton.style.display="none"
      discount.style.display="flex"
    }
  });

  const closeSearch = useCallback(() => {
    const discount = document.getElementById("discount-button");
    const search = document.getElementById("search");
    const list = document.getElementById("menu-list");
    const searchButton = document.getElementById("search-button");
    const searchMain = document.getElementById("search-main");
    const buyButton = document.getElementById("buy-button");
    const profileButton = document.getElementById("profile-button");
    const headerIcon = document.getElementById("header-icon");

    if (!isSm){
      if (!isMd) {
      discount.style.display = "none";
      searchButton.style.display = "flex";
      list.style.display = "flex";
      search.style.display = "none";
    } else {
      discount.style.display = "none";
      searchButton.style.display = "flex";
      list.style.display = "none";
      search.style.display = "none";
      buyButton.style.display = "flex";
      profileButton.style.display = "flex";
      headerIcon.style.display = "flex";
    }
    }else{
      setTimeout(() =>{headerInner.style.rowGap = "0"},10)
      search.style.display="none"
      searchMain.style.display="none"
      searchButton.style.display="flex"
      discount.style.display="none"
    }
  });

  return { buttonSearch, closeSearch };
};
