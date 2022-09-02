import React,{useState} from "react";
import {Link} from 'react-router-dom';

const Contactus = () =>{

  const [user,setUser] = useState({
     name:"",email:"",phone:"",message:""
  });

  let name, value;
  const handleInputs= (event)=>{
      console.log(event);
      name = event.target.name;
      value = event.target.value;

      setUser({...user,[name]:value});
  } 




  return (
    <div>     
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 ">
                  <h6>Contact Form</h6>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Full Name</label>
                    <input
                       type="text"
                       className="form-control"
                       name="name" id="name" 
                       autoComplete="off"
                        value={user.name} 
                        onChange={handleInputs}  
                        placeholder="Your Name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Phone Number</label>
                    <input
                       type="number"
                       className="form-control"
                       name="phone" id="phone" 
                       autoComplete="off"
                        value={user.phone} 
                        onChange={handleInputs}  
                        placeholder="Your Phone"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email Address</label>
                    <input
                       type="email"
                       className="form-control"
                       name="email" id="email" 
                       autoComplete="off"
                        value={user.email} 
                        onChange={handleInputs}  
                        placeholder="Your Email"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Message</label>
                    <textarea
                      row="3"
                      name="message" id="message" 
                      className="form-control"
                      placeholder="Type Your Message...."
                      value={user.message}
                      onChange={handleInputs}
                    ></textarea>
                  </div>
                  <div className="form-group py-3">
                    <button
                      type="button"
                  className="btn btn-light ms-auto w-100 "
                    >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                       Send Message
                    </Link> 
                    </button>
                  </div>
                </div>
                <div className="col-md-6 border-start">
                  <h5 className="main-heading"> Addres Information</h5>
                  <div className="underline"></div>
                  <p>patncheru , Hyderabad , India</p>
                  <p>Phone :+ 91 898641646</p>
                  <p>Email: Deepu@gmail.com</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
