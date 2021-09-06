import React from 'react';
import "./notification_page.css";
const Notifications_page = () => {
return (
 <div className="notifications_page">
  
  <img className ="icon_notifi" src ="/icons/notification.png" ></img>
    <h1 className="Heading_notifi" >Notifications</h1><hr/>
        <div className="container_notifi">
          <div className="notifi_border"><br/><br/>
         
          <p className="para_notifi">Notifications willl be delivered as a mail to your registered mail id<br/>
          <br/><br/>
           Select your prefered Settings</p>
          <div className="group">
          <input className="toggle" id="toggle" type="checkbox" name="appointment" />
          <label className="notifi_content" for="appointments">Appointments</label>
           
          </div><br/>
          <div className="group">
          <input className="toggle" id="toggle" type="checkbox" name="Follow-Ups" />
          <label className="notifi_content" for="Follow-Ups">Follow-Ups</label>
            
          </div><br/>
          <div className="group">
          <input className="toggle" id="toggle" type="checkbox" name="Reviews" />
          <label className="notifi_content" for="appointments">Reviews</label>
           
          </div>
          <br/>
          <br/>
          </div> 
         </div>    
         
  
  </div>
      
  );

}

export default Notifications_page ;