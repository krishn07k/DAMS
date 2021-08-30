import React from 'react';
import './changing_mobile_number.css';

const changing_mobile_number = () => {
    return(
        <body className="chno_body">
            <div class="chno_main_box">

            <div class="chno_title_icon">
                <img src="icons/change_user.png" alt="user changing" />
            </div>

            <div class="chno_title">
              Change mobile number
            </div>

            <div class="chno_sub_title">
              Enter your new mobile number
            </div>

            <div class="chno_text1">
              New mobile number
            </div>

            <div class="chno_new_number">

                <div class="chno_number_icon">
                    <img src="icons/phone.png" alt="phone_icon" class="chno_number_icon_image" />
                </div>

                <div class="chno_new_number_text">
                    <input type="text" />
                </div>

            </div>

            <div class="chno_text2">
                Confirm new mobile number
            </div>

            <div class="chno_confirm_new_number">

                <div class="chno_number_icon">
                    <img src="icons/phone.png" alt="phone_icon" class="chno_number_icon_image" />
                </div>

                <div class="chno_confirm_new_number_text">
                    <input type="text" />
                </div>

            </div>

            <div class="chno_reset_button_container">
                <button class="chno_reset_button">Reset</button>
            </div>

            </div>
        </body>
    );
}

export default changing_mobile_number;




