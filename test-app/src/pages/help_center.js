import React from 'react';
import "./help_center.css";
const Help_center= () => {
return (
 <div className="Help_page">
 
 <img className ="icon" src ="/icons/help.png" ></img>
    <h1 className="Heading_help" >HELP CENTER</h1><hr/>
        <div className="container_help-center">
          <div className="help-center_border"><br/>
          <h2 className="help-center_content">FAQ's</h2><br/>
          <p className="questions">
<b>
&nbsp;&nbsp;&nbsp;&nbsp;Question  &nbsp;:&nbsp;&nbsp;How to change password?<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Answer</b>&nbsp; &nbsp;&nbsp;  :&nbsp;&nbsp;Go to the <i>Settings -> Accounts -> Change password .</i><br/> </p>
         
          </div>
         </div>

       
       
  
  </div>

          
  );
}

export default Help_center ;