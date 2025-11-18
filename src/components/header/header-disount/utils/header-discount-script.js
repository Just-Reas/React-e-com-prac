import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const BREAKPOINTS = {
  VS: 334,
  SM: 576,
};

const TOP_VALUES = {
  DEFAULT: "2.625rem",
  SM: "2.25rem",
  VS: "3.375rem",
  BUTTON_ACTIVE: "0",
};

export const useHeaderDiscountScript = () => {
  const isSm = useMediaQuery({ maxWidth: BREAKPOINTS.SM });
  const isVs = useMediaQuery({ maxWidth: BREAKPOINTS.VS });
  const [isDiscountClosed, setDiscountClosed] = useState(false);

  useEffect(() => {
    const burgerWindow = document.getElementById("burger-window");
    if (!burgerWindow) return;

    let topValue;
    
    if (isDiscountClosed) {
      topValue = TOP_VALUES.BUTTON_ACTIVE;
    } else {
      switch (true) {
        case isVs:
          topValue = TOP_VALUES.VS;
          break;
        case isSm:
          topValue = TOP_VALUES.SM;
          break;
        default:
          topValue = TOP_VALUES.DEFAULT;
      }
    }

    burgerWindow.style.top = topValue;
  }, [isSm, isVs, isDiscountClosed]);

  const handleDiscountClose = useCallback(() => {
    const discountWindow = document.getElementById("discount-window");
    if (discountWindow) {
      discountWindow.style.display = "none";
    }
    setDiscountClosed(true);
  }, []);

  return { handleDiscountClose };
};