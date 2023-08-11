import React from "react";
import "./video.css";
import Border from "./border";

const Video = ({ id, title, channel = "Coder Dost", views, time }) => {
  let url = `https://picsum.photos/id/${id}/200/100`;
  return (
    <div className="container">
      <div className="pic">
        <img src={url} alt="" />
      </div>

      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <Border>
        <div className="views">
          {views} <span>•</span> {time}
        </div>
      </Border>
    </div>
  );
};

export default Video;
