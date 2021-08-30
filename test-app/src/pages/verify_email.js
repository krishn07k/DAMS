import React from 'react';
import './verify_email.css';

const verify_email = () => {
    return(
        <body className="vemail_body">
            <div class="vemail_main_box">

            <div class="vemail_title_icon">
                <img src="icons/change_user.png" alt="user changing" />
            </div>

            <div class="vemail_title">
              Change e-mail ID using email address
            </div>

            <div class="vemail_sub_title1">
            Follow these steps to change your Email id.
            </div>

            <div class="vemail_sub_title2">
           
	          1) Enter your Email id.
	          
            </div>
            <div class="vemail_sub_title3">
            
	          2) Click Verify, then you will get a mail regarding changing your account's Email id.
	          
            </div>

            <div class="vemail_sub_title4">
           
	          3) Click the link in that Email which will direct you to a page from where you can change your Email id. 

            </div>

            
            <div class="vemail_text">
                Email address
            </div>

            <div class="vemail_email_box">

                <div class="vemail_email_icon">
                    <img src="icons/mail.png" alt="email_icon" class="vemail_email_icon_image" />
                </div>

                <div class="vemail_email_text">
                    <input type="text" />
                </div>

            </div>

            <div class="vemail_reset_button_container">
                <button class="vemail_reset_button">Verify</button>
            </div>

            </div>
        </body>
    );
}

export default verify_email;






