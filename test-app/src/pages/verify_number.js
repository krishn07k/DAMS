import React from 'react';
import './verify_number.css';

const verify_number = () => {
    return(
        <body className="vno_body">
            <div class="vno_main_box">

            <div class="vno_title_icon">
                <img src="icons/change_user.png" alt="user changing" />
            </div>

            <div class="vno_title">
              Change registered mobile number
            </div>

            <div class="vno_sub_title1">
            Follow these steps to change your mobile number.
            </div>

            <div class="vno_sub_title2">
           
	          1) Enter your mobile number.
	          
            </div>
            <div class="vno_sub_title3">
            
	          2) Click Verify, then you will get a message regarding changing your account's mobile number.
	          
            </div>

            <div class="vno_sub_title4">
           
	          3) Click the link in that message which will direct you to a page from where you can change your mobile number. 

            </div>

            
            <div class="vno_text">
                Mobile number
            </div>

            <div class="vno_number_box">

                <div class="vno_number_icon">
                    <img src="icons/phone.png" alt="phone_icon" class="vno_number_icon_image" />
                </div>

                <div class="vno_number_text">
                    <input type="text" />
                </div>

            </div>

            <div class="vno_reset_button_container">
                <button class="vno_reset_button">Verify</button>
            </div>

            </div>
        </body>
    );
}

export default verify_number;








