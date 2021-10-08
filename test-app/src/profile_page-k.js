import React from "react";
import "./profile_page-k.css";

function profile_page() {
  return (
    <div className="pp_main">
      <form>
        <img className="pp_icon" src="icons/user.png" alt="profile_icon"></img>
        <h1 className="pp_Heading">PROFILE</h1>
        <hr />
        <div className="pp_container">
          <div className="pp_photo">
            <img
              className="pp_icon_1"
              src="icons/user1.png"
              alt="profile_icon"
            ></img>
            <input
              className="pp_input_field_photo"
              id="image"
              type="file"
              name="Photo"
              placeholder="Photo"
              capture
            />
          </div>

          <br />

          <label className="pp_label_photo" for="Photo">
            <b>Profile Photo</b>
          </label>

          <br />
          <br />

          <div className="pp_box">
            <label for="name">
              <b>Name</b>
              <input
                className="pp_inputfield"
                type="text"
                placeholder="Enter your Name"
                name="name"
              />
              <br />
            </label>

            <button className="pp_Edit" type="submit">
              Edit
            </button>

            <br />

            <label for="address">
              <b>Address</b>
              <input
                className="pp_inputfield"
                type="text"
                placeholder="Enter your Denstistry address"
                name="address"
              />
              <br />
            </label>

            <button className="pp_Edit" type="submit">
              Edit
            </button>

            <br />

            <label for="age">
              <b>Age</b>
              <input
                className="pp_inputfield"
                type="number"
                placeholder="Enter your current age"
                name="age"
                min="18"
                max="100"
              />
              <br />
            </label>

            <button className="pp_Edit" type="submit">
              Edit
            </button>

            <br />
          </div>

          <br />
          <br />

          <button className="pp_Update" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default profile_page;
