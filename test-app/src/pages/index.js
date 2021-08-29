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

const pages = () => {
    return(
        <Router>
            <Route exact path="/" component= {forgot_pwd} />
            <Route path="/reset_pwd" component= {reset_pwd} />
            <Route path="/appearances" component= {appearances} />
            <Route path="/changing_user_id" component= {changing_user_id} />
            <Route path="/terms_and_policy" component= {terms_and_policy} />
            <Route path="/change_email_using_mobile" component= {change_email_using_mobile} />
        </Router>
    )
}

export default pages;