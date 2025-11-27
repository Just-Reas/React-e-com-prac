import styles from "./line.module.scss";

const Line = () => {
  return (
    <div className={styles.inner}>
      <div className="containerSup">
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Line;
