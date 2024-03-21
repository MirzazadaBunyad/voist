import styles from "./login.module.scss";
import rightImg from "../../assets/img/loginImg.jpg";
import smile from "../../assets/img/smile.gif";
import eyeClosedIcon from "../../assets/img/eyeClosedIcon.svg";
import inputMessageIcon from "../../assets/img/inputMessageIcon.svg";
import ayeOpen from "../../assets/img/passwordEye.svg";
import arrowRightBlack from "../../assets/img/arrowRightBlack.svg";
import arrowRightWhite from "../../assets/img/arrowRightWhite.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../footer/Footer";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <div className={styles.logo}>
        <svg
          width="91"
          height="26"
          viewBox="0 0 91 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.3354 5.25732L13.2915 25.4296H8.23943L0 5.25732H3.45534C4.15436 5.25726 4.83649 5.47129 5.40931 5.87041C5.98212 6.26953 6.41792 6.83444 6.65764 7.48858L10.7957 18.7729L14.8539 7.50637C15.0909 6.84819 15.5262 6.27895 16.1001 5.87642C16.6741 5.47388 17.3587 5.25767 18.0607 5.25732H21.3354Z"
            fill="#1D2B21"
          />
          <path
            d="M22.1992 15.3435C22.1992 9.22358 26.8727 4.68643 33.1453 4.68643C39.3866 4.68643 44.0908 9.2305 44.0908 15.3435C44.0908 21.4233 39.3866 26 33.1453 26C26.8727 26 22.1992 21.4258 22.1992 15.3435ZM38.5416 15.3435C38.5416 12.0767 36.3014 9.81476 33.1453 9.81476C29.9891 9.81476 27.7489 12.0767 27.7489 15.3435C27.7489 18.6103 29.9886 20.8722 33.1443 20.8722C36.2999 20.8722 38.5416 18.6108 38.5416 15.3435Z"
            fill="#1D2B21"
          />
          <path
            d="M65.9095 26C60.8272 26 57.4319 23.1103 57.4041 18.7867H62.7424C62.7697 20.5835 64.1506 21.4797 66.1164 21.4797C67.6367 21.4797 68.9942 20.7941 68.9942 19.4456C68.9942 18.067 67.2387 17.6493 65.0978 17.293C61.8627 16.7566 57.748 15.8941 57.748 11.1395C57.748 7.3225 61.0068 4.68741 65.8951 4.68741C70.7834 4.68741 73.9916 7.39764 74.012 11.4286H68.8191C68.7987 9.82562 67.6704 9.03425 65.7611 9.03425C64.0573 9.03425 63.0515 9.81228 63.0515 10.9665C63.0515 12.3114 64.7797 12.6238 66.883 13.0039C70.186 13.5971 74.403 14.2891 74.403 19.2054C74.403 23.3214 71.025 26.001 65.9115 26.001L65.9095 26Z"
            fill="#1D2B21"
          />
          <path
            d="M90.601 23.052V25.4291H86.7115C82.2559 25.4291 79.517 22.7021 79.517 18.2262V10.832H79.2645C78.3604 10.832 77.4934 10.4742 76.8542 9.8374C76.2149 9.20056 75.8558 8.33682 75.8558 7.4362V6.4476H79.517V4.70719C79.5175 4.06075 79.7032 3.42789 80.0524 2.883C80.4015 2.3381 80.8995 1.90381 81.4878 1.63118L84.9943 0V6.4481H90.4894V10.832H84.9943V17.505C84.9943 19.454 86.1196 20.5746 88.1137 20.5746C88.7732 20.5749 89.4056 20.8359 89.872 21.3005C90.3384 21.765 90.6006 22.395 90.601 23.052Z"
            fill="#1D2B21"
          />
          <path
            d="M51.4927 11.6728H54.5789L49.5676 25.4291H44.0908L48.2884 13.912C48.527 13.256 48.9625 12.6892 49.5358 12.2886C50.1091 11.8879 50.7924 11.6729 51.4927 11.6728Z"
            fill="#1D2B21"
          />
          <path
            d="M57.4041 3.91284L56.3721 6.74566C56.1331 7.40118 55.6975 7.96755 55.1242 8.3678C54.5509 8.76806 53.8678 8.9828 53.1678 8.98284H50.0821L51.9298 3.91284H57.4041Z"
            fill="#1D2B21"
          />
          <defs>
            <clipPath id="clip0_9_2452">
              <rect width="91" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <section className={styles.container}>
        <main className={styles.info__main}>
          <div className={styles.login__header}>
            <h1 className={styles.headLine}>
              Hey there,<span>welcome</span> <br /> to voist!
            </h1>
            <div className={styles.accountСreation}>
              <p>Don't you have an account?</p>
              <span>
                <Link to="/createaccount">Create account</Link>
              </span>
              <img className={styles.smile} src={smile} alt="Smile" />
            </div>
          </div>
          <form className={styles.form} action="Submit" onSubmit={handleSubmit}>
            <div className={styles.email}>
              <label className={styles.loginLabel} htmlFor="email">
                E-mail*
              </label>
              <input
                className={styles.LoginInput}
                type="email"
                id="email"
                name="email"
                placeholder="example@company.com"
              />
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
                id="password"
                name="password"
                placeholder="Enter password"
              />
              <img
                className={styles.passwordIcon}
                onClick={handleShowPassword}
                src={showPassword ? ayeOpen : eyeClosedIcon}
                alt="error"
              />
            </div>
            <div className={styles.rememberMe}>
              <div>
                <input
                  className={styles.rememberMeInput}
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                />
                <label className={styles.rememberMeLabel} htmlFor="rememberMe">
                  Remember me
                </label>
              </div>

              <div>
                <Link
                  className={styles.forgotPassword}
                  to="/forgotpassword"
                  onClick={handleShowPassword}
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button type="Submit" className={styles.buttonElement}>
                Let's go
                <img src={arrowRightBlack} alt="" />
              </button>
            </div>
          </form>

          <footer className={styles.loginFooter}>
            <Footer />
          </footer>
        </main>

        {/* RIGHT IMAGE */}
        <div className={styles.right__banner}>
          <img className={styles.rightImg} src={rightImg} alt="Error" />
          <div className={styles.rightBannerText}>
            <h2>AI’s touch on your calls</h2>
            <button>
              learn more <img src={arrowRightWhite} alt="error" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
