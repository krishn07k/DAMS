import React from "react";
import "./sign_in_user.css";

// import { Link, useHistory } from "react-router-dom";

function sign_in_user() {
  return (
    <body>
      <div align="center" class="signIn_body">
        <div class="signIn_main_box">
          <h1 className="signin">Sign-in to your account</h1>

          <div>
            <span class="userid" align="left">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-user fa-w-14 fa-3x"
                height="30px"
                width="30px"
              >
                <path
                  fill="currentColor"
                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                  class=""
                ></path>
              </svg>
              &nbsp;User ID / Email ID :
            </span>
            <span class="userid_box" align="right">
              <input
                type="text"
                size="35"
                placeholder="Enter your User ID"
                style={{ padding: "14px 20px" }}
              />
            </span>
          </div>
          <div>
            <span class="pass2" align="left">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/key--v1.png" alt="helo"/>
              &nbsp;Password :
            </span>
            <span class="password_box2" align="right">
              <input
                type="password"
                id="pwd"
                name="pwd"
                minlength="8"
                height="500px"
                size="35"
                placeholder="Enter your password"
                style={{ padding: "14px 20px" }}
              />
            </span>
          </div>
          <div>
            <form class="remeberMe">
              <input
                type="checkbox"
                name="remember"
                style={{ position: "relative", verticalalign: "middle" }}
              ></input>
              Remember Me
            </form>
          </div>
          <div>
            <div>
              <a href="http://localhost:3000/home">
                <button
                  type="submit"
                  form="form1"
                  value="Submit"
                  class="login_button"
                >
                  LOGIN
                </button>
              </a>
              <br />
            </div>
          </div>
          <div>
            <a
              href="http://localhost:3000/forgot_pwd"
              class="text-decoration-none "
              mx-auto
            >
              <div class="forgot_password">Forgot Password?</div>
            </a>

            <a href="http://localhost:3000/signup_general">
              <p className="signup">Signup</p>
            </a>
            <div />
          </div>
        </div>
      </div>
    </body>
  );
}
export default sign_in_user;
