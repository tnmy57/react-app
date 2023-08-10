import React from "react";
import "./video.css"

const Video = ({ id, title, channel= "Coder Dost", views, time }) => {

  return (
    <div className="container">
      <div className="pic">
        <img src="https://picsum.photos/id/244/200/100" alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} <span>•</span> {time}
      </div>
    </div>
  );
};

export default Video;
