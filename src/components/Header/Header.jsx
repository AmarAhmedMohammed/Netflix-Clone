import "./Header.css";
// import "../../css/bootstrap.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left d-sm-none d-md-block">
          <ul>
            <li className="block">
              <img src="netflix-logo.png" alt="" />
            </li>
            <li className="none">Home</li>
            <li className="none">TvShow</li>
            <li className="none">Movies</li>
            <li className="none">Latest</li>
            <li className="none">MyList</li>
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
