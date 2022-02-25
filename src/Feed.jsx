import React, { useEffect, useState } from "react";

import Post from "./Post";
import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);
  const collRef = collection(db, "posts");

  useEffect(() => {
    onSnapshot(collRef, (snapshot) => {
      let p = [];
      snapshot.docs.forEach((doc) => {
        p.push({ ...doc.data(), id: doc.id });
      });

      setPosts(p);
    });
  }, []);

  return (
    <div className="feed">
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            postid={post.id}
            address={post.address}
            appartmentType={post.apartmentType}
            bathrooms={post.bathrooms}
            bedrooms={post.bedrooms}
            city={post.city}
            deposit={post.deposit}
            displayName={post.displayName}
            kitchen={post.kitchen}
            locality={post.locality}
            nearbyplaces={post.nearbyplaces}
            ownerph={post.ownerph}
            parking={post.parking}
            postURL={post.postURL}
            profilePic={post.profilePic}
            rent={post.rent}
            sqrft={post.sqrft}
            timestamp={post.timestamp}
          />
        );
      })}
    </div>
  );
}

export default Feed;
