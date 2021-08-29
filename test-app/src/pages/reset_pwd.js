import React from 'react';
import './reset_pwd.css';

const reset_pwd = () => {
    return(
        <body className="reset_pwd_body">
        
            <div class="main_box_reset_pwd">


                <div class="key_icon">
                    <img src="icons/key.png" alt="key_image" />
                </div>
    
                <div class="reset_pwd_title">Reset Your Password</div>
    
                <div class="new_pwd_field">
                    <div class="new_pwd_text">New Password:</div>
                    <div class="new_pwd_textbox">
                        <input type="text" class="np_box" />
                    </div>
                </div>
    
                <div class="conf_pwd_field">
                    <div class="conf_pwd_text">Confirm Password:</div>
                    <div class="conf_pwd_textbox">
                        <input type="text" class="c_box" />
                    </div>
                </div>
    
                <div class="reset_button_container">
                    <button class="reset_button">
                        <a href="/" className="inside_button">Reset</a>
                    </button>
                </div>


            </div>
            
    </body>
    );
}

export default reset_pwd;