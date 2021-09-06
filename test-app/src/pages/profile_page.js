import React from 'react';
import "./profile_page.css";
const Profile_page= () => {
return (
 <div className="Profile_page">
  <form>
  <img className ="icon_profile" src ="/icons/user.png" ></img>
    <h1 className="Heading_profilepage" >PROFILE</h1><hr/>
        <div className="container_profilepage">
          
            <div className="profilepage_photo">
            
              <input className="profilepageinputfield_photo" id="image" type="file" name="Photo" placeholder="Photo"  capture />         
            </div><br/>
            <label className="label_photo" for="Photo">
            <b>Profile Photo</b></label><br/><br/>
            

          
          <div className="box">
          <label for="name">
            <b>Name</b>
            <input className="profilepage_inputfield_" type="text" placeholder="Enter your Name" name="name" /><br/>
          </label>
          
          <button className="Edit" type="submit">
            Edit
          </button><br/>
         

                  
         
          <label  for="address">
            <b>Address</b>
            <input className="profilepage_inputfield_" type="text" placeholder="Enter your Denstistry address" name="address" /><br/>
          </label>
        
          <button className="Edit" type="submit">
            Edit
          </button><br/>
          
          <label for="age"><b>Age</b>
          <input className="profilepage_inputfield_" type="number" placeholder="Enter your current age" name="age" min="18" max="100" /><br/>
            </label>

          
          <button className="Edit" type="submit">
            Edit
          </button><br/>
        </div>
        <br/><br/>
          <button className="Update" type="submit">
            Update
          </button>
        </div>
      
  </form>        
  
  </div>

          
  );

}

export default Profile_page ;