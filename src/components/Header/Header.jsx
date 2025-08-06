import "./Header.css";
// import "../../css/bootstrap.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className="header-outer-container container-fluid">
      <div className="header-container">
        <div className="header-left d-sm-none d-md-block">
          <ul>
            <li className="d-sm-block">
              <img src="netflix-logo.png" alt="" />
            </li>
            <li>Home</li>
            <li>TvShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
      </div>

      <div className="header-right">
        <ul>
          <li><SearchIcon /></li>
          <li><NotificationsNoneIcon /></li>
          <li><AccountBoxIcon /></li>
          <li><ArrowDropDownIcon /></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
