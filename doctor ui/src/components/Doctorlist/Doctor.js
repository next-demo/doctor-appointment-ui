// import React, { useState } from "react";
// import "./Doctor.css";

// import { Link} from "react-router-dom";
// import axios from "axios";

// const Doctor = () => {
//   const [Doctors, setDoctors] = useState([]);

//   async function handleCheck() {
//     await function Doctors() {
//       const doctordata = axios
//         .get(`https://localhost:8080/api/doctor/getdoctor$`)
//         .then((response) => {
//           return response.data();
//         });

//       setDoctors(doctordata);
//     };
//   }

//   return (
//     <div className="container">
//       <h1 className="doc">Book your Doctor</h1>
//       <section>
//         <div className="row parent">
//           <div className="col-2">
//             <img
//               className="img"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XV6GtVsWdxLF2x-NSpFj_0HmCJVQg3Qxn6FHzZilYSO5bzjE5bNWO41jpaAOmhAc4kE&usqp=CAU"
//               alt=""
//             />
//           </div>
//           <div className="col-2">
//             <label className="time">
//               Dr Batra
//               <br></br>Dermatologist
//               <br></br>15+Experience
//             </label>
//           </div>

//           <div className="col-2">
//             <label className="rupees">Rs.1000 </label>
//           </div>
//           {/* <div className="col-2 mt-4">
//             <button class="viewAll">
//               <Link to="/userdetails">Book</Link>
//             </button>
//           </div> */}
//           <div className="col-2 mt-4">
//             <button class="viewAll">
//               <Link to="/doctorinfo"> Info</Link>
//             </button>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="row parent">
//           <div className="col-2">
//             <img
//               className="img"
//               src="https://img.etimg.com/thumb/msid-77365878,width-300,imgsize-51451,,resizemode-4,quality-100/dev.jpg"
//               alt=""
//             />
//           </div>
//           <div className="col-2">
//             <label className="time">
//               Dr. Pandey
//               <br></br>Neurologist
//               <br></br>25+Experience
//             </label>
//           </div>

//           <div className="col-2">
//             <label className="rupees">Rs.1500 </label>
//           </div>
//           {/* <div className="col-2 mt-4">
//             <button class="viewAll">
//               <Link to="/userdetails">Book</Link>
//             </button>
//           </div> */}
//           <div className="col-2 mt-4">
//             <button class="viewAll">
//               <Link to="/doctorinfo"> Info</Link>
//             </button>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="row parent">
//           <div className="col-2">
//             <img
//               className="img"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpW7hfXrLHOgpXd117hFmFNYfaKNUG4Wj5j2_Fv9iui4g5r8nXEcQ-mK5lA7Kl59sCTE&usqp=CAU"
//               alt=""
//             />
//           </div>
//           <div className="col-2">
//             <label className="time">
//               Dr.Manoj sharma
//               <br></br>Pulmonologist
//               <br></br>20+Experience
//             </label>
//           </div>

//           <div className="col-2">
//             <label className="rupees">Rs.700 </label>
//           </div>
//           {/* <div className="col-2 mt-4">
//             <button class="viewAll">
//               <Link to="/userdetails">Book</Link>
//             </button>
//           </div> */}
//           <div className="col-2 mt-4">
//             <button class="viewAll">
//               <Link to="/doctorinfo"> Info</Link>
//             </button>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="row parent">
//           <div className="col-2">
//             <img
//               className="img"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1qlbfhc4io-p7UXzeyNZXhBawna2Ggv9ef2nGizi8cFwcl0aXPEH-gpDpH1Vw9_qems&usqp=CAU"
//               alt=""
//             />
//           </div>
//           <div className="col-2">
//             <label className="time">
//               Dr.jhunjhunwala
//               <br></br>Ophthalmologist
//               <br></br>22+Experience
//             </label>
//           </div>

//           <div className="col-2">
//             <label className="rupees">Rs.1200 </label>
//           </div>
//           {/* <div className="col-2 mt-4">
//             <button class="viewAll">
//               <Link to="/userdetails">Book</Link>
//             </button>
//           </div> */}
//           <div className="col-2 mt-4">
//             <button class="viewAll">
//               <Link to="/doctorinfo"> Info</Link>
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Doctor;


import React, { useEffect, useState } from "react";
import "./Doctor.css";
import "../images/dr.jpg"

import { Link } from "react-router-dom";
import axios from "axios";

const Doctor = () => {
  const [Doctors, setDoctors] = useState([]);
  const cityname = localStorage.getItem("cityname");

  useEffect(() => {
    
      async function Doctors() {
        const doctordata = await axios
          .get(`http://localhost:8080/api/doctor/doctor_details`)
          .then((response) => {
            return setDoctors(response.data) ;
          });

      };
    
    Doctors();
   
  }, []);
  return Doctors.map((Doctor) => {
    return (
   
     <div className="container  ml-4">
        {/* <h1 className="doc">Book your Doctor in {Doctor.location}</h1> */}
        
        <section>
          <div className="row parent">
            <div className="col-3">
            <img
              className="img"
              src="https://img.etimg.com/thumb/msid-77365878,width-300,imgsize-51451,,resizemode-4,quality-100/dev.jpg"
              alt=""
            />
          </div>
            <div className="col-3">
              <label className="time">
                {Doctor.doctorname}
                <br></br>
                {Doctor.speciality}
                <br></br>
                {Doctor.experience}
              </label>
            </div>

            <div className="col-2">
              <label className="rupees">{Doctor.price} </label>
            </div>
            <div className="col-2 mt-4">
              <button className="viewAll">
                <Link to="/userdetails">Book</Link>
              </button>
            </div>
            {/* <div className="col-2 mt-4">
              <button className="viewAll">
                <Link to="/doctorinfo"> Info</Link>
              </button>
            </div> */}
          </div>
        </section>
        </div>
    );
  });
};

export default Doctor;