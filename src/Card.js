import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc, ...props }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <h5 className="card-title">{title}</h5>
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
