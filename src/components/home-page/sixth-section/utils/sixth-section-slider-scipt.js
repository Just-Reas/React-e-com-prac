import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useSliderScript = () =>{
  const isHg = useMediaQuery({ maxWidth: 1200 });
  const isLg = useMediaQuery({ maxWidth: 992 });
  const isMd = useMediaQuery({ maxWidth: 768 });
  const isSm = useMediaQuery({ maxWidth: 390 });
  const widthRef = useRef();
  const scrollSize = useRef(0);

  useEffect(() => {
    const width = document.getElementById("review-menu");
    const item = document.getElementById("review-item");
    const blockGap = 20; // отступ между элементами списка
    const blockWidth = item.offsetWidth * 7 + blockGap * 6; // рассчёт полной ширины списка с отзывами
    const blockCenter = blockWidth / 2; // центр ( начало скоролла)
    widthRef.current = blockCenter; // инициализация положения прокрутки
    width.style.transform = "TranslateX(0)"
    scrollSize.current = 0
    console.log(item.offsetWidth, isMd, isSm, blockWidth, blockCenter);
  }, [isLg,isMd,isSm,isHg]);

  const leftSlide = () => {
    const item = document.getElementById("review-item");
    const menu = document.getElementById("review-menu");
    if (isLg) {
      if (widthRef.current - item.offsetWidth > item.offsetWidth / 2) {
        // условие чтобы всегда можно было прокручивать до конца/начала последнего эл-та
        scrollSize.current -= item.offsetWidth + 20; // общий рассчёт на сколько в данный момент смещён список относительно начала
        menu.style.transform = `translateX(${scrollSize.current}px)`; //смещаем список
        widthRef.current -= item.offsetWidth; // смещаем общее положение т.к. сместили список
        // console.log(widthRef.current);
      }
    } else {
      if (widthRef.current - item.offsetWidth > item.offsetWidth) {
        // условие чтобы всегда можно было прокручивать до конца/начала последнего эл-та
        scrollSize.current -= item.offsetWidth + 20; // общий рассчёт на сколько в данный момент смещён список относительно начала
        menu.style.transform = `translateX(${scrollSize.current}px)`; //смещаем список
        widthRef.current -= item.offsetWidth; // смещаем общее положение т.к. сместили список
        // console.log(widthRef.current);
      }
    }
  };

  const rightSlide = () => {
    const item = document.getElementById("review-item");
    const menu = document.getElementById("review-menu");
    if (isLg) {
      if (
        widthRef.current + item.offsetWidth <
        (item.offsetWidth * 7 + 20 * 6 - (item.offsetWidth) / 2 )
      ) {
        console.log(widthRef.current + item.offsetWidth)
        console.log(item.offsetWidth * 7 + 20 * 6 - item.offsetWidth)
        scrollSize.current += item.offsetWidth + 20;
        console.log(`scroll: ${scrollSize.current}`);
        menu.style.transform = `translateX(${scrollSize.current}px)`;
        widthRef.current += item.offsetWidth;
        // console.log(widthRef.current);
      }
    } else {
      if (
        widthRef.current + item.offsetWidth <
        item.offsetWidth * 7 + 20 * 6 - item.offsetWidth
      ) {
        scrollSize.current += item.offsetWidth + 20;
        console.log(`scroll: ${scrollSize.current}`);
        menu.style.transform = `translateX(${scrollSize.current}px)`;
        widthRef.current += item.offsetWidth;
        console.log(widthRef.current);
      }
    }
  };
  return {rightSlide,leftSlide}
}