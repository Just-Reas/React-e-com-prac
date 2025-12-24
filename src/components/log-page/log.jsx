import { useEffect, useRef, useState } from "react";
import styles from "./log.module.scss";
import { useForm, FormProvider } from "react-hook-form";
import InputController from "./utils/controllerSettings";

const LogSection = () => {
  const signContainerRef = useRef(null);
  const signInContainerRef = useRef(null);
  const signUpContainerRef = useRef(null);

  const toSignIn = () => {
    signContainerRef.current.style.display = "none";
    signInContainerRef.current.style.display = "flex";
    signUpContainerRef.current.style.display = "none";
  };

  const toSignUp = () => {
    signContainerRef.current.style.display = "none";
    signInContainerRef.current.style.display = "none";
    signUpContainerRef.current.style.display = "flex";
  };

  const goBack = () => {
    signContainerRef.current.style.display = "flex";
    signInContainerRef.current.style.display = "none";
    signUpContainerRef.current.style.display = "none";
  };

  const loginFormMethods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const registerFormMethods = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    mode: "onChange",
  });

  const { watch: loginWatch, handleSubmit: handleLoginSubmit } =
    loginFormMethods;
  const { watch: registerWatch, handleSubmit: handleRegisterSubmit } =
    registerFormMethods;

  const onLoginSubmit = (data) => {
    console.log("Login data:", data);
  };

  const onRegisterSubmit = (data) => {
    console.log("Register data:", data);
  };

  const registerPassword = registerWatch("password");

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

          <FormProvider {...loginFormMethods}>
            <div
              className={styles.containerLogin}
              id="signin-container"
              ref={signInContainerRef}
            >
              <div className={styles.containerLoginInner}>
                <div className={styles.loginText}>Sign In</div>
                <div className={styles.buttonLine}></div>
                <form
                  className={styles.loginForm}
                  onSubmit={handleLoginSubmit(onLoginSubmit)}
                >
                  <InputController
                    name="email"
                    rules={{
                      required: "Email required!",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Wrong email format!",
                      },
                    }}
                    type="email"
                    id="login-email"
                    autoComplete="email"
                    label="Email"
                    containerClassName={styles.emailContainer}
                  />

                  <InputController
                    name="password"
                    rules={{
                      required: "Password required!",
                      minLength: {
                        value: 6,
                        message: "6 characters minimum!",
                      },
                    }}
                    type="password"
                    id="login-password"
                    autoComplete="current-password"
                    label="Password"
                    containerClassName={styles.passwordContainer}
                  />

                  <button type="submit" className={styles.loginButton}>
                    Go
                  </button>
                </form>

                <a className={styles.goBack} onClick={goBack}>
                  Go back
                </a>
              </div>
            </div>
          </FormProvider>

          <FormProvider {...registerFormMethods}>
            <div
              className={styles.containerRegister}
              id="signup-container"
              ref={signUpContainerRef}
            >
              <div className={styles.containerRegisterInner}>
                <div className={styles.registerText}>Sign Up</div>
                <div className={styles.buttonLine}></div>
                <form
                  className={styles.loginForm}
                  onSubmit={handleRegisterSubmit(onRegisterSubmit)}
                >
                  <InputController
                    name="name"
                    rules={{
                      required: "Name required!",
                      minLength: {
                        value: 3,
                        message: "3 characters minimum!",
                      },
                    }}
                    type="text"
                    id="register-name"
                    autoComplete="name"
                    label="Name"
                    containerClassName={styles.nameRegContainer}
                  />

                  <InputController
                    name="email"
                    rules={{
                      required: "Email required!",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Wrong email format!",
                      },
                    }}
                    type="email"
                    id="register-email"
                    autoComplete="email"
                    label="Email"
                    containerClassName={styles.nameRegContainer}
                  />

                  <InputController
                    name="password"
                    rules={{
                      required: "Password required!",
                      minLength: {
                        value: 6,
                        message: "6 characters minimum!",
                      },
                    }}
                    type="password"
                    id="register-password"
                    autoComplete="new-password"
                    label="Password"
                    containerClassName={styles.nameRegContainer}
                  />

                  <InputController
                    name="repeatPassword"
                    rules={{
                      required: "Repeat password",
                      validate: (value) =>
                        value === registerPassword || "Passwords doesn't match",
                    }}
                    type="password"
                    id="register-password-repeat"
                    autoComplete="new-password"
                    label="Repeat password"
                    containerClassName={styles.nameRegContainer}
                  />

                  <button type="submit" className={styles.loginButton}>
                    Go
                  </button>
                </form>
                <a className={styles.goBack} onClick={goBack}>
                  Go back
                </a>
              </div>
            </div>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default LogSection;
