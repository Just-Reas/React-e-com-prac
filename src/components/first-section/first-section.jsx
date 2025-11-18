import FirstSectionDescription from "./first-section-description/first-section-description";
import FirstSectionImg from "./first-section-img/first-section-img";
import styles from "./first-section.module.scss";

const FirstSection = () => {
  return (
    <div className={styles.inner}>
      <div className="containerSup">
          <FirstSectionDescription />
          <FirstSectionImg/>
      </div>
    </div>
  );
};

export default FirstSection;
