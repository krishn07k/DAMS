import React from 'react';
import './change_userid.css';

const change_userid = () => {
    return(
        <body className="chuid_body">
            <div class="chuid_main_box">

            <div class="chuid_title_icon">
                <img src="icons/change_user.png" alt="user changing" />
            </div>

            <div class="chuid_title">
              Change Email/Login ID
            </div>

            

            <div class="chuid_text">
              - or -
            </div>
            
            <div class="chuid_number_icon">
                    <img src="icons/phone.png" alt="phone_icon" class="chuid_number_icon_image" />
            </div>
            <div class="chuid_email_icon">
                    <img src="icons/mail.png" alt="email_icon" class="chuid_email_icon_image" />
            </div>

           
            <div class="chuid_reset_button_container1">
                <button class="chuid_reset_button1">Change with e-mail id</button>
            </div>

            <div class="chuid_reset_button_container2">
                <button class="chuid_reset_button2">Change with phone number</button>
            </div>

            </div>
        </body>
    );
}

export default change_userid;



