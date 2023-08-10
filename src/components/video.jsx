import React from "react";
import "./video.css"

const Video = ({ id, title, channel= "Coder Dost", views, time }) => {
let url = `https://picsum.photos/id/${id}/200/100`;
  return (
    <div className="container">
      <div className="pic">
        <img src={url} alt="" />
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
