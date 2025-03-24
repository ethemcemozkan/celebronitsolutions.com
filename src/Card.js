import React from "react";

function Card({ children, title, text, imgsrc, imgclass, link, layout = "vertical", roundImg = false }) {
  const isHorizontal = layout === "horizontal";

  // Determine image class based on roundImg and layout
  const imageClass = roundImg
    ? "rounded-circle img-thumbnail"
    : imgclass
    ? imgclass
    : isHorizontal
    ? "img-fluid w-50"
    : "card-img-top";

  const imageStyle = roundImg
    ? { width: "120px", height: "120px", objectFit: "cover" }
    : isHorizontal
    ? { objectFit: "cover", height: "100%" }
    : {};

  return (
    <div className={` ${isHorizontal ? "container px-4" : "col-md-4 col-10"}`}>
      <div className={`card ${isHorizontal ? "flex-row align-items-center" : ""}`}>
        <img
          src={imgsrc}
          className={imageClass}
          alt={title}
          style={imageStyle}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {text && <p className="card-text">{text}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;