import React, { Children } from "react";
import "./PhotoCard.scss";

const PhotoCard = (child) => {
  return (
    <>
      <div className="card">
        <div className="overlay"></div>
        <div className="image-div">
          <img src={child.bild} alt={child.alt} />
        </div>
        <div className="card-element">
          <div className="card-content">
            <div className="title">
              <h1>{child.title}</h1>
            </div>
            <div className="content">{child.content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoCard;
