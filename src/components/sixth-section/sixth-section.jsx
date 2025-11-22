import { useRef, useEffect, useState } from "react";
import styles from "./sixth-section.module.scss";
import Review from "./ui/review";
import { useMediaQuery } from "react-responsive";

const SixthSection = () => {
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
    console.log(item.offsetWidth, isMd, isSm, blockWidth, blockCenter);
  }, []);

  const leftSlide = () => {
    const item = document.getElementById("review-item");
    const menu = document.getElementById("review-menu");
    if (widthRef.current - item.offsetWidth > item.offsetWidth) {
      // условие чтобы всегда можно было прокручивать до конца/начала последнего эл-та
      scrollSize.current -= item.offsetWidth + 20; // общий рассчёт на сколько в данный момент смещён список относительно начала
      menu.style.transform = `translateX(${scrollSize.current}px)`; //смещаем список
      widthRef.current -= item.offsetWidth; // смещаем общее положение т.к. сместили список
      console.log(widthRef.current);
    }
  };

  const rightSlide = () => {
    const item = document.getElementById("review-item");
    const menu = document.getElementById("review-menu");
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
  };
  return (
    <div className={styles.inner}>
      <div className="containerSup">
        <div className={styles.headerContainer}>
          <div className={styles.text}>OUR HAPPY CUSTOMERS</div>
          <div className={styles.buttons}>
            <button className={styles.leftbutton} onClick={leftSlide}>
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.08089 0.332033L0.330892 7.08203C0.226013 7.18655 0.142797 7.31074 0.0860175 7.44749C0.0292357 7.58423 5.62635e-06 7.73084 5.62811e-06 7.87891C5.62988e-06 8.02697 0.0292357 8.17358 0.0860175 8.31033C0.142797 8.44708 0.226013 8.57127 0.330892 8.67578L7.08089 15.4258C7.29224 15.6371 7.57888 15.7559 7.87777 15.7559C8.17665 15.7559 8.4633 15.6371 8.67464 15.4258C8.88599 15.2144 9.00472 14.9278 9.00472 14.6289C9.00472 14.33 8.88599 14.0434 8.67464 13.832L3.84558 9.00297L17.6268 9.00297C17.9252 9.00297 18.2113 8.88444 18.4223 8.67347C18.6333 8.46249 18.7518 8.17634 18.7518 7.87797C18.7518 7.5796 18.6333 7.29345 18.4223 7.08248C18.2113 6.8715 17.9252 6.75297 17.6268 6.75297L3.84558 6.75297L8.67558 1.92391C8.88693 1.71256 9.00566 1.42592 9.00566 1.12703C9.00566 0.828148 8.88693 0.541504 8.67558 0.330159C8.46424 0.118815 8.17759 8.02347e-05 7.87871 8.02383e-05C7.57982 8.02419e-05 7.29318 0.118815 7.08183 0.330159L7.08089 0.332033Z"
                  fill="black"
                />
              </svg>
            </button>
            <button className={styles.rightbutton} onClick={rightSlide}>
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6709 0.332033L18.4209 7.08203C18.5258 7.18655 18.609 7.31074 18.6658 7.44749C18.7226 7.58423 18.7518 7.73084 18.7518 7.87891C18.7518 8.02697 18.7226 8.17358 18.6658 8.31033C18.609 8.44708 18.5258 8.57127 18.4209 8.67578L11.6709 15.4258C11.4596 15.6371 11.1729 15.7559 10.8741 15.7559C10.5752 15.7559 10.2885 15.6371 10.0772 15.4258C9.86584 15.2144 9.74711 14.9278 9.74711 14.6289C9.74711 14.33 9.86584 14.0434 10.0772 13.832L14.9063 9.00297L1.125 9.00297C0.826632 9.00297 0.540483 8.88444 0.329505 8.67347C0.118527 8.46249 9.03849e-08 8.17634 9.39429e-08 7.87797C9.75009e-08 7.5796 0.118527 7.29345 0.329505 7.08248C0.540483 6.8715 0.826632 6.75297 1.125 6.75297L14.9063 6.75297L10.0763 1.92391C9.86491 1.71256 9.74617 1.42592 9.74617 1.12703C9.74617 0.828148 9.86491 0.541504 10.0763 0.330159C10.2876 0.118815 10.5742 8.02347e-05 10.8731 8.02383e-05C11.172 8.02419e-05 11.4587 0.118815 11.67 0.330159L11.6709 0.332033Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.reviewContainer}>
        <ul className={styles.reviewMenu} id="review-menu">
          <li
            className={styles.reviewItem}
            data-review-type="slide"
            id="review-item"
          >
            <Review name="Adam A." />
          </li>
          <li className={styles.reviewItem} data-review-type="slide">
            <Review name="Bob B." />
          </li>
          <li className={styles.reviewItem} data-review-type="slide">
            <Review name="Clarity C." />
          </li>
          <li className={styles.reviewItem} data-review-type="slide">
            <Review name="Darvin D." />
          </li>
          <li className={styles.reviewItem} data-review-type="slide">
            <Review name="Eminem E." />
          </li>
          <li className={styles.reviewItem} data-review-type="slide">
            <Review name="Frank F." />
          </li>
          <li className={styles.reviewItem} data-review-type="slide">
            <Review name="Gilbert G." />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SixthSection;
