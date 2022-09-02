import React from 'react';
import {Link} from "react-router-dom";
import "./Hospital.css"


const Hospital = () => {
  return (
    <div className="container">
    <h1 className='doc'>Choose Your Hospital</h1>
    <section>
    <div className="row parent">        
    <div className="col-2">
          <img className="img" src="https://t3.ftcdn.net/jpg/02/11/15/66/360_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg" alt=""/>
          
        </div>
      <div className="col-2">
        <label className="time">
          <h6>Max Hospital</h6>
        <br></br>Multispecialist
        <br></br>since 1947
        </label>          
      </div>
     
      
      <div className="col-2">
        <label className='rupees'>Rs.5000 </label>
      </div>
      <div className="col-2 mt-4">
        <button  class="viewAll">
          <Link to="/userdetails">Book</Link></button>
      </div>
      <div className="col-2 mt-4">
        <button  class="viewAll">
          <Link to="/hospitalinfo">Info</Link></button>
      </div>
    </div>
    </section>
    <section>
    <div className="row parent">        
    <div className="col-2">
          <img className="img" src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png" alt=""/>
          
        </div>
      <div className="col-2">
        <label className="time"> 
        <h6>SCP Hospital</h6> 
               
        </label>          
      </div>
     
      
      <div className="col-2">
        <label className='rupees'>Rs.1500 </label>
      </div>
      <div className="col-2 mt-4">
        <button  class="viewAll">
          <Link to="/userdetails">Book</Link></button>
      </div>
      <div className="col-2 mt-4">
        <button  class="viewAll">
          <Link to="/hospitalinfo">info</Link></button>
      </div>
    </div>
    </section>
  </div>
  )
}

export default Hospital;




