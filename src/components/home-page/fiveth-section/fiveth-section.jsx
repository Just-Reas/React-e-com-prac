import { useEffect, useRef } from "react";
import styles from "./fiveth-section.module.scss";

const FivethSection = () => {

  return (
    <div className={styles.inner}>
      <div className="containerSup">
        <div className={styles.box}>
         <div className={styles.text}>BROWSE BY DRESS STYLE</div>
          <div className={styles.twoText}>BROWSE BY <span className={styles.span}>DRESS STYLE</span></div>
          <div className={styles.menu}>
            <a className={styles.item} href="#">
              <div className={styles.itemText}>Casual</div>
              <img
                className={styles.itemSvg}
                src="./fiveth-section/casual.jpg"
                alt="casual"
              />
            </a>
            <a className={styles.item} href="#">
              <div className={styles.itemText}>Formal</div>
              <img
                className={styles.itemSvg}
                src="./fiveth-section/formal.jpg"
                alt="formal"
              />
            </a>
            <a className={styles.item} href="#">
              <div className={styles.itemText}>Party</div>
              <img
                className={styles.itemSvg}
                src="./fiveth-section/party.jpg"
                alt="party"
              />
            </a>
            <a className={styles.item} href="#">
              <div className={styles.itemText}>Gym</div>
              <img
                className={styles.itemSvg}
                src="./fiveth-section/gym.jpg"
                alt="gym"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FivethSection;
