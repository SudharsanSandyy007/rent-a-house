import { useState } from "react";
import "./App.css";
import Feed from "./Feed";
import Login from "./Login";
import MessageBar from "./MessageBar";
import NavBar from "./NavBar";
import { useStateValue } from "./StateProvider";
import { Routes, Route, Link } from "react-router-dom";
import PostProperty from "./PostProperty";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="app__cover">
                  <div className="app__body">
                    <Feed />
                  </div>
                </div>
              }
            />

            <Route path="postaproperty" element={<PostProperty />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
