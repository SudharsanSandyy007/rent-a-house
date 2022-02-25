import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import HomeIcon from "@mui/icons-material/Home";
import "../styles/Login.css";

function Login() {
  const [, dispatch] = useStateValue();
  const login = () => {
    //lgoin code
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          user: result.user,
          type: actionTypes.SET_USER,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="login__container">
      <div className="login">
        <div className="login__logo">
          <h4>
            &nbsp; RENT A <br />
            <div>
              <HomeIcon />
              OUSE
            </div>
          </h4>
        </div>
        <div onClick={login} className="login__btn">
          <img
            className="googlelogo"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt=""
          />{" "}
          <b> LOGIN WITH GOOGLE </b>
        </div>
      </div>
    </div>
  );
}

export default Login;
