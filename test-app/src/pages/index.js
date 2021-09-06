import React from 'react';

import {
    BrowserRouter as Router,
    // Switch,
    Route,
    // Link
  } from "react-router-dom";

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
            <Route path="/signup_dentist" exact component= {Signup_dentist} />
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