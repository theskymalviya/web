import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const ServiceCard = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card border-0 shadow-lg">
        <img src={props.imgSrc} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{props.titleText}</h5>
          <p className="card-text">{props.discText}</p>
          <NavLink to="">
            <Button className="common-btn">Go somewhere</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
