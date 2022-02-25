import { FavoriteBorder } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { useStateValue } from "../StateProvider";
function NavBar() {
  const [{ user }] = useStateValue();

  return (
    <div className="navbar">
      <div className="navbar__left">
        <h4>
          RENT A <HomeIcon />
          OUSE
        </h4>
      </div>

      <div className="navbar__middle">
        <div className="navbar__middleOption">
          <Link className="navbar__Proplink l1" to="/rentahouse">
            RENT A PROPERTY
          </Link>
        </div>
        <div className="navbar__middleOption">
          <Link className="navbar__Proplink l2" to="/postaproperty">
            POST A PROPERTY
          </Link>
        </div>
      </div>

      <div className="navbar__right">
        <div className="navbar__right__option">
          <Link className="navbar__Proplink l1" to="/">
            <HomeIcon />
          </Link>
        </div>

        <div className="navbar__right__option">
          <FavoriteBorder />
        </div>
        <div className="navbar__right__option">
          <Avatar src={user.photoURL} />
          <h4 className="navbar__rightOption__dispName">{user.displayName}</h4>
        </div>
      </div>
    </div>
  );
}

export default NavBar;