import { FavoriteBorder } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { useStateValue } from "../StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";
function NavBar() {
  const [{ user }, dispatch] = useStateValue();

  const logout = () => {
    signOut(auth)
      .then(() =>
        dispatch({
          user: null,
          type: actionTypes.SET_USER,
        })
      )
      .catch((e) => console.log(e));
  };

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
          <span onClick={logout} title="Logout">
            <Avatar src={user.photoURL} />
          </span>
          <h4 className="navbar__rightOption__dispName">{user.displayName}</h4>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
