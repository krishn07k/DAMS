import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard_dentist.css";
import "./schedular.js";
import "./scheduler.css";
import { auth, db, logout } from "./firebase1";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SidebarContent } from "react-pro-sidebar";
import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  query,
  where,
  onSnapshot,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "./firebase1";

//import icons from react icons
import { FaCalendar, FaCalendarCheck, FaStar, FaUser } from "react-icons/fa";
import {
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiSettings,
} from "react-icons/fi";

import "react-pro-sidebar/dist/css/styles.css";

function Dashboard_dentist() {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const fetchUserName = async () => {
    try {
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/sign_in");
    fetchUserName();
  }, [user, loading]);

  const queryParams = new URLSearchParams(window.location.search);

  const email = queryParams.get("email");

  const [info, setInfo] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "doc"), (snapshot) =>
        setInfo(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  return (
    <div>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarContent>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "DAMS" : "DAMS"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
            <Menu iconShape="square">
              <MenuItem icon={<FaUser />}>
                <Link to={"/profile_pg?email=" + email}>Profile</Link>
              </MenuItem>
              <MenuItem icon={<FaCalendar />}>Appointment</MenuItem>
              <MenuItem icon={<FaCalendarCheck />}>Follow-Ups</MenuItem>
              <MenuItem icon={<FaStar />}>Reviews</MenuItem>
              <MenuItem icon={<FiSettings />}>
                <Link to={"/settings?email=" + email}>Settings</Link>
              </MenuItem>
              <MenuItem icon={<FaCalendar />}>
                <Link to={"/schedular?email=" + email}>scheduler</Link>
              </MenuItem>
              <button className="dashboard__btn" onClick={logout}>
                <MenuItem icon={<FiLogOut />}>
                  <button
                    className="dashboard__btn"
                    type="submit"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </MenuItem>
              </button>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </div>
  );
}

export default Dashboard_dentist;
