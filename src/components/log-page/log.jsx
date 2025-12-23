import { useEffect, useRef, useState } from "react";
import styles from "./log.module.scss";
import { Controller, useForm } from "react-hook-form";

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

  const {
    control: loginControl,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
    reset: loginReset,
    watch: loginWatch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const {
    control: registerControl,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
    reset: registerReset,
    watch: registerWatch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    mode: "onChange",
  });

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
                <div className={styles.emailContainer}>
                  <Controller
                    name="email"
                    control={loginControl}
                    rules={{
                      required: "Email required!",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Wrong email format!",
                      },
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder=" "
                        className={`${styles.input} ${
                          loginErrors.email ? styles.inputError : ""
                        }`}
                        name="email"
                        type="email"
                        id="login-email"
                        autoComplete="email"
                      />
                    )}
                  />
                  <label className={styles.label} htmlFor="login-email">
                    Email
                  </label>
                  {loginErrors.email && (
                    <span className={styles.errorMessage}>
                      {loginErrors.email.message}
                    </span>
                  )}
                </div>

                <div className={styles.passwordContainer}>
                  <Controller
                    name="password"
                    control={loginControl}
                    rules={{
                      required: "Password reauired!",
                      minLength: {
                        value: 6,
                        message: "6 characters minimum!",
                      },
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder=" "
                        className={`${styles.input} ${
                          loginErrors.password ? styles.inputError : ""
                        }`}
                        name="password"
                        type="password"
                        id="login-password"
                        autoComplete="current-password"
                      />
                    )}
                  />
                  <label htmlFor="login-password" className={styles.label}>
                    Password
                  </label>
                  {loginErrors.password && (
                    <span className={styles.errorMessage}>
                      {loginErrors.password.message}
                    </span>
                  )}
                </div>

                <button type="submit" className={styles.loginButton}>
                  Go
                </button>
              </form>

              <a className={styles.goBack} onClick={goBack}>
                Go back
              </a>
            </div>
          </div>

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
                <div className={styles.nameRegContainer}>
                  <Controller
                    name="name"
                    control={registerControl}
                    rules={{
                      required: "Name required!",
                      minLength: {
                        value: 3,
                        message: "3 characters minimum!",
                      },
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder=" "
                        className={`${styles.input} ${
                          registerErrors.name ? styles.inputError : ""
                        }`}
                        type="text"
                        id="register-name"
                        autoComplete="name"
                      />
                    )}
                  />
                  <label
                    className={styles.label}
                    htmlFor="register-name"
                    id="register-name-label"
                  >
                    Name
                  </label>
                  {registerErrors.name && (
                    <span className={styles.errorMessage}>
                      {registerErrors.name.message}
                    </span>
                  )}
                </div>

                <div className={styles.nameRegContainer}>
                  <Controller
                    name="email"
                    control={registerControl}
                    rules={{
                      required: "Email required!",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Wrong email format!",
                      },
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder=" "
                        className={`${styles.input} ${
                          registerErrors.email ? styles.inputError : ""
                        }`}
                        type="email"
                        id="register-email"
                        autoComplete="email"
                      />
                    )}
                  />
                  <label
                    className={styles.label}
                    htmlFor="register-email"
                    id="register-email-label"
                  >
                    Email
                  </label>
                  {registerErrors.email && (
                    <span className={styles.errorMessage}>
                      {registerErrors.email.message}
                    </span>
                  )}
                </div>

                <div className={styles.nameRegContainer}>
                  <Controller
                    name="password"
                    control={registerControl}
                    rules={{
                      required: "Password required!",
                      minLength: {
                        value: 6,
                        message: "6 characters minimum!",
                      },
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder=" "
                        className={`${styles.input} ${
                          registerErrors.password ? styles.inputError : ""
                        }`}
                        type="password"
                        id="register-password"
                        autoComplete="new-password"
                      />
                    )}
                  />
                  <label
                    className={styles.label}
                    htmlFor="register-password"
                    id="register-password-label"
                  >
                    Password
                  </label>
                  {registerErrors.password && (
                    <span className={styles.errorMessage}>
                      {registerErrors.password.message}
                    </span>
                  )}
                </div>

                <div className={styles.nameRegContainer}>
                  <Controller
                    name="repeatPassword"
                    control={registerControl}
                    rules={{
                      required: "Repeat password",
                      validate: (value) =>
                        value === registerPassword || "Passwords doesn't match",
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder=" "
                        className={`${styles.input} ${
                          registerErrors.repeatPassword ? styles.inputError : ""
                        }`}
                        type="password"
                        id="register-password-repeat"
                        autoComplete="new-password"
                      />
                    )}
                  />
                  <label
                    className={styles.label}
                    htmlFor="register-password-repeat"
                    id="register-password-repeat-label"
                  >
                    Repeat password
                  </label>
                  {registerErrors.repeatPassword && (
                    <span className={styles.errorMessage}>
                      {registerErrors.repeatPassword.message}
                    </span>
                  )}
                </div>
                <button type="submit" className={styles.loginButton}>
                  Go
                </button>
              </form>
              <a className={styles.goBack} onClick={goBack}>
                Go back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogSection;
