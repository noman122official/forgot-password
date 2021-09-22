import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      {/* <div className={styles.element1}>
        <Image
          src="/element1.svg"
          alt="Vercel Logo"
          width={449.76}
          height={439}
        />
      </div>
      <div className={styles.element2}>
        <Image
          src="/element2.svg"
          alt="Vercel Logo"
          width={251.93}
          height={245.9}
        />
      </div> */}
      <div className={styles.forgotpass}>
        <Image
        src="/forgotpass2.svg"
        width={433}
        height={317.73}
        />
      </div>
      <div className={styles.boxLeft}>

      </div>
      <div className={styles.boxRight}>

      </div>
      <div>
      <p className={styles.almostDone}>Let Us Help!</p>
      <p className={styles.passwordReset}>Forgot Password</p>
      <p className={styles.warningSmall}>Mention your Registered Email/mobile number to get the verification code.</p>
      <p className={styles.registeredEmail}>Registered Email</p>
      <input className={styles.emailField}></input>
      </div>
    </div>
  );
}
