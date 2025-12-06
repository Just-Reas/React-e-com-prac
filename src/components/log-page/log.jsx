import { useEffect, useRef, useState } from "react";
import styles from "./log.module.scss";

const LogSection = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    password: "",
    repeatPassword: "",
  });
  const [validationStatus, setValidationStatus] = useState({
    name: false,
    password: false,
    repeatPassword: false,
  });

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(`Введённое значение: ${value}`);

    if (name === "name") {
      validateName(value);
    } else if (name === "password") {
      validatePassword(value);
    } else if (name === "repeatPassword") {
      validatePasswordRep(value, registerForm.password);
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(`Введённое значение: ${value}`);
  };

  const validateName = (name) => {
    const nameInput = document.getElementById("register-name");

    let error = "";
    let isValid = false;

    if (name.trim().length < 4 && name.trim().length > 0) {
      error = "Name length should be greater than 4";
      isValid = false;
      if (nameInput) nameInput.style.border = "2px solid red";
    } else if (name.trim().length >= 4) {
      error = "";
      isValid = true;
      if (nameInput) nameInput.style.border = "2px solid white";
    }

    setErrors((prev) => ({ ...prev, name: error }));
    setValidationStatus((prev) => ({ ...prev, name: isValid }));
  };

  const regNameHandleBlur = () => {
    const nameInput = document.getElementById("register-name");
    if (nameInput && !errors.name) {
      nameInput.style.border = "2px solid #949494";
    }
  };

  const regNameHandleFocus = () => {
    const nameInput = document.getElementById("register-name");
    if (nameInput && !errors.name) {
      nameInput.style.border = "2px solid white";
    }
  };

  const validatePassword = (pass) => {
    const passInput = document.getElementById("register-password");

    let error = "";
    let isValid = false;

    if (pass.trim().length < 8 && pass.trim().length > 0) {
      error = "The password length should be greater than 8";
    } else if (!/[A-Z]/.test(pass) && pass.trim().length > 0) {
      error = "The password should includes one uppercase word at least";
    } else if (
      !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass) &&
      pass.trim().length > 0
    ) {
      error = "The password should includes one special symbol at least";
    } else if (/\s/.test(pass) && pass.trim().length > 0) {
      error = "The password must not contain spaces.";
    } else if (pass.trim().length >= 8) {
      error = "";
      isValid = true;
    }

    setErrors((prev) => ({ ...prev, password: error }));
    setValidationStatus((prev) => ({ ...prev, password: isValid }));

    if (passInput) {
      if (error) {
        passInput.style.border = "2px solid red";
      } else {
        passInput.style.border = "2px solid white";
      }
    }
  };

  const regPassHandleBlur = () => {
    const passInput = document.getElementById("register-password");
    if (passInput && !errors.password) {
      passInput.style.border = "2px solid #949494";
    }
  };

  const regPassHandleFocus = () => {
    const passInput = document.getElementById("register-password");
    if (passInput && !errors.password) {
      passInput.style.border = "2px solid white";
    }
  };

  const validatePasswordRep = (pass, originalPass) => {
    const passInput = document.getElementById("register-password-repeat");

    let error = "";
    let isValid = false;

    if (pass.trim() !== originalPass && pass.trim().length > 0) {
      error = "Passwords don't match";
      isValid = false;
      if (passInput) passInput.style.border = "2px solid red";
    } else if (pass.trim() === originalPass && pass.trim().length > 0) {
      error = "";
      isValid = true;
      if (passInput) passInput.style.border = "2px solid white";
    }

    setErrors((prev) => ({ ...prev, repeatPassword: error }));
    setValidationStatus((prev) => ({ ...prev, repeatPassword: isValid }));
  };

  const loginSubmit = (e) => {
    e.preventDefault();
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(validationStatus).every(
      (status) => status === true
    );

    if (isFormValid) {
      alert(`Success!`);
    } else {
      alert(`Complete all the conditions!`);
    }
  };

  const toSignIn = () => {
    const sign = document.getElementById("sign-container");
    const signIn = document.getElementById("signin-container");
    const signUp = document.getElementById("signup-container");
    sign.style.display = "none";
    signIn.style.display = "flex";
    signUp.style.display = "none";
  };

  const toSignUp = () => {
    const sign = document.getElementById("sign-container");
    const signIn = document.getElementById("signin-container");
    const signUp = document.getElementById("signup-container");
    sign.style.display = "none";
    signIn.style.display = "none";
    signUp.style.display = "flex";
  };

  const goBack = () => {
    const sign = document.getElementById("sign-container");
    const signIn = document.getElementById("signin-container");
    const signUp = document.getElementById("signup-container");
    sign.style.display = "flex";
    signIn.style.display = "none";
    signUp.style.display = "none";
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
              <button onClick={toSignUp} className={styles.buttonRegister}>
                SIGN UP
              </button>
            </div>
          </div>
          <div className={styles.containerLogin} id="signin-container">
            <div className={styles.containerLoginInner}>
              <div className={styles.loginText}>Sign In</div>
              <div className={styles.buttonLine}></div>
              <form className={styles.loginForm} onSubmit={loginSubmit}>
                <div className={styles.emailContainer}>
                  <input
                    placeholder=" "
                    className={styles.input}
                    value={loginForm.email}
                    onChange={handleLoginChange}
                    name="email"
                    type="email"
                    required
                    id="login-email"
                  />
                  <label
                    className={styles.label}
                    htmlFor="login-email"
                    id="login-email-label"
                  >
                    Email
                  </label>
                </div>
                <div className={styles.passwordContainer}>
                  <input
                    placeholder=" "
                    className={styles.input}
                    name="password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    type="password"
                    required
                    id="login-password"
                  />
                  <label htmlFor="login-password" className={styles.label}>
                    Password
                  </label>
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
          <div className={styles.containerRegister} id="signup-container">
            <div className={styles.containerRegisterInner}>
              <div className={styles.registerText}>Sign Up</div>
              <div className={styles.buttonLine}></div>
              <form className={styles.loginForm} onSubmit={registerSubmit}>
                <div className={styles.nameRegContainer}>
                  <input
                    placeholder=" "
                    className={styles.input}
                    value={registerForm.name}
                    onChange={handleRegisterChange}
                    onFocus={regNameHandleFocus}
                    name="name"
                    onBlur={regNameHandleBlur}
                    type="text"
                    required
                    id="register-name"
                  />
                  <label
                    className={styles.label}
                    htmlFor="register-name"
                    id="register-name-label"
                  >
                    Name
                  </label>
                </div>
                {errors.name && (
                  <div className={styles.errorMessage}>{errors.name}</div>
                )}
                <div className={styles.nameRegContainer}>
                  <input
                    placeholder=" "
                    className={styles.input}
                    name="email"
                    value={registerForm.email}
                    onChange={handleRegisterChange}
                    type="email"
                    required
                    id="register-email"
                  />
                  <label
                    className={styles.label}
                    htmlFor="register-email"
                    id="register-email-label"
                  >
                    Email
                  </label>
                </div>
                <div className={styles.nameRegContainer}>
                  <input
                    placeholder=" "
                    className={styles.input}
                    name="password"
                    value={registerForm.password}
                    onChange={handleRegisterChange}
                    onFocus={regPassHandleFocus}
                    onBlur={regPassHandleBlur}
                    type="password"
                    required
                    id="register-password"
                  />
                  <label
                    className={styles.label}
                    htmlFor="register-password"
                    id="register-password-label"
                  >
                    Password
                  </label>
                </div>
                {errors.password && (
                  <div className={styles.errorMessage}>{errors.password}</div>
                )}
                <div className={styles.nameRegContainer}>
                  <input
                    placeholder=" "
                    className={styles.input}
                    name="repeatPassword"
                    value={registerForm.repeatPassword}
                    onChange={handleRegisterChange}
                    type="password"
                    required
                    id="register-password-repeat"
                  />
                  <label
                    className={styles.label}
                    htmlFor="register-password-repeat"
                    id="register-password-repeat-label"
                  >
                    Repeat password
                  </label>
                </div>
                {errors.repeatPassword && (
                  <div className={styles.errorMessage}>
                    {errors.repeatPassword}
                  </div>
                )}
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
