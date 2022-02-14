import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function Login() {
  const [{}, dispatch] = useStateValue();
  const login = () => {
    //lgoin code
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
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
    <div>
      <h1>RENT A HOUSE LOGIN</h1>
      <button onClick={login}>Login!</button>
    </div>
  );
}

export default Login;
