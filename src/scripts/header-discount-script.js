import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const headerDiscountScript = () => {
  const isSm = useMediaQuery({ maxWidth: 576 });
  const isVs = useMediaQuery({ maxWidth: 334 });

  const [buttonFlag, setButtonFlag] = useState(false);

  useEffect(() => {
    console.log(`AAAAAAAAAAAAAA`);
    const burgerWindow = document.getElementById("burger-window");

    if (!isVs) {
      if (!isSm) {
        if (!isSm && buttonFlag) {
          burgerWindow.style.top = "0";
          console.log(`true`);
        } else if (!isSm && !buttonFlag) {
          burgerWindow.style.top = "2.625rem";
          console.log(`false`);
        }
      } else {
        if (isSm && buttonFlag) {
          burgerWindow.style.top = "0";
          console.log(`true`);
        } else if (isSm && !buttonFlag) {
          burgerWindow.style.top = "2.25rem";
          console.log(`false`);
        }
      }
    } else {
      if (isVs && buttonFlag) {
        burgerWindow.style.top = "0";
        console.log(`true`);
      } else if (isVs && !buttonFlag) {
        burgerWindow.style.top = "3.375rem";
        console.log(`false`);
      }
    }
  }, [isSm, isVs, buttonFlag]);

  const discountClose = useCallback( () => {
    const windows = document.getElementById("discount-window");
    windows.style.display = "none";
    setButtonFlag(true);
  });

  return {discountClose}
};
