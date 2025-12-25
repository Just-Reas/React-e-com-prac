import styles from "../log.module.scss";
import { useForm, FormProvider } from "react-hook-form";
import InputController from "./controllerSettings";
import { useRef } from "react";
export const RegisterForm = () => {
  const signUpContainerRef = useRef(null);
  const goBack = () => {
    const signContainer = document.getElementById("sign-container");
    const signInContainer = document.getElementById("signin-container");
    signContainer.style.display = "flex";
    signInContainer.style.display = "none";
    signUpContainerRef.current.style.display = "none";
  };
  const registerFormMethods = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    mode: "onChange",
  });
  const { watch: registerWatch, handleSubmit: handleRegisterSubmit } =
    registerFormMethods;

  const onRegisterSubmit = (data) => {
    console.log("Register data:", data);
  };

  const registerPassword = registerWatch("password");
  return (
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
  );
};
