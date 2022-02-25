import { collection, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import ChatBox from "./ChatBox";
import ChatSideBar from "./ChatSideBar";
import db from "./firebase";
import "./Chat.css";

function Chat() {
  const { roomId } = useParams();
  useEffect(() => {
    if (true) {
      const docRef = doc(db, "posts", roomId);

      onSnapshot(docRef, (snapshot) => {
        console.log(snapshot.data().ownerph);
      });
    }
  }, []);

  return (
    <div className="chat">
      <ChatSideBar />
      <ChatBox />
    </div>
  );
}

export default Chat;
