import styles from "./log.module.scss";

const LogSection = () => {
  const toSignIn = () => {
    const sign = document.getElementById("sign-container");
    const signIn = document.getElementById("signin-container");
    sign.style.display = "none";
    signIn.style.display = "flex";
  };
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
          <div className={styles.container} id="sign-container">
            <div className={styles.logButtonsContainer}>
              <div className={styles.buttonText}>Sign In/Up</div>
              <div className={styles.buttonLine}></div>
              <button onClick={toSignIn} className={styles.buttonLogin}>
                SIGN IN
              </button>
              <button href="#" className={styles.buttonRegister}>
                SIGN UP
              </button>
            </div>
          </div>
          <div className={styles.containerLogin} id="signin-container">
            <div className={styles.containerLoginInner}>
              <div className={styles.loginText}>Sign In</div>
              <div className={styles.buttonLine}></div>
              <div className={styles.emailContainer}>
                <label className={styles.label} htmlFor="login-email">Email</label>
                <input className={styles.input} type="email" required id="login-email"/>
              </div>
              <div className={styles.passwordContainer}>
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" />
              </div>
              <button className={styles.loginButton}>Go</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogSection;
