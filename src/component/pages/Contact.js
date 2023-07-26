import React, { useState } from "react";
import { Button } from "@mui/material";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    number: "",
    email: "",
    message: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((olddata) => {
      return {
        ...olddata,
        [name]: value,
      };
    });
  };

const formSubmit = (e) => {
    e.preventDefault()
    alert(`Your Name: ${data.fname} ${data.lname}
          Your Number: ${data.number}
          Your Email: ${data.email} 
          Your Message: ${data.message}`)
    setData(()=>{
      return {
        fname:'',
        lname:'',
        number:'',
        email:'',
        message:'',
      }
    })
  };

  return (
    <section className="container my-4">
      <h1 className="text-center py-lg-4 py-2 ">Contact Us</h1>
      <div className="row">
        <div className="col-md-8 col-12 mx-auto">
          <form className="border py-3 px-md-4 px-2 shadow-sm" onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fname"
                required
                name="fname"
                value={data.fname}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <input
                type="lname"
                className="form-control"
                id="lname"
                required
                name="lname"
                value={data.lname}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="number" className="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                className="form-control"
                id="number"
                required
                name="number"
                value={data.number}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                name="email"
                value={data.email}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={data.message}
                onChange={inputEvent}
                rows={4}
              ></textarea>
            </div>
            <Button type="submit" className=" common-btn">
              {" "}
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
