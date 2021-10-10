// import React from "react";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { Link, useHistory } from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {app,signInWithGoogle} from "./firebase1";
import { getFirestore, setDoc, doc, addDoc, updateDoc } from "firebase/firestore";

function add(a, b, c, d, e) {
    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    var v = document.getElementById(e);
    w.hidden = false;
    x.hidden = true;
    y.hidden = false;
    z.hidden = false;
    v.hidden = true;
};

function cancel(a, b, c, d, e) {
    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    var v = document.getElementById(e);
    w.hidden = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;
    v.hidden = true;
};

function Schedular() {
  // const auth = getAuth(app);
  // var user = auth.currentUser;
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [mon_1, set_mon_1] = useState("");
    const [mon_2, set_mon_2] = useState("");
    const [mon_3, set_mon_3] = useState("");
    const [tue_1, set_tue_1] = useState("");
    const [tue_2, set_tue_2] = useState("");
    const [tue_3, set_tue_3] = useState("");
    const [wed_1, set_wed_1] = useState("");
    const [wed_2, set_wed_2] = useState("");
    const [wed_3, set_wed_3] = useState("");
    const [thu_1, set_thu_1] = useState("");
    const [thu_2, set_thu_2] = useState("");
    const [thu_3, set_thu_3] = useState("");
    const [fri_1, set_fri_1] = useState("");
    const [fri_2, set_fri_2] = useState("");
    const [fri_3, set_fri_3] = useState("");
    const [sat_1, set_sat_1] = useState("");
    const [sat_2, set_sat_2] = useState("");
    const [sat_3, set_sat_3] = useState("");
    const [sun_1, set_sun_1] = useState("");
    const [sun_2, set_sun_2] = useState("");
    const [sun_3, set_sun_3] = useState("");

    const fix = (a, b, c, d, e) => {
        var user = auth.currentUser.uid;
        
        var w = document.getElementById(a);
        var x = document.getElementById(b);
        var y = document.getElementById(c);
        var z = document.getElementById(d);
        var v = document.getElementById(e);
        w.hidden = true;
        x.hidden = true;
        y.hidden = true;
        z.hidden = true;
        v.hidden = false;

        updateDoc(doc(db, "doc", user), {
            doc_mon_1: mon_1,
            doc_mon_2: mon_2,
            doc_mon_3: mon_3,
            doc_tue_1: tue_1,
            doc_tue_2: tue_2,
            doc_tue_3: tue_3,
            doc_wed_1: wed_1,
            doc_wed_2: wed_2,
            doc_wed_3: wed_3,
            doc_thu_1: thu_1,
            doc_thu_2: thu_2,
            doc_thu_3: thu_3,
            doc_fri_1: fri_1,
            doc_fri_2: fri_2,
            doc_fri_3: fri_3,
            doc_sat_1: sat_1,
            doc_sat_2: sat_2,
            doc_sat_3: sat_3,
            doc_sun_1: sun_1,
            doc_sun_2: sun_2,
            doc_sun_3: sun_3,
        })
    };
  
  
  
  return (
    <div class="sch_main_box">
          
      <div class="sch_title"></div>

      <table class="sch_main_table">

          <tr class="sch_table_title">
              <th>DAY</th>
              <th>SCHEDULE</th>
              <th>EDIT</th>
          </tr>

          <tr class="sch_table_content">
              <th>MONDAY</th>
              <td>
                  <table>
                      <tr>

                          <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_mon_a1_1" onClick={() => add('sch_mon_a2_1', 'sch_mon_a1_1', 'sch_mon_a4_1', 'sch_mon_a5_1', 'sch_mon_a3_1')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_mon_a2_1" onChange={(e) => set_mon_1(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_mon_a3_1"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_mon_a4_1" onClick={() => fix('sch_mon_a2_1', 'sch_mon_a1_1', 'sch_mon_a4_1', 'sch_mon_a5_1', 'sch_mon_a3_1')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_mon_a5_1" onClick={() => cancel('sch_mon_a2_1', 'sch_mon_a1_1', 'sch_mon_a4_1', 'sch_mon_a5_1', 'sch_mon_a3_1')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_mon_a1_2" onClick={() => add('sch_mon_a2_2', 'sch_mon_a1_2', 'sch_mon_a4_2', 'sch_mon_a5_2', 'sch_mon_a3_2')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_mon_a2_2" onChange={(e) => set_mon_2(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_mon_a3_2"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_mon_a4_2" onClick={() => fix('sch_mon_a2_2', 'sch_mon_a1_2', 'sch_mon_a4_2', 'sch_mon_a5_2', 'sch_mon_a3_2')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_mon_a5_2" onClick={() => cancel('sch_mon_a2_2', 'sch_mon_a1_2', 'sch_mon_a4_2', 'sch_mon_a5_2', 'sch_mon_a3_2')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_mon_a1_3" onClick={() => add('sch_mon_a2_3', 'sch_mon_a1_3', 'sch_mon_a4_3', 'sch_mon_a5_3', 'sch_mon_a3_3')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_mon_a2_3" onChange={(e) => set_mon_3(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_mon_a3_3"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_mon_a4_3" onClick={() => fix('sch_mon_a2_3', 'sch_mon_a1_3', 'sch_mon_a4_3', 'sch_mon_a5_3', 'sch_mon_a3_3')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_mon_a5_3" onClick={() => cancel('sch_mon_a2_3', 'sch_mon_a1_3', 'sch_mon_a4_3', 'sch_mon_a5_3', 'sch_mon_a3_3')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>

                          </td>

                      </tr>
                  </table>
              </td>
              <td>
                  <button type="submit">EDIT</button>
              </td>
          </tr>

          <tr>
              <th>TUESDAY</th>
              <td>
                  <table>
                      <tr>

                          <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_tue_a1_1" onClick={() => add('sch_tue_a2_1', 'sch_tue_a1_1', 'sch_tue_a4_1', 'sch_tue_a5_1', 'sch_tue_a3_1')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_tue_a2_1" onChange={(e) => set_tue_1(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_tue_a3_1"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_tue_a4_1" onClick={() => fix('sch_tue_a2_1', 'sch_tue_a1_1', 'sch_tue_a4_1', 'sch_tue_a5_1', 'sch_tue_a3_1')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_tue_a5_1" onClick={() => cancel('sch_tue_a2_1', 'sch_tue_a1_1', 'sch_tue_a4_1', 'sch_tue_a5_1', 'sch_tue_a3_1')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_tue_a1_2" onClick={() => add('sch_tue_a2_2', 'sch_tue_a1_2', 'sch_tue_a4_2', 'sch_tue_a5_2', 'sch_tue_a3_2')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_tue_a2_2" onChange={(e) => set_tue_2(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_tue_a3_2"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_tue_a4_2" onClick={() => fix('sch_tue_a2_2', 'sch_tue_a1_2', 'sch_tue_a4_2', 'sch_tue_a5_2', 'sch_tue_a3_2')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_tue_a5_2" onClick={() => cancel('sch_tue_a2_2', 'sch_tue_a1_2', 'sch_tue_a4_2', 'sch_tue_a5_2', 'sch_tue_a3_2')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_tue_a1_3" onClick={() => add('sch_tue_a2_3', 'sch_tue_a1_3', 'sch_tue_a4_3', 'sch_tue_a5_3', 'sch_tue_a3_3')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_tue_a2_3" onChange={(e) => set_tue_3(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_tue_a3_3"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_tue_a4_3" onClick={() => fix('sch_tue_a2_3', 'sch_tue_a1_3', 'sch_tue_a4_3', 'sch_tue_a5_3', 'sch_tue_a3_3')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_tue_a5_3" onClick={() => cancel('sch_tue_a2_3', 'sch_tue_a1_3', 'sch_tue_a4_3', 'sch_tue_a5_3', 'sch_tue_a3_3')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>

                          </td>

                      </tr>
                  </table>
              </td>
              <td>
                  <button type="submit">EDIT</button>
              </td>
          </tr>

          <tr>
              <th>WEDNESDAY</th>
              <td>
                  <table>
                      <tr>

                          <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_wed_a1_1" onClick={() => add('sch_wed_a2_1', 'sch_wed_a1_1', 'sch_wed_a4_1', 'sch_wed_a5_1', 'sch_wed_a3_1')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_wed_a2_1" onChange={(e) => set_wed_1(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_wed_a3_1"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_wed_a4_1" onClick={() => fix('sch_wed_a2_1', 'sch_wed_a1_1', 'sch_wed_a4_1', 'sch_wed_a5_1', 'sch_wed_a3_1')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_wed_a5_1" onClick={() => cancel('sch_wed_a2_1', 'sch_wed_a1_1', 'sch_wed_a4_1', 'sch_wed_a5_1', 'sch_wed_a3_1')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_wed_a1_2" onClick={() => add('sch_wed_a2_2', 'sch_wed_a1_2', 'sch_wed_a4_2', 'sch_wed_a5_2', 'sch_wed_a3_2')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_wed_a2_2" onChange={(e) => set_wed_2(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_wed_a3_2"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_wed_a4_2" onClick={() => fix('sch_wed_a2_2', 'sch_wed_a1_2', 'sch_wed_a4_2', 'sch_wed_a5_2', 'sch_wed_a3_2')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_wed_a5_2" onClick={() => cancel('sch_wed_a2_2', 'sch_wed_a1_2', 'sch_wed_a4_2', 'sch_wed_a5_2', 'sch_wed_a3_2')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_wed_a1_3" onClick={() => add('sch_wed_a2_3', 'sch_wed_a1_3', 'sch_wed_a4_3', 'sch_wed_a5_3', 'sch_wed_a3_3')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_wed_a2_3" onChange={(e) => set_wed_3(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_wed_a3_3"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_wed_a4_3" onClick={() => fix('sch_wed_a2_3', 'sch_wed_a1_3', 'sch_wed_a4_3', 'sch_wed_a5_3', 'sch_wed_a3_3')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_wed_a5_3" onClick={() => cancel('sch_wed_a2_3', 'sch_wed_a1_3', 'sch_wed_a4_3', 'sch_wed_a5_3', 'sch_wed_a3_3')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>

                          </td>

                      </tr>
                  </table>
              </td>
              <td>
                  <button type="submit">EDIT</button>
              </td>
          </tr>

          <tr>
              <th>THURSDAY</th>
              <td>
                  <table>
                      <tr>

                          <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_thu_a1_1" onClick={() => add('sch_thu_a2_1', 'sch_thu_a1_1', 'sch_thu_a4_1', 'sch_thu_a5_1', 'sch_thu_a3_1')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_thu_a2_1" onChange={(e) => set_thu_1(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_thu_a3_1"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_thu_a4_1" onClick={() => fix('sch_thu_a2_1', 'sch_thu_a1_1', 'sch_thu_a4_1', 'sch_thu_a5_1', 'sch_thu_a3_1')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_thu_a5_1" onClick={() => cancel('sch_thu_a2_1', 'sch_thu_a1_1', 'sch_thu_a4_1', 'sch_thu_a5_1', 'sch_thu_a3_1')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_thu_a1_2" onClick={() => add('sch_thu_a2_2', 'sch_thu_a1_2', 'sch_thu_a4_2', 'sch_thu_a5_2', 'sch_thu_a3_2')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_thu_a2_2" onChange={(e) => set_thu_2(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_thu_a3_2"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_thu_a4_2" onClick={() => fix('sch_thu_a2_2', 'sch_thu_a1_2', 'sch_thu_a4_2', 'sch_thu_a5_2', 'sch_thu_a3_2')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_thu_a5_2" onClick={() => cancel('sch_thu_a2_2', 'sch_thu_a1_2', 'sch_thu_a4_2', 'sch_thu_a5_2', 'sch_thu_a3_2')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_thu_a1_3" onClick={() => add('sch_thu_a2_3', 'sch_thu_a1_3', 'sch_thu_a4_3', 'sch_thu_a5_3', 'sch_thu_a3_3')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_thu_a2_3" onChange={(e) => set_thu_3(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_thu_a3_3"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_thu_a4_3" onClick={() => fix('sch_thu_a2_3', 'sch_thu_a1_3', 'sch_thu_a4_3', 'sch_thu_a5_3', 'sch_thu_a3_3')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_thu_a5_3" onClick={() => cancel('sch_thu_a2_3', 'sch_thu_a1_3', 'sch_thu_a4_3', 'sch_thu_a5_3', 'sch_thu_a3_3')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>

                          </td>

                      </tr>
                  </table>
              </td>
              <td>
                  <button type="submit">EDIT</button>
              </td>
          </tr>

          <tr>
              <th>FRIDAY</th>
              <td>
                  <table>
                      <tr>

                          <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_fri_a1_1" onClick={() => add('sch_fri_a2_1', 'sch_fri_a1_1', 'sch_fri_a4_1', 'sch_fri_a5_1', 'sch_fri_a3_1')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_fri_a2_1" onChange={(e) => set_fri_1(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_fri_a3_1"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_fri_a4_1" onClick={() => fix('sch_fri_a2_1', 'sch_fri_a1_1', 'sch_fri_a4_1', 'sch_fri_a5_1', 'sch_fri_a3_1')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_fri_a5_1" onClick={() => cancel('sch_fri_a2_1', 'sch_fri_a1_1', 'sch_fri_a4_1', 'sch_fri_a5_1', 'sch_fri_a3_1')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_fri_a1_2" onClick={() => add('sch_fri_a2_2', 'sch_fri_a1_2', 'sch_fri_a4_2', 'sch_fri_a5_2', 'sch_fri_a3_2')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_fri_a2_2" onChange={(e) => set_fri_2(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_fri_a3_2"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_fri_a4_2" onClick={() => fix('sch_fri_a2_2', 'sch_fri_a1_2', 'sch_fri_a4_2', 'sch_fri_a5_2', 'sch_fri_a3_2')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_fri_a5_2" onClick={() => cancel('sch_fri_a2_2', 'sch_fri_a1_2', 'sch_fri_a4_2', 'sch_fri_a5_2', 'sch_fri_a3_2')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_fri_a1_3" onClick={() => add('sch_fri_a2_3', 'sch_fri_a1_3', 'sch_fri_a4_3', 'sch_fri_a5_3', 'sch_fri_a3_3')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_fri_a2_3" onChange={(e) => set_fri_3(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_fri_a3_3"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_fri_a4_3" onClick={() => fix('sch_fri_a2_3', 'sch_fri_a1_3', 'sch_fri_a4_3', 'sch_fri_a5_3', 'sch_fri_a3_3')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_fri_a5_3" onClick={() => cancel('sch_fri_a2_3', 'sch_fri_a1_3', 'sch_fri_a4_3', 'sch_fri_a5_3', 'sch_fri_a3_3')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>

                          </td>

                      </tr>
                  </table>
              </td>
              <td>
                  <button type="submit">EDIT</button>
              </td>
          </tr>

          <tr>
              <th>SATDAY</th>
              <td>
                  <table>
                      <tr>

                          <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_sat_a1_1" onClick={() => add('sch_sat_a2_1', 'sch_sat_a1_1', 'sch_sat_a4_1', 'sch_sat_a5_1', 'sch_sat_a3_1')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_sat_a2_1" onChange={(e) => set_sat_1(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_sat_a3_1"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_sat_a4_1" onClick={() => fix('sch_sat_a2_1', 'sch_sat_a1_1', 'sch_sat_a4_1', 'sch_sat_a5_1', 'sch_sat_a3_1')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_sat_a5_1" onClick={() => cancel('sch_sat_a2_1', 'sch_sat_a1_1', 'sch_sat_a4_1', 'sch_sat_a5_1', 'sch_sat_a3_1')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_sat_a1_2" onClick={() => add('sch_sat_a2_2', 'sch_sat_a1_2', 'sch_sat_a4_2', 'sch_sat_a5_2', 'sch_sat_a3_2')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_sat_a2_2" onChange={(e) => set_sat_2(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_sat_a3_2"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_sat_a4_2" onClick={() => fix('sch_sat_a2_2', 'sch_sat_a1_2', 'sch_sat_a4_2', 'sch_sat_a5_2', 'sch_sat_a3_2')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_sat_a5_2" onClick={() => cancel('sch_sat_a2_2', 'sch_sat_a1_2', 'sch_sat_a4_2', 'sch_sat_a5_2', 'sch_sat_a3_2')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_sat_a1_3" onClick={() => add('sch_sat_a2_3', 'sch_sat_a1_3', 'sch_sat_a4_3', 'sch_sat_a5_3', 'sch_sat_a3_3')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_sat_a2_3" onChange={(e) => set_sat_3(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_sat_a3_3"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_sat_a4_3" onClick={() => fix('sch_sat_a2_3', 'sch_sat_a1_3', 'sch_sat_a4_3', 'sch_sat_a5_3', 'sch_sat_a3_3')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_sat_a5_3" onClick={() => cancel('sch_sat_a2_3', 'sch_sat_a1_3', 'sch_sat_a4_3', 'sch_sat_a5_3', 'sch_sat_a3_3')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>

                          </td>

                      </tr>
                  </table>
              </td>
              <td>
                  <button type="submit">EDIT</button>
              </td>
          </tr>

          <tr>
              <th>SUNDAY</th>
              <td>
                  <table>
                      <tr>

                          <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_sun_a1_1" onClick={() => add('sch_sun_a2_1', 'sch_sun_a1_1', 'sch_sun_a4_1', 'sch_sun_a5_1', 'sch_sun_a3_1')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_sun_a2_1" onChange={(e) => set_sun_1(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_sun_a3_1"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_sun_a4_1" onClick={() => fix('sch_sun_a2_1', 'sch_sun_a1_1', 'sch_sun_a4_1', 'sch_sun_a5_1', 'sch_sun_a3_1')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_sun_a5_1" onClick={() => cancel('sch_sun_a2_1', 'sch_sun_a1_1', 'sch_sun_a4_1', 'sch_sun_a5_1', 'sch_sun_a3_1')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_sun_a1_2" onClick={() => add('sch_sun_a2_2', 'sch_sun_a1_2', 'sch_sun_a4_2', 'sch_sun_a5_2', 'sch_sun_a3_2')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_sun_a2_2" onChange={(e) => set_sun_2(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_sun_a3_2"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_sun_a4_2" onClick={() => fix('sch_sun_a2_2', 'sch_sun_a1_2', 'sch_sun_a4_2', 'sch_sun_a5_2', 'sch_sun_a3_2')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_sun_a5_2" onClick={() => cancel('sch_sun_a2_2', 'sch_sun_a1_2', 'sch_sun_a4_2', 'sch_sun_a5_2', 'sch_sun_a3_2')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <button type="submit" id="sch_sun_a1_3" onClick={() => add('sch_sun_a2_3', 'sch_sun_a1_3', 'sch_sun_a4_3', 'sch_sun_a5_3', 'sch_sun_a3_3')}>ADD</button>
                                    </td>
                                    <td>
                                        <input type="text" hidden id="sch_sun_a2_3" onChange={(e) => set_sun_3(e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text" readOnly hidden id="sch_sun_a3_3"/>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_sun_a4_3" onClick={() => fix('sch_sun_a2_3', 'sch_sun_a1_3', 'sch_sun_a4_3', 'sch_sun_a5_3', 'sch_sun_a3_3')}>FIX</button>
                                    </td>
                                    <td>
                                        <button type="submit" hidden id="sch_sun_a5_3" onClick={() => cancel('sch_sun_a2_3', 'sch_sun_a1_3', 'sch_sun_a4_3', 'sch_sun_a5_3', 'sch_sun_a3_3')}>CANCEL</button>
                                    </td>

                                </tr>
                            </table>

                          </td>

                      </tr>
                  </table>
              </td>
              <td>
                  <button type="submit">EDIT</button>
              </td>
          </tr>

      </table>
    </div>
  );
}

export default Schedular;
