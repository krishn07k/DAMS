import React from 'react';

import {
    BrowserRouter as Router,
    // Switch,
    Route,
    // Link
  } from "react-router-dom";
import forgot_pwd from './forgot_pwd';
import reset_pwd from './reset_pwd';
import appearances from './appearances';
import changing_user_id from './changing_user_id';
import terms_and_policy from './terms_and_policy';
import change_email_using_mobile from './change_email_using_mobile';
import change_userid from './change_userid';
import verify_email from './verify_email';
import verify_number from './verify_number';
import changing_mobile_number from './changing_mobile_number';
import Signup_dentist from './signup_dentist';
import Signup_general_user from './signup_general_user';
import Profile_page from './profile_page';
import License_page from './license_page';
import Notifications_page from './notifications_page';
import Help_page from './help_page';
import Help_center from './help_center';
import schedular from './schedular';


const pages = () => {
    return(
        <Router>
            <Route path="/forgot_pwd" exact component= {forgot_pwd} />
            <Route path="/reset_pwd" component= {reset_pwd} />
            <Route path="/appearances" component= {appearances} />
            <Route path="/changing_user_id" component= {changing_user_id} />
            <Route path="/terms_and_policy" component= {terms_and_policy} />
            <Route path="/change_email_using_mobile" component= {change_email_using_mobile} />
            <Route path="/change_userid" component= {change_userid} />
            <Route path="/verify_email" component= {verify_email} />
            <Route path="/verify_number" component= {verify_number} />
            <Route path="/changing_mobile_number" component= {changing_mobile_number} />            
            <Route path="/signup_dentist" component= {Signup_dentist} />
            <Route path="/signup_general_user" component= {Signup_general_user} />
            <Route path="/license" component= {License_page} />
            <Route path="/notifications" component= {Notifications_page} />
            <Route path="/profile" component= {Profile_page} />
            <Route path="/help" component= {Help_page} />
            <Route path="/help_center" component= {Help_center} />
            <Route path="/schedular" component={schedular} />
        </Router>
    )
}

export default pages ;
