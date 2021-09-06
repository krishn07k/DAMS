import React from 'react';
import "./signup_general_user.css";
const Signup_general_user= () => {
return (
 <div className="Signup_page">
  <form>
      
      <h1 className="Heading_signup">SIGN-UP FOR GENERAL USER </h1><hr/>
        <div className="container_signup">
         
        
        <div className="profile_photo">
          
            <input className="signup_inputfield_photo" id="image" type="file" name="Photo" placeholder="Photo"  capture />
                   
         </div><br/>
         <label className="label_photo" for="Photo">
         <b>Profile Photo</b></label><br/>
       

          <label for="name">
            <b>Name</b>
            <input className="signup_inputfield_" type="text" placeholder="Enter your Name" name="name" required /><br/>
          </label>
          

          <label for="email">
            <b>Email-id</b>
            <input className="signup_inputfield_" type="text" placeholder="Enter your Email" name="email" required/><br/> 
          </label>          

                  
          <label for="dob">
            <b>DOB</b>
            <input className="signup_inputfield_" type="date" name="dob" required/><br/>
          </label>
                
         
         
        

          <label for="mobile number">
            <b>Mobile number</b>
            <input className="signup_inputfield_" type="tel" placeholder="Enter your Mobile number" name="mobile number" required pattern="[0-9]{10}"/>
          </label>

          <p><b>Gender</b></p>  
          <input className="signup_inputfield_radio" type="radio" name="Gender" value="Male" id="Male" />
            <label for="Male">Male </label>
          <input className="signup_inputfield_radio" type="radio" name="Gender" value="Female" id="Female" />
            <label for="Female">Female</label>
          <input className="signup_inputfield_radio" type="radio" name="Gender" value="Others" id="Others"/>
            <label for="Others">Others</label><br/><br/>


          <label for="age"><b>Age</b>
            <input className="signup_inputfield_" type="number" placeholder="Enter your current age" name="age" min="18" max="100" /><br/>
          </label>
          
          
          <label for="psw">
            <b>Password</b>
            <input className="signup_inputfield_" type="password" placeholder="Enter Password" name="psw" required/><br/>
          </label>
          

          <label for="psw-repeat">
            <b>Repeat Password</b>
            <input className="signup_inputfield_" type="password" placeholder="Repeat Password" name="psw-repeat" required/><br/>
          </label>
          
          <div className="terms">      
          <input  type="checkbox" id="accept_terms" value="accept_terms"/>
          <label for="accept_terms"><b>I accept to all the terms and privacy polices</b>
          </label></div>
          
          <button type="submit">
            Sign Up
          </button><br/><br/>
        
        </div>
       
  </form>        
  </div>
          
  );
}


export default Signup_general_user;