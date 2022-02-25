import { useEffect, useState } from "react";
import "./App.css";
import Feed from "./Feed";
import Login from "./Login";
import MessageBar from "./MessageBar";
import NavBar from "./NavBar";
import { useStateValue } from "./StateProvider";
import { Routes, Route, Link, useParams } from "react-router-dom";
import PostProperty from "./PostProperty";
import Home from "./Home";
import { auth } from "./firebase";
import Chat from "./Chat";
import ChatSideBar from "./ChatSideBar";
import ChatBox from "./ChatBox";
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
                    <Home />
                  </div>
                </div>
              }
            />
            <Route
              path="/rentahouse"
              element={
                <div className="app__cover">
                  <div className="app__body">
                    <Feed />
                  </div>
                </div>
              }
            />

            <Route path="/postaproperty" element={<PostProperty />} />

            <Route path="/chat/:roomId" element={<Chat />} />
            <Route
              path="/chatbox/:roomId"
              element={
                <div className="chatroom">
                  <ChatSideBar />
                  <ChatBox />
                </div>
              }
            />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
