import React from "react";
import { NavLink } from "react-router-dom";
import FooterSocials from "./FooterSocials";
import ResetLocation from "../../helpers/ResetLocation";

const FooterMenu = () => {
  return (
    <ul className="footer__menu  flex-container flex-column">
      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                textDecoration: "none",
                color: "#ff6240",
              }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/menu"
        >
          Menu
        </NavLink>
      </li>

      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                textDecoration: "none",
                color: "#ff6240",
              }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <FooterSocials />
      </li>
    </ul>
  );
}
export default FooterMenu
