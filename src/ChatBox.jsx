import { collection, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./chatbox.css";
import db from "./firebase";

function ChatBox() {
  const { roomId } = useParams();
  const [receiver, setReceiver] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [receiverId, setReveiverId] = useState();
  useEffect(() => {
    const colref = collection(db, `chats/${roomId}/msgs`);
    onSnapshot(colref, (snapshot) => {
      snapshot.docs.map((doc) => {
        setReceiver(doc.data());
        console.log(doc.id);
        setReveiverId(doc.id);
        console.log(receiverId);
      });
    });
    console.log(roomId);
    const colref1 = collection(
      db,
      `chats/${roomId}/msgs/${receiverId}/chatmsgs/`
    );
    onSnapshot(colref1, (snapshot) => {
      let tempmsgs = [];
      snapshot.docs.map((doc) => {
        tempmsgs.push(doc.data());
      });
      setMsgs(tempmsgs);
      console.log(tempmsgs);
    });
  }, []);
  console.log(receiverId);

  return (
    <div className="chatbox">
      <h1>{receiver.receiver}</h1>
      <div>
        <p>
          <b>MSG:</b>
          {}
        </p>
      </div>
    </div>
  );
}

export default ChatBox;
