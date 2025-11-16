import FirstSectionDescription from "./first-section-description/first-section-description";
import styles from "./first-section.module.scss";

const FirstSection = () => {
  return (
    <div className={styles.inner}>
      <div className="container">
          <FirstSectionDescription />
      </div>
    </div>
  );
};

export default FirstSection;
