import { useEffect, useRef, useState } from "react";
import styles from "./log.module.scss";
import { useForm, FormProvider } from "react-hook-form";
import InputController from "./utils/controllerSettings";
import { LoginForm } from "./utils/loginForm";
import { RegisterForm } from "./utils/registerForm";

const LogSection = () => {
  const signContainerRef = useRef(null);

  const toSignIn = () => {
    const signInContainer = document.getElementById("signin-container");
    const signUpContainer = document.getElementById("signup-container");
    signContainerRef.current.style.display = "none";
    signInContainer.style.display = "flex";
    signUpContainer.style.display = "none";
  };

  const toSignUp = () => {
    const signInContainer = document.getElementById("signin-container");
    const signUpContainer = document.getElementById("signup-container");
    signContainerRef.current.style.display = "none";
    signInContainer.style.display = "none";
    signUpContainer.style.display = "flex";
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
          <div
            className={styles.container}
            id="sign-container"
            ref={signContainerRef}
          >
            <div className={styles.logButtonsContainer}>
              <div className={styles.buttonText}>Sign In/Up</div>
              <div className={styles.buttonLine}></div>
              <button onClick={toSignIn} className={styles.buttonLogin}>
                SIGN IN
              </button>
              <button onClick={toSignUp} className={styles.buttonRegister}>
                SIGN UP
              </button>
            </div>
          </div>

          <LoginForm />

          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default LogSection;
