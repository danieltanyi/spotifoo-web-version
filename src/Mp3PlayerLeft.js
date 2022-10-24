import React from "react";

import "./App.css";

// Naming -1 This should be called sidebar or navigation bar
function Mp3PlayerLeft(props) {
  return (
    <div className="Mp3Player-Content-Left">
      <div className="Mp3Player-Content-Left-Left">
        <img className="image" src={props.image} alt="Thumbnail" />
      </div>
      <div className="Mp3Player-Content-Left-Right">
        <p className="Mp3Player-Item-Left-Right">{props.title} </p>
        <p className="Mp3Player-Item-Left-Right">{props.artist}</p>
      </div>
    </div>
  );
}

export default Mp3PlayerLeft;
