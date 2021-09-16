import React from 'react';
import './account_settings.css';

const account_settings = () => {
    return(
        <body className="acset_body">
            <div class="acset_main_box">

            <div class="acset_title">
              Account settings
            </div>   

             <div class="acset_id_icon">
                     <img src="icons/id.png" alt="id_icon" class="acset_id_icon_image" />
                  </div>
                  
            <div class="acset_lock_icon">
                     <img src="icons/lock_icon.png" alt="lock_icon" class="acset_lock_icon_image" />
            </div>

            <div class="acset_phone_icon">
                     <img src="icons/phone.png" alt="phone_icon" class="acset_phone_icon_image" />
            </div>

             <div class="acset_deleteaccount_icon">
                     <img src="icons/deleteaccount.png" alt="deleteaccount_icon" class="acset_deleteaccount_icon_image" />
             </div>


            <div class= "acset_reset_button_container1">
                <button class="acset_reset_button1"> User Id</button>
                 
                
            </div>

            <div class="acset_reset_button_container2">
                <button class="acset_reset_button2"> Password </button>
            </div>

            <div class="acset_reset_button_container3">
                <button class="acset_reset_button3"> Mobile number </button>
            </div>

            <div class="acset_reset_button_container4">
                <button class="acset_reset_button4"> Delete number</button>
            </div>

            <div class="acset_symbol1">
               {'>'}
            </div>

            <div class="acset_symbol2">
               {'>'}
            </div>

            <div class="acset_symbol3">
               {'>'}
            </div>

            <div class="acset_symbol4">
               {'>'}
            </div>

           

            </div>
        </body>
    );
}

export default account_settings;




