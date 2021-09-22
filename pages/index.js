import Head from "next/head";import Image from "next/image";

import styled, { css } from "styled-components";

import skilzenlogo from "../public/skilzenlogo.png";

import leftvector from "../public/leftvector.svg";
import rightvector from "../public/rightvector.svg";

import passwordImage from "../public/forgotpass1.svg";


const StyledLink = styled.a`
  color: #f26a7e;
`;

export default function Home() {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="leftvector">
          <Image src={leftvector} />
        </div>
        <div className="rightvector" style={{ transform: "rotate(-60deg)" }}>
          <Image src={rightvector} />
        </div>
        <div className="signup-main">
          <div className="image-block">
            <div className="skilzenlogo">
              <Image src={skilzenlogo} />
            </div>
            <div className="signupImage">
              <Image width={400} height={280} src={passwordImage} />
            </div>
          </div>
          <div className="signin-block">
            <div className="toptext-signin">
              <b>Let Us Help!</b>
            </div>
            <div className="secondtext">Forgot Password</div>
            <div className="warnigtext">
              Mention your Registered Email/mobile number to get the
              verification code.
            </div>
            <div className="email">
              <span>Registered Email</span>
              <input placeholder="someone@gmail.com" />
            </div>
            <div className="ortext">Or</div>
            <div className="password">
              <span>Contact Number</span>
              <input placeholder="Your Phone Number" />
            </div>
            <div className="checkEmail">Check you Email/Text to get the code</div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                paddingTop: "15%",
              }}
            >
            
              <button className="signinbtn">Enter</button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
