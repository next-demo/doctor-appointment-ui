
import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import VMC from './Vmc';
import Service1 from '../images/img.jpg';
import Service2 from '../images/img1.jpg';
import Service3 from '../images/img2.jpg';
import Service4 from '../images/img3.jpg';




const Countries = [
    { label: "Hyderabad", value: 1 },
    { label: "Mumbai", value:2 },
    { label: "Pune", value: 3 },
    { label: "Banglore", value: 4 },
    { label: "Delhi", value: 5 },   
  ];

  function Home(){
    return(

        <div>          

            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-4 ms-auto">
                        <Select options={Countries} />
            </div>
            <div className="col-md-4"></div>
            <div class="text-center">
                <button class="btn btn-light mt-2 mb-2 ms-auto">
                    <Link to="/hospital" style={{ textDecoration: 'none' }}>
                       Search Hospital
                    </Link>               
                </button>
                <button class="btn btn-light mt-2 mb-2 ms-auto">
                    <Link to="/doctor" style={{ textDecoration: 'none' }}>
                       Search Doctor
                    </Link>
                </button>
            </div>
          </div>
        </div>
            
            <Slider/>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Practo</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                we are include doctors' services, inpatient and outpatient hospital care, prescription drug coverage, pregnancy and childbirth, mental health services, and more. Some plans cover more services. Plans must offer dental coverage for children. Dental benefits for adults are optional.

                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Know More</Link>

                        </div>
                    </div>
                </div>
            </section>
            <VMC/>


            <section className="section  border-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 text-center">
                    <h3 className="main-heading">Our Service</h3>
                    <div className="underline mx-auto"></div>
                </div>
                <div className="col-md-3 " >
                    <div className="card shadow">
                    <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                        <div className="card-body">
                            <h5>Medicines</h5>
                            <div className="underline"></div>
                            <p>
                                Best Medicines to our caring person.
                            </p>
                            <Link to="/services" className="btn btn-link"> Know More</Link>
                        
                        </div>
                    </div>
                </div>
                <div className="col-md-3 " >
                    <div className="card shadow">
                    <img src={Service2} className="w-100 border-bottom" alt="Services"/>
                        <div className="card-body">
                            <h5>Lab Tests</h5>
                            <div className="underline"></div>
                            <p>
                                Got Lab test near you an 
                            </p>
                            <Link to="/services" className="btn btn-link"> Know More</Link>
                        
                        </div>
                    </div>
                </div>
               
                <div className="col-md-3 " >
                    <div className="card shadow">
                    <img src={Service3} className="w-100 border-bottom" alt="Services"/>
                        <div className="card-body">
                            <h5>Surgeries</h5>
                            <div className="underline"></div>
                            <p>
                               Providing best Surgeries
                            </p>
                            <Link to="/services" className="btn btn-link"> Know More</Link>
                        
                        </div>
                    </div>
                </div>
                <div className="col-md-3 " >
                    <div className="card shadow">
                    <img src={Service4} className="w-100 border-bottom" alt="Services"/>
                        <div className="card-body">
                            <h5>Dentist</h5>
                            <div className="underline"></div>
                            <p>
                                Got Lab test near you an 
                            </p>
                            <Link to="/services" className="btn btn-link"> Know More</Link>
                        
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
        
    </section>

      
        </div>
       
    )
}

export default Home;