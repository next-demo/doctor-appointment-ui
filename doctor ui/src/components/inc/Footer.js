import React from "react";
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">

                <div className="col-md-3">
                    <h6>For patient</h6>
                    <hr/>
                    <p className="text-white">
                    <div><Link to="/">Search for doctors</Link></div>
                    <div><Link to="/">Search for clinics</Link></div>
                    <div><Link to="/">Search for hospitals</Link></div>
                    <div><Link to="/">Full Body Checkups</Link></div>
                    </p>
                </div>

                <div className="col-md-3">
                    <h6>For Doctors</h6>
                    <hr/>
                    <p className="text-white">
                    <div><Link to="/">Search for doctors</Link></div>
                    <div><Link to="/">Search for clinics</Link></div>
                    <div><Link to="/">Search for hospitals</Link></div>
                    <div><Link to="/">Full Body Checkups</Link></div>
                    </p>
                </div>

                <div className="col-md-3">
                    <h6>More</h6>
                    <hr/>
                    <p className="text-white">
                    <div><Link to="/">Help</Link></div>
                    <div><Link to="/">Terms & Conditions</Link></div>
                    <div><Link to="/">Privacy Policy</Link></div>
                    
                    </p>
                </div>

                <div className="col-md-3">
                    <h6>Practo</h6>
                    <hr/>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/">Contact</Link></div>
                    <div><Link to="/">Blog</Link></div>
                </div>

                <div className="col-md-3">
                    <h6>Contact Information</h6>
                    <hr/>
                    <div><p className="text-white mb-1"> Hyderabad , IN</p></div>
                    <div><p className="text-white mb-1"> 9891141449</p></div>
                    <div><p className="text-white mb-1"> 864186611</p></div>
                    <div><p className="text-white mb-1"> email@domain.com</p></div>
                </div>

                </div>
                <br></br>
                <hr/>
                <div>
                    <center>
                    Copyright © 2022, Practo. All rights reserved.

                    </center>
                
                </div>
                <hr/>

            </div>
        </section>

    )
}

export default Footer;