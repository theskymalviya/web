import React from 'react'
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";


const Common = (props) => {
  return (
    <>
    <section className="section d-flex align-items-center mt-lg-0 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center home-text order-lg-1 order-2">
            <h1>
             {props.name}
              <span className="brand"> developer.sky</span>
            </h1>
            <p className="mt-2">
              We are the team of talented developer making websites
            </p>
            <NavLink to={props.visit} className="mt-lg-4 mt-2">
              <Button className="common-btn" >{props.btnname}</Button>
            </NavLink>
          </div>
          <div className="col-md-6 col-12 order-lg-2 order-1">
            <div className="p-5">
              <img src={props.imgsrc} alt="homeimage" className="img-fluid animated "  />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Common