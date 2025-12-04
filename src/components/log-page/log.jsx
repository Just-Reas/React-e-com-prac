import styles from "./log.module.scss";

const LogSection = () => {
    const consoleLog = () =>{
        console.log(`AAAAAAAAAAA`)
    }
  return (
    <div className={styles.logInner}>
      <div className="containerSup">
        <div className={styles.logBox}>
          <div className={styles.logPngContainer}>
            <img
              className={styles.imgMain}
              src="./log/first-section-cutted.jpg"
              alt="first-img-cutted"
            />
          </div>
          <div className={styles.logButtonsInner}>
            <div className={styles.logButtonsContainer}>
              <div className={styles.buttonText}>Sign In/Up</div>
              <div className={styles.buttonLine}></div>
              <button onClick={consoleLog} className={styles.buttonLogin}>SIGN IN</button>
              <button href="#" className={styles.buttonRegister}>SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogSection;
