import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Doctorlist/Doctor.css"


const Userdetails = (props) => {
    
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [adhaar, setAdhaar] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8013/save", {
        id: id,
        firstname: firstname,
        lastname: lastname,
        username: username,
        mobile: mobile,
        aadharno: adhaar,
        email: email,
        pass: password
     
      });
      alert("user registration successfully");
      setId("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setAdhaar("");
      setMobile("");
    } catch (err) {
      alert("user registration failed");
    }
  }


    
  return (
    <div className="item-center   mx-5">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="hui"
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XV6GtVsWdxLF2x-NSpFj_0HmCJVQg3Qxn6FHzZilYSO5bzjE5bNWO41jpaAOmhAc4kE&usqp=CAU"
            />
          </div> */}
          {/* <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Dr. Batra
            </h1>            
            <div className="flex justify-center">
             <h5 className="content">Dermatologist</h5>
             <h5 className="content">15+ Experience</h5>          
            </div>
          </div> */}
        </div>
      </section>
      <section>
      <form className="form" onSubmit={handleSubmit}>
      <h1> Book Appointment</h1>
                <div className="col-md-6">
                  <label htmlFor="id" className="form-label">
                    ID
                  </label>
                  <input
                    name="id"
                    onChange={(event) => {
                      setId(event.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">User-Name</label>
                  <input
                    name="username"
                    onChange={(event) => {
                      setUserName(event.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">First-Name</label>
                  <input
                    name="firstname"
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last-Name</label>
                  <input
                    name="lastname"
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    name="email"
                    type="email"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    name="password"
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Adhaar Number</label>
                  <input
                    onChange={(event) => {
                      setAdhaar(event.target.value);
                    }}
                    name="adhaar"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Mobile</label>
                  <input
                    onChange={(event) => {
                      setMobile(event.target.value);
                    }}
                    name="mobile"
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Agree to
                      <Link
                        className="tc active"
                        aria-current="page"
                        to="/t and c"
                      >
                        term and condition
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button type="submit" className="loginSubmit mb-2">
                      Check Out
                    </button>
                  </div>
                  <div className="col-lg-7">
                    <button type="submit" className="loginSubmit mb-2">
                    <Link to="/bookingsummary" style={{ textDecoration: 'none' }}>
                       Summary
                    </Link>
                      
                    </button>
                  </div>
                </div>
              </form>
      </section>
     
    </div>
  );
};

export default Userdetails;