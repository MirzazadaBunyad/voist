import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import smile from "../../../assets/img/smile.gif";
import eyeClosedIcon from "../../../assets/img/eyeClosedIcon.svg";
import inputMessageIcon from "../../../assets/img/inputMessageIcon.svg";
import ayeOpen from "../../../assets/img/passwordEye.svg";
import arrowRightBlack from "../../../assets/img/arrowRightBlack.svg";
import axios from "axios";

export default function Login({ openForgetPassword }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isTyping, setIsTyping] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsTyping(true);
  };

  const validatePassword = () => {
    return formData.password.length >= 8;
  };

  const sendInformation = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage("Please fill in both fields");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    if (!validatePassword()) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    try {
      const response = await axios.post(
        "http://46.101.152.88:8000/api/v1/auth/login/",
        formData
      );

      if (response.status !== 200) {
        setErrorMessage("Invalid email or password");
        return;
      }
      console.log("Data sent successfully!");
      navigate("/dashboard");

    } catch (error) {
      console.error("Error sending data:", error.message);
      setErrorMessage("Error sending data");
    }

    setIsTyping(false);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };



  const handleChangeForgetPassword = (e) => {
    openForgetPassword();
    e.preventDefault()
  };

  return (
    <section className={styles.container}>
      <main className={styles.info__main}>
        <div className={styles.login__header}>
          <h1 className={styles.headLine}>
            Hey there,<span>welcome</span> <br /> to voist!
          </h1>
          <div className={styles.accountСreation}>
            <p className={styles.accountСreationText}>
              Don't you have an account?
            </p>
            <span className={styles.accountСreationBtn}>
              <Link to="/authentication/createaccount" className={styles.createBtn}>
                Create an account
              </Link>
            </span>
            <img className={styles.smile} src={smile} alt="Smile" />
          </div>
        </div>
        <form className={styles.form} onSubmit={sendInformation}>
          <div className={styles.inputBox}>
            <label className={styles.loginLabel} htmlFor="email">
              E-mail*
            </label>
            <div
              className={`${styles.LoginInput} ${isTyping && !isValidEmail(formData.email) ? styles.invalid : ""
                }`}
            >
              <input
                type="email"
                name="email"
                placeholder="example@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <img
              className={styles.inputMessageIcon}
              src={inputMessageIcon}
              alt="Error"
            />
          </div>
          <div className={styles.password}>
            <label className={styles.loginLabel} htmlFor="password">
              Password*
            </label>
            <input
              className={styles.LoginInput}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            <img
              className={styles.passwordIcon}
              onClick={handleShowPassword}
              src={showPassword ? ayeOpen : eyeClosedIcon}
              alt="Show/Hide Password"
            />
          </div>
          <div className={styles.rememberMe}>
            <div className={styles.rememberMeContainer}>
              <input
                className={styles.rememberMeInput}
                type="checkbox"
                name="rememberMe"
              />
              <label className={styles.rememberMeLabel} htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <div className={styles.forgotPasswordContainer}>
              <Link to={"/forgotPassword/SendToEmail"}
                type="button"
                onClick={handleChangeForgetPassword}
                className={styles.forgotPassword}
              >
                Forgot password?
              </Link>
            </div>
          </div>
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
          <div className={styles.button}>
            <button type="submit" className={styles.buttonElement}>
              Let's go
              <img src={arrowRightBlack} alt="Arrow Right" />
            </button>
          </div>
        </form>
      </main>
    </section>
  );
}
