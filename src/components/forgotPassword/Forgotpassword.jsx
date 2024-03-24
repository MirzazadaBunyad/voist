import style from "./forgotPassword.module.scss";
import img from "../../assets/img/smile.gif";
import rightImg from "../../assets/img/loginImg.jpg";
import inputMessageIcon from "../../assets/img/inputMessageIcon.svg";
import arrowRightBlack from "../../assets/img/arrowRightBlack.svg";
import arrowRightWhite from "../../assets/img/arrowRightWhite.svg";
import voistWhiteLogo from "../../assets/img/voistWhiteLogo.svg";
import arrowLeftBlack from "../../assets/img/arrowLeftBlack.svg";
import Footer from "../footer/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword({ backToLogin }) {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClickToLogin = () => {
    backToLogin();
  };
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const [showActivation, setShowActivation] = useState(false);
  const [showMain, setShowMain] = useState(true);

  const toggleActivation = () => {
    setShowActivation(!showActivation);
    setShowMain(!showMain);
  };
  return (
    <section className={style.container}>
      <div className={style.loginContainer}>
        <div className={style.main}>
          <button
            onClick={handleClickToLogin}
            to="/"
            className={style.arrowLeft}
          >
            <img src={arrowLeftBlack} alt="" />
          </button>
          <div className={style.accountСreation}>
            <h1>Let’s change the password</h1>
            <div className={style.accountAlready}>
              <p>Enter your email first</p>
              <img src={img} alt="smile" loading="lazy" />
            </div>
          </div>
          {/* Form section */}

          <form className={style.formContainer}>
            <div className={style.inputEmail}>
              <label className={style.label} htmlFor="password">
                E-mail*
              </label>
              <input type="email" placeholder="example@company.com" id="" />
              <img src={inputMessageIcon} alt="" />
            </div>
          </form>
          <div className={style.buttonElement}>
            <button className={style.sendButton} onClick={toggleActivation}>
              <p>Send code</p>
              <img src={arrowRightBlack} alt="" />
            </button>
            <button onClick={handleClickToLogin} className={style.cancelButton}>
              <p>Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
