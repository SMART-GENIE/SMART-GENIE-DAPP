import React, { useState } from "react";
import "./Sidenavbar.css";
import { FaUserCircle } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { BsBoxArrowRight } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { toogleMenu, getTooglemenu } from "../Redux/Reducer/MenuReducer";

function Sidenavbarmobile() {
  const [openMenu, setopenMenu] = useState(false);

  const menu = useSelector(getTooglemenu);
  const dispatch = useDispatch();

  const location = useLocation();

  const PATHNAME = () => location?.pathname?.toLowerCase();

  const VALIDROUTE = (path) => (PATHNAME(path) == path ? true : false);

  return (
    <Offcanvas show={menu} onHide={() => dispatch(toogleMenu(!menu))}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Smart Genie</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div style={{ width: "100%" }} className="sidenav">
          <div className="sidebarcontainer">
            <div className="menu">
              <ul className="sidebarlist">
                <Link
                  onClick={() => dispatch(toogleMenu(!menu))}
                  className={VALIDROUTE("/") ? "Link-Active" : "Link"}
                  to="/"
                  style={{
                    width: "240px !important",
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius:"10px"
                  }}
                >
                  <li
                    style={{ color: VALIDROUTE("/") ? "white" : null }}
                    className="sidebaritems"
                  >
                    <span className="icon">
                      {!VALIDROUTE("/") ? (
                        <img
                          src="https://uploads-ssl.webflow.com/5c30d30a32c1877cbb03e545/5c56c4a24ed7964135f087b1_Account%20dark.svg"
                          width="24"
                          alt=""
                          class="sidemenu_button_icon"
                        />
                      ) : (
                        <img
                          src="https://uploads-ssl.webflow.com/5c30d30a32c1877cbb03e545/5c3f8723a6538c3f77d63a3c_Account.png"
                          width="24"
                          alt=""
                          class="sidemenu_button_icon"
                        />
                      )}
                    </span>
                    Control Panel
                  </li>
                </Link>

                <Link
                  onClick={() => dispatch(toogleMenu(!menu))}
                  className={VALIDROUTE("/partners") ? "Link-Active" : "Link"}
                  to="/Partners"
                  style={{
                    width: "240px !important",
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius:"10px"
                  }}
                >
                  <li
                    style={{ color: VALIDROUTE("/partners") ? "white" : null }}
                    className="sidebaritems"
                  >
                    <span className="icon">
                      {!VALIDROUTE("/partners") ? (
                        <img src="https://img.icons8.com/small/24/000000/tree-structure.png" />
                      ) : (
                        <img src="https://img.icons8.com/small/24/ffffff/tree-structure.png" />
                      )}
                    </span>
                    Partners
                  </li>
                </Link>
                <Link
                  onClick={() => dispatch(toogleMenu(!menu))}
                  className={VALIDROUTE("/uplines") ? "Link-Active" : "Link"}
                  to="/Uplines"
                  style={{
                    width: "240px !important",
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius:"10px"
                  }}
                >
                  <li
                    style={{ color: VALIDROUTE("/uplines") ? "white" : null }}
                    className="sidebaritems"
                  >
                    <span className="icon">
                      {!VALIDROUTE("/uplines") ? (
                        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/24/000000/external-users-cv-resume-flatart-icons-outline-flatarticons.png" />
                      ) : (
                        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/24/ffffff/external-users-cv-resume-flatart-icons-outline-flatarticons.png" />
                      )}
                    </span>
                    Uplines
                  </li>
                </Link>
                <Link
                  onClick={() => dispatch(toogleMenu(!menu))}
                  className={
                    VALIDROUTE("/lostprofits") ? "Link-Active" : "Link"
                  }
                  to="/Lostprofits"
                  style={{
                    width: "240px !important",
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius:"10px"
                  }}
                >
                  <li
                    style={{
                      color: VALIDROUTE("/lostprofits") ? "white" : null,
                    }}
                    className="sidebaritems"
                  >
                    <span className="icon">
                      {!VALIDROUTE("/lostprofits") ? (
                        <img src="https://img.icons8.com/fluency-systems-filled/24/000000/search-dollar.png" />
                      ) : (
                        <img src="https://img.icons8.com/fluency-systems-filled/24/ffffff/search-dollar.png" />
                      )}
                    </span>
                    Lost profits
                  </li>
                </Link>
                <li
                  style={{ color: VALIDROUTE("/promo") ? "white" : null }}
                  className="sidebaritems"
                >
                  <span className="icon">
                    <IoIosSend size={24} />
                  </span>
                  promo
                </li>

                <Link
                  onClick={() => dispatch(toogleMenu(!menu))}
                  className={"Link"}
                  to="/auth"
                  style={{
                    width: "240px !important",
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius:"10px"
                  }}
                >
                  <li className="sidebaritems">
                    <span className="icon">
                      <BsBoxArrowRight size={24} />
                    </span>
                    Logout
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
export default Sidenavbarmobile;