import {
  BathtubSharp,
  BookmarkBorder,
  Countertops,
  DirectionsCar,
  FavoriteBorder,
  FavoriteBorderOutlined,
  Flag,
  ForumSharp,
  HotelSharp,
  MoreHoriz,
  Share,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
function Post({
  address,
  appartmentType,
  bathrooms,
  bedrooms,
  city,
  deposit,
  displayName,
  kitchen,
  locality,
  parking,
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
          {bedrooms}BHK {appartmentType} for Rent In {locality}
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
          <img
            src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
            alt=""
          />
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
                <BathtubSharp /> <span>{bathrooms} Bathroom (Attached)</span>
              </div>
              <div className="post__row3RightTop_Option">
                <DirectionsCar /> <span>Parking: {parking ? "yes" : "no"}</span>
              </div>
            </div>
          </div>
          <div className="post__row3Right__bottom">
            <div className="post__row3RightBottom__option">
              <h2>Contact Owner:</h2>
              <p>Name: San</p>
              <p>ph: 8434039302</p>
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

      <div className="post__row4">Nearby: D Mart, KFC, Raiway Station</div>
    </div>
  );
}

export default Post;
