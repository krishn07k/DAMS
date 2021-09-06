import React from 'react';
import "./help_page.css";
const Help_page= () => {
return (
 <div className="Help_page">
  <form>
    
    <img className ="icon_help" src ="/icons/help.png" ></img>
      <h1 className="Heading_help">HELP</h1><hr/>
        <div className="container_help">
          <div className="help_border"><br/><br/><br/><br/><br/>
          <a href="#"><h2 className="help_content">help center</h2></a><br/>
          <a href="#"><h2 className="help_content">Contact Us </h2></a><br/>
          <a href="#"><h2 className="help_content">Terms and conditions</h2></a><br/>
          <a href="#"><h2 className="help_content">License</h2></a><br/>
          <a href="#"><h2 className="help_content">About</h2><br/></a><br/><br/><br/><br/>
          </div>
         </div>

       
  </form>        
  
  </div>

          
  );
}

export default Help_page ;