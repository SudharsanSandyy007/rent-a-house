import {
  BathtubSharp,
  Countertops,
  DirectionsCar,
  FavoriteBorderOutlined,
  Flag,
  HotelSharp,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Post.css";
function Post({
  address,
  postid,
  appartmentType,
  bathrooms,
  bedrooms,
  city,
  deposit,
  displayName,
  kitchen,
  locality,
  nearbyplaces,
  ownerph,
  parking,
  postURL,
  profilePic,
  rent,
  sqrft,
  timestamp,
}) {
  return (
    <div className="post">
      <div className="post__info">
        <div className="post__infoLeft">
          <Avatar src={profilePic} />
        </div>
        <div className="post__infoRight">
          <h2>{displayName}</h2>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__row1">
        <h1>
          {bedrooms}BHK {appartmentType} for Rent In {locality} | {city}
        </h1>
        <p>{address}</p>
      </div>

      <div className="post__row2">
        <div className="post__row2Left">
          <h2>{sqrft} sqft</h2>
          <p>Buildup</p>
        </div>
        <div className="post__row2Middle">
          <h2>₹{deposit}</h2>
          <p>Deposit</p>
        </div>
        <div className="post__row3Right">
          <h2>₹{rent}</h2>
          <p>Rent</p>
        </div>
      </div>

      <div className="post__row3">
        <div className="post__row3Left">
          <img src={postURL} alt="" />
        </div>
        <div className="post__row3Right">
          <div className="post__row3Right__top">
            <div className="post__row3RightTopOption__left">
              <div className="post__row3RightTop_Option">
                <HotelSharp /> <span>{bedrooms} Bed Room</span>
              </div>
              <div className="post__row3RightTop_Option">
                <Countertops /> <span>{kitchen} Kitchen</span>
              </div>
            </div>

            <div className="post__row3RightTopOption__right">
              <div className="post__row3RightTop_Option">
                <BathtubSharp /> <span>{bathrooms} Bathroom </span>
              </div>
              <div className="post__row3RightTop_Option">
                <DirectionsCar /> <span>Parking: {parking ? "yes" : "no"}</span>
              </div>
            </div>
          </div>
          <div className="post__row3Right__bottom">
            <div className="post__row3RightBottom__option">
              <h2>Contact Owner:</h2>
              <p>Name: {displayName}</p>
              <p>ph: {ownerph}</p>
            </div>

            <div className="post__row3RightBottom__option">
              <FavoriteBorderOutlined />
            </div>
            <div className="post__row3RightBottom__option">
              <Flag />
            </div>
          </div>
        </div>
      </div>

      <div className="post__row4">
        Nearby Places: {nearbyplaces}{" "}
        <Link to={`/chat/${postid}`}>
          <button>Chat with owner</button>
        </Link>
      </div>
    </div>
  );
}

export default Post;
