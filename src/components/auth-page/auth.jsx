import { useEffect, useRef, useState } from "react";
import styles from "./auth.module.scss";
import { LoginForm } from "./authLogic/loginForm";
import { RegisterForm } from "./authLogic/registerForm";

const LogSection = () => {
  const signContainerRef = useRef(null);

  const [formState, setFormState] = useState(null);

  const goBack = () => {
    setFormState(null);
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
          {!formState && (
            <div
              className={styles.container}
              id="sign-container"
              ref={signContainerRef}
            >
              <div className={styles.logButtonsContainer}>
                <div className={styles.buttonText}>Sign In/Up</div>
                <div className={styles.buttonLine}></div>
                <button
                  onClick={() => setFormState("login")}
                  className={styles.buttonLogin}
                >
                  SIGN IN
                </button>
                <button
                  onClick={() => setFormState("register")}
                  className={styles.buttonRegister}
                >
                  SIGN UP
                </button>
              </div>
            </div>
          )}

          {formState === "login" && <LoginForm goBack={goBack} />}
          {formState === "register" && <RegisterForm goBack={goBack} />}
        </div>
      </div>
    </div>
  );
};

export default LogSection;
