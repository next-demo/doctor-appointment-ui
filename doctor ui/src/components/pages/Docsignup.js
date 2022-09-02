import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
import connection from "../../connection";
function SignupD() {
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
      mobileno: data.number,
      password: data.password,
      type: "doctor"
    };

    //call server api for sending data
    connection.post("/api/v1/auth/register", newUser)
      .then((resp) => {
        console.log(resp.data);
        console.log("success log");
        //alert("Doctor is registered successfully !! Doctor id " + resp.data.id)
        toast.success("Doctor is registered successfully !! Doctor id " + resp.data.id);
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
                  <h4>Join 125000+ doctor</h4>
                  <label className="mb-1"> </label>
                  <Link to="/signup">Not a Doctor?</Link>
                  <hr />

                  <div><Link to="/login">Login</Link></div>
                  <hr />
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                      <label>Name</label>
                      <input
                        placeholder="Enter name"
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
                        placeholder="Enter Email"
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
                      <br/>
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

                        placeholder="Enter Password"
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
                  <img src="https://img.freepik.com/premium-vector/healthcare-workers-are-front-lines-public-health-system_1150-50284.jpg?w=740" width={500} height={350} />
                </div>

                <div></div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </section>
    </div>
  );
}

export default SignupD;