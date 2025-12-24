import styles from "../log.module.scss";
import { useForm, FormProvider } from "react-hook-form";
import InputController from "./controllerSettings";
import { useRef } from "react";

export const LoginForm = () => {
  const signInContainerRef = useRef(null);
  const goBack = () => {
    const signContainer = document.getElementById("sign-container");
    const signUpContainer = document.getElementById("signup-container");
    signContainer.style.display = "flex";
    signInContainerRef.current.style.display = "none";
    signUpContainer.style.display = "none";
  };
  const loginFormMethods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const { watch: loginWatch, handleSubmit: handleLoginSubmit } =
    loginFormMethods;
  const onLoginSubmit = (data) => {
    console.log("Login data:", data);
  };
  return (
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
  );
};
