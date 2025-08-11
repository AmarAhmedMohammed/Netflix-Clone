import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <div className="header-out-conatiner">
      <section className="header-sec-container">
        <ul className="left-list">
          <li>
            <img src="netflix-logo.png" alt="" />
          </li>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
        </ul>
        <ul className="right-list">
          <li>
            <SearchIcon />
          </li>
          <li>
            <NotificationsNoneIcon />
          </li>
          <li>
            <AccountBoxIcon />
          </li>
          <li>
            <ArrowDropDownIcon />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Header;
