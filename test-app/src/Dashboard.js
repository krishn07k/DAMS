import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import "./schedular.js";
import "./scheduler.css"
import { auth, db, logout } from "./firebase1";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SidebarContent, } from "react-pro-sidebar";
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
import { FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiSettings, } from "react-icons/fi";

import "react-pro-sidebar/dist/css/styles.css";


function Dashboard() {

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  // const queryParams = new URLSearchParams(window.location.search);

  // const email = queryParams.get("email");

  

  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const fetchUserName = async () => {
    try {} 
    catch (err) {
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

  // const q = query(collection(db, "doc"), where("doc_mail", "==", email));

  useEffect(
    () =>
      onSnapshot(collection(db, "doc"), (snapshot) =>
        setInfo(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  const func = (id,
                mon1, mon2, mon3,
                tue1, tue2, tue3,
                wed1, wed2, wed3,
                thu1, thu2, thu3,
                fri1, fri2, fri3,
                sat1, sat2, sat3,
                sun1, sun2, sun3,
                mon1_bkd, mon2_bkd, mon3_bkd,
                tue1_bkd, tue2_bkd, tue3_bkd,
                wed1_bkd, wed2_bkd, wed3_bkd,
                thu1_bkd, thu2_bkd, thu3_bkd,
                fri1_bkd, fri2_bkd, fri3_bkd,
                sat1_bkd, sat2_bkd, sat3_bkd,
                sun1_bkd, sun2_bkd, sun3_bkd,) => {
    // var id = document.getElementById("mon_a");
    
    var mon_a = document.getElementById("mon_a");
    var mon_b = document.getElementById("mon_b");
    var mon_c = document.getElementById("mon_c");

    var tue_a = document.getElementById("tue_a");
    var tue_b = document.getElementById("tue_b");
    var tue_c = document.getElementById("tue_c");

    var wed_a = document.getElementById("wed_a");
    var wed_b = document.getElementById("wed_b");
    var wed_c = document.getElementById("wed_c");

    var thu_a = document.getElementById("thu_a");
    var thu_b = document.getElementById("thu_b");
    var thu_c = document.getElementById("thu_c");

    var fri_a = document.getElementById("fri_a");
    var fri_b = document.getElementById("fri_b");
    var fri_c = document.getElementById("fri_c");

    var sat_a = document.getElementById("sat_a");
    var sat_b = document.getElementById("sat_b");
    var sat_c = document.getElementById("sat_c");

    var sun_a = document.getElementById("sun_a");
    var sun_b = document.getElementById("sun_b");
    var sun_c = document.getElementById("sun_c");

    mon_a.textContent = mon1;
    mon_b.textContent = mon2;
    mon_c.textContent = mon3;

    tue_a.textContent = tue1;
    tue_b.textContent = tue2;
    tue_c.textContent = tue3;
    
    wed_a.textContent = wed1;
    wed_b.textContent = wed2;
    wed_c.textContent = wed3;

    thu_a.textContent = thu1;
    thu_b.textContent = thu2;
    thu_c.textContent = thu3;

    fri_a.textContent = fri1;
    fri_b.textContent = fri2;
    fri_c.textContent = fri3;

    sat_a.textContent = sat1;
    sat_b.textContent = sat2;
    sat_c.textContent = sat3;

    sun_a.textContent = sun1;
    sun_b.textContent = sun2;
    sun_c.textContent = sun3;

    if (mon1 !== undefined){
      if (mon1_bkd === false){
        mon_a.value = id;
        mon_a.style.backgroundColor = "#57CC99";
      }
      else{
        mon_a.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      mon_a.style.backgroundColor = "#423F3E";
    }

    if (mon2 !== undefined){
      if (mon2_bkd === false){
        mon_b.value = id;
        mon_b.style.backgroundColor = "#57CC99";
      }
      else{
        mon_b.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      mon_b.style.backgroundColor = "#423F3E";
    }

    if (mon3 !== undefined){
      if (mon3_bkd === false){
        mon_c.value = id;
        mon_c.style.backgroundColor = "#57CC99";
      }
      else{
        mon_c.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      mon_c.style.backgroundColor = "#423F3E";
    }

    if (tue1 !== undefined){
      if (tue1_bkd === false){
        tue_a.value = id;
        tue_a.style.backgroundColor = "#57CC99";
      }
      else{
        tue_a.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      tue_a.style.backgroundColor = "#423F3E";
    }

    if (tue2 !== undefined){
      if (tue2_bkd === false){
        tue_b.value = id;
        tue_b.style.backgroundColor = "#57CC99";
      }
      else{
        tue_b.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      tue_b.style.backgroundColor = "#423F3E";
    }

    if (tue3 !== undefined){
      if (tue3_bkd === false){
        tue_c.value = id;
        tue_c.style.backgroundColor = "#57CC99";
      }
      else{
        tue_c.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      tue_c.style.backgroundColor = "#423F3E";
    }

    if (wed1 !== undefined){
      if (wed1_bkd === false){
        wed_a.value = id;
        wed_a.style.backgroundColor = "#57CC99";
      }
      else{
        wed_a.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      wed_a.style.backgroundColor = "#423F3E";
    }

    if (wed2 !== undefined){
      if (wed2_bkd === false){
        wed_b.value = id;
        wed_b.style.backgroundColor = "#57CC99";
      }
      else{
        wed_b.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      wed_b.style.backgroundColor = "#423F3E";
    }

    if (wed3 !== undefined){
      if (wed3_bkd === false){
        wed_c.value = id;
        wed_c.style.backgroundColor = "#57CC99";
      }
      else{
        wed_c.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      wed_c.style.backgroundColor = "#423F3E";
    }

    if (thu1 !== undefined){
      if (thu1_bkd === false){
        thu_a.value = id;
        thu_a.style.backgroundColor = "#57CC99";
      }
      else{
        thu_a.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      thu_a.style.backgroundColor = "#423F3E";
    }

    if (thu2 !== undefined){
      if (thu2_bkd === false){
        thu_b.value = id;
        thu_b.style.backgroundColor = "#57CC99";
      }
      else{
        thu_b.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      thu_b.style.backgroundColor = "#423F3E";
    }

    if (thu3 !== undefined){
      if (thu3_bkd === false){
        thu_c.value = id;
        thu_c.style.backgroundColor = "#57CC99";
      }
      else{
        thu_c.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      thu_c.style.backgroundColor = "#423F3E";
    }

    if (fri1 !== undefined){
      if (fri1_bkd === false){
        fri_a.value = id;
        fri_a.style.backgroundColor = "#57CC99";
      }
      else{
        fri_a.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      fri_a.style.backgroundColor = "#423F3E";
    }

    if (fri2 !== undefined){
      if (fri2_bkd === false){
        fri_b.value = id;
        fri_b.style.backgroundColor = "#57CC99";
      }
      else{
        fri_b.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      fri_b.style.backgroundColor = "#423F3E";
    }

    if (fri3 !== undefined){
      if (fri3_bkd === false){
        fri_c.value = id;
        fri_c.style.backgroundColor = "#57CC99";
      }
      else{
        fri_c.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      fri_c.style.backgroundColor = "#423F3E";
    }

    if (sat1 !== undefined){
      if (sat1_bkd === false){
        sat_a.value = id;
        sat_a.style.backgroundColor = "#57CC99";
      }
      else{
        sat_a.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      sat_a.style.backgroundColor = "#423F3E";
    }

    if (sat2 !== undefined){
      if (sat2_bkd === false){
        sat_b.value = id;
        sat_b.style.backgroundColor = "#57CC99";
      }
      else{
        sat_b.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      sat_b.style.backgroundColor = "#423F3E";
    }

    if (sat3 !== undefined){
      if (sat3_bkd === false){
        sat_c.value = id;
        sat_c.style.backgroundColor = "#57CC99";
      }
      else{
        sat_c.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      sat_c.style.backgroundColor = "#423F3E";
    }

    if (sun1 !== undefined){
      if (sun1_bkd === false){
        sun_a.value = id;
        sun_a.style.backgroundColor = "#57CC99";
      }
      else{
        sun_a.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      sun_a.style.backgroundColor = "#423F3E";
    }

    if (sun2 !== undefined){
      if (sun2_bkd === false){
        sun_b.value = id;
        sun_b.style.backgroundColor = "#57CC99";
      }
      else{
        sun_b.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      sun_b.style.backgroundColor = "#423F3E";
    }

    if (sun3 !== undefined){
      if (sun3_bkd === false){
        sun_c.value = id;
        sun_c.style.backgroundColor = "#57CC99";
      }
      else{
        sun_c.style.backgroundColor = "#FE8F8F";
      }
    }
    else{
      sun_c.style.backgroundColor = "#423F3E";
    }
  }


  const test = () => {
    var f = document.getElementById("mon_a");
    console.log(f.value);
  }

  return ( 
    <div>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarContent>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>
                {menuCollapse
                  ? "DAMS"
                  : "DAMS"}
              </p>
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
                <Link to={"/settings?email=" + email }>Settings</Link>
              </MenuItem>
              <MenuItem icon={<FaCalendar />}>
                <Link to={"/schedular?email=" + email }>scheduler</Link>
              </MenuItem>
              <button className="dashboard__btn" onClick={logout}>
                <MenuItem icon={<FiLogOut />}>
                  <button className="dashboard__btn" type="submit" onClick={logout}>
                    Logout
                  </button>
                </MenuItem>
              </button>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      
      <div className="dsh_main_content">
        
        <div className="dsh_title"><h1>Welcome To DAMS</h1></div>
        <div className="dsh_doc_list_main">
          {info.map((doc) => (
            <div className="dsh_doc_list">
              <div className="dsh_doc_vall">
                <input className="dsh_doc_val" name="name" type="text" value={doc.doc_name}></input>
              </div>
              <div className="dsh_doc_button">
                <button className="dsh_schedule_button" type="submit" onClick={() => func(doc.doc_id, doc.doc_mon_1, doc.doc_mon_2, doc.doc_mon_3,doc.doc_tue_1, doc.doc_tue_2, doc.doc_tue_3,doc.doc_wed_1, doc.doc_wed_2, doc.doc_wed_3,doc.doc_thu_1, doc.doc_thu_2, doc.doc_thu_3,doc.doc_fri_1, doc.doc_fri_2, doc.doc_fri_3,doc.doc_sat_1, doc.doc_sat_2, doc.doc_sat_3,doc.doc_sun_1, doc.doc_sun_2, doc.doc_sun_3, doc.doc_m1_bkd, doc.doc_m2_bkd, doc.doc_m3_bkd, doc.doc_tu1_bkd, doc.doc_tu2_bkd, doc.doc_tu3_bkd, doc.doc_w1_bkd, doc.doc_w2_bkd, doc.doc_w3_bkd, doc.doc_th1_bkd, doc.doc_th2_bkd, doc.doc_th3_bkd, doc.doc_f1_bkd, doc.doc_f2_bkd, doc.doc_f3_bkd, doc.doc_sa1_bkd, doc.doc_sa2_bkd, doc.doc_sa3_bkd, doc.doc_su1_bkd, doc.doc_su2_bkd, doc.doc_su3_bkd,)}>BOOK</button>
              </div>
            </div>
          ))}
        </div>

        <div className="dsh_doc_schedule">

          <div className="dsh_user_input">
            <textarea placeholder="Describe your problem here" className="dsh_user_input_box"></textarea>
          </div>

          <table className="dsh_main_table">
            <tr>
              <th>DAY</th>
              <th>SCHEDULE</th>
              <th>DATE</th>
            </tr>

            <tr>
              <td>Monday</td>
              <td>
                <table>
                  <tr>
                      <td><button className="dsh_time" id="mon_a" onClick={test}></button></td>
                      <td><button className="dsh_time" id="mon_b"></button></td>
                      <td><button className="dsh_time" id="mon_c"></button></td>
                  </tr>
                </table>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-18" ></input>
              </td>
            </tr>

            <tr>
              <td>Tuesday</td>
              <td>
                <tabl>
                  <tr>
                    <td><button className="dsh_time" id="tue_a"></button></td>
                    <td><button className="dsh_time" id="tue_b"></button></td>
                    <td><button className="dsh_time" id="tue_c"></button></td>
                  </tr>
                </tabl>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-19"></input>
              </td>
            </tr>

            <tr>
              <td>Wednesday</td>
              <td>
                <tabl>
                  <tr>
                    <td><button className="dsh_time" id="wed_a"></button></td>
                    <td><button className="dsh_time" id="wed_b"></button></td>
                    <td><button className="dsh_time" id="wed_c"></button></td>
                  </tr>
                </tabl>
              </td>
              <td>
                <input type="date"  step="7" min="2021-10-20"></input>
              </td>
            </tr>

            <tr>
              <td>Thursday</td>
              <td>
                <tabl>
                  <tr>
                    <td><button className="dsh_time" id="thu_a"></button></td>
                    <td><button className="dsh_time" id="thu_b"></button></td>
                    <td><button className="dsh_time" id="thu_c"></button></td>
                  </tr>
                </tabl>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-21"></input>
              </td>
            </tr>

            <tr>
              <td>Friday</td>
              <td>
                <tabl>
                  <tr>
                    <td><button className="dsh_time" id="fri_a"></button></td>
                    <td><button className="dsh_time" id="fri_b"></button></td>
                    <td><button className="dsh_time" id="fri_c"></button></td>
                  </tr>
                </tabl>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-22"></input>
              </td>
            </tr>

            <tr>
              <td>Saturday</td>
              <td>
                <tabl>
                  <tr>
                    <td><button className="dsh_time" id="sat_a"></button></td>
                    <td><button className="dsh_time" id="sat_b"></button></td>
                    <td><button className="dsh_time" id="sat_c"></button></td>
                  </tr>
                </tabl>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-16"></input>
              </td>
            </tr>

            <tr>
              <td>Sunday</td>
              <td>
                <tabl>
                  <tr>
                    <td><button className="dsh_time" id="sun_a"></button></td>
                    <td><button className="dsh_time" id="sun_b"></button></td>
                    <td><button className="dsh_time" id="sun_c"></button></td>
                  </tr>
                </tabl>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-17"></input>
              </td>
            </tr>
          </table>
        </div>

      </div>
      

    </div>
  );
}

export default Dashboard;