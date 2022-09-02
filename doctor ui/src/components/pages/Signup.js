import React, { useState } from "react";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Signup.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
import connection from "../../connection";
import Swiper from "swiper";
export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    // event.preventDefault();
    console.log(data);
  


    // Creating newUser Object...
    const newUser = {
      name: data.name,
      email: data.email,
      mobileno:data.number,
      password: data.password,
      type:"patient"
    };

    //call server api for sending data
      connection.post("/api/v1/auth/register",newUser)
      .then((resp) => {
        console.log(resp.data);
        console.log("success log");
        //alert("Patient is registered successfully !! Patient id " + resp.data.id)
        toast.success("Patient is registered successfully !! Patient id " + resp.data.id);
        
      })
      .catch((error) => {
        toast.error(error.response.data.error)
        alert(error.response.data.error)
      });


    
    
  }
  return (
    <div>
      <section >
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">

            </div>

          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 ">
                 
                  <label className="mb-1"> </label>
                  <h1>SignUp</h1>
          
                   <h4>Are you a doctor?</h4>
                   <Link to="/register">Register Here</Link>
                   <br/><br/>
                   <Link to="/login">Login</Link>
                   <hr/>
                  
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                      <label>Name</label>
                      <input
                        placeholder="Enter Your Name"
                        {...register("name", { required: true })}
                      />
                      <br></br>
                      <error>
                        {errors.name?.type === "required" && "Name is required"}
                      </error>
                    </div>
                    <div>
                      <label>Email</label>
                      <input
                        placeholder="Enter Your Email"
                        {...register("email", {
                          required: true,
                          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                        })}
                      />
                      <br></br>
                      <error>
                        {errors.email?.type === "required" && "Email is required"}
                        {errors.email?.type === "pattern" &&
                          "Entered email is in wrong format"}
                      </error>
                    </div>
                    <div>
                      <label>Phone Number</label>
                      <input
                        placeholder="Enter Your Number"
                        type="number"
                        {...register("number", {
                          minLength: 6,
                          maxLength: 12,
                        })}
                      />
                      <br></br>
                      <error>
                        {errors.number?.type === "minLength" &&
                          "Entered number is less than 6 digits"}
                        {errors.number?.type === "maxLength" &&
                          "Entered number is more than 12 digits"}
                      </error>
                    </div>
                    <div>
                      <label>Password</label>
                      <input
                        type= "password"

                        placeholder="Create your password"
                        {...register("password", {
                      
                          required: true,
                          minLength: 5,
                          maxLength: 20,
                        })}
                      />

                      <br/><br/>
                      <error>
                        {errors.password?.type === "minLength" &&
                          "Entered password is less than 5 characters"}
                        {errors.password?.type === "maxLength" &&
                          "Entered password is more than 20 characters"}
                      </error>
                    </div>

                    <div>
                      <input className="button" type="submit" />
                    </div>

                  </form>
                </div>

                <div className="col-md-6 border-start">
                  <img src="https://img.freepik.com/free-photo/3d-render-realistic-medical-stethoscope-color-background_460848-10589.jpg?w=740&t=st=1661920865~exp=1661921465~hmac=1acced2900f7abf71c39a97044b792f3271541cabb3d80b867a97ecf6e3c893b" width={500} height={350} />
                </div>

                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
    
  );
}