import Button from "./ui/text-button";
import styles from "./first-section.module.scss";
import { useNavigate } from "react-router-dom";

const FirstSection = () => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/shop");
  };

  return (
    <div className={styles.inner}>
      <div className="containerSup">
        <div className={styles.headerInner}>
          <div className={styles.descriptionInner}>
            <div className={styles.descriptionHeader}>
              <h1>
                FIND CLOTHES<br></br>THAT MATCHES<br></br>YOUR STYLE
              </h1>
            </div>
            <div className={styles.descriptionDesc}>
              <div>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </div>
            </div>
          </div>
          <Button onClick={handleShopClick} children="Shop Now" className="buttonMain" />
          <div className={styles.descriptionMenu}>
            <div className={styles.descriptionItem}>
              <div className={styles.descriptionItemHeader}>200+</div>
              <div className={styles.descriptionItemDesc}>
                International Brands
              </div>
            </div>
            <div className={styles.descriptionItem}>
              <div className={styles.descriptionItemLine}></div>
            </div>
            <div className={styles.descriptionItem}>
              <div className={styles.descriptionItemHeader}>2,000+</div>
              <div className={styles.descriptionItemDesc}>
                High-Quality Products
              </div>
            </div>
            <div className={styles.descriptionItem}>
              <div className={styles.descriptionItemLine}></div>
            </div>
            <div className={styles.descriptionItem}>
              <div className={styles.descriptionItemHeader}>30,000+</div>
              <div className={styles.descriptionItemDesc}>Happy Customers</div>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.imgMain}
            src="./first-section.jpg"
            alt="first-img"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
