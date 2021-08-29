import React from 'react';
import './forgot_pwd.css';

const forgot_pwd = () => {
    return(
        <body className="forgot_pwd_body">
            <div class="main_box_forgot_pwd">
                <div class="lock_icon">
                    <img src="icons/lock_icon.png" alt="lock_box"></img>
                </div>

                <div class="forgot_pwd_title">Forgot Your Password ?</div>

                <div class="sub_content">No worries! Enter your email and we will send you a reset link</div>

                <div class="email_box">
                    <div class="email_box_icon">
                        <img src="icons/envelope.png" alt="ebox"></img>
                    </div>
                    <div class="email_textbox">
                        <input type="text" class="textbox" />
                    </div>
                </div>

                <div class="reset_button_container">
                    <button class="reset_button">Reset</button>
                </div>

                <div class="extra_text">or</div>

                <div class="sign_up_link_container">
                    <a href="hello" class="sign_up_link">Create new account</a>
                </div>

            </div>
        </body>
    );
}

export default forgot_pwd;