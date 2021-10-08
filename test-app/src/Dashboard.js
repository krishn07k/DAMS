import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase1";
import { Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import {
  FaAssistiveListeningSystems,
  FaCalendar,
  FaCalendarCheck,
  FaCalendarPlus,
  FaCalendarTimes,
  FaList,
  FaRegHeart,
  FaStar,
  FaStarAndCrescent,
  FaUser,
} from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiSettings,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import "react-pro-sidebar/dist/css/styles.css";

function Dashboard() {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const fetchUserName = async () => {
    try {
      // const query = await db
      //   .collection("users")
      //   .where("uid", "==", user?.uid)
      //   .get();
      // const data = await query.docs[0].data();
      // setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>
                {menuCollapse
                  ? "DAMS"
                  : "Dentistry appointment management system"}
              </p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FaUser />}>
                {" "}
                <Link to="/profile_pg">Profile</Link>
              </MenuItem>
              <MenuItem icon={<FaCalendar />}>Appointment</MenuItem>
              <MenuItem icon={<FaCalendarCheck />}>Follow-Ups</MenuItem>

              <MenuItem icon={<FaCalendarPlus />}>
                {" "}
                <a href="http://localhost:3000/schedular">Schedular</a>
              </MenuItem>
              <MenuItem icon={<FaStar />}>Reviews</MenuItem>

              <MenuItem icon={<FiSettings />}>
                <Link to="/settings" className="1">
                  Settings
                </Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>
                {/* <a href="http://localhost:3000/welcome">Logout</a> */}
                <button className="dashboard__btn" onClick={logout}>
                  Logout
                </button>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
      {/* <div className="dashboard">
        <div></div>
        <div className="dashboard__container">
          Logged in as
          <div>{name}</div>
          <div>{user?.email}</div>
          <button className="dashboard__btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div> */}
    </div>
  );
}
export default Dashboard;
