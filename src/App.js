import "./styles/App.css";
import Feed from "./components/Feed";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { useStateValue } from "./StateProvider";
import { Routes, Route } from "react-router-dom";
import PostProperty from "./components/PostProperty";
import Home from "./components/Home";
import Chat from "./components/Chat";
import ChatSideBar from "./components/ChatSideBar";
import ChatBox from "./components/ChatBox";

function App() {
  const [{ user }] = useStateValue();
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
