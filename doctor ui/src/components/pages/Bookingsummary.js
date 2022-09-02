import React from "react";
import "./booking_page.css";
import { Row } from "react-bootstrap";


function Bookingsummary(){
    return(
        <div class="m-5 booking-cnfrm">
            <div class="mb-4 text-center">
                <img src="https://i.gifer.com/origin/11/1184b4c0aa977f925dde58d2075772dd_w200.gif" class="success mt-2" ></img>
            </div>
            <div class="m-3">
                <div>
                    Dear DEEPU,
                </div>
                <div class="mt-2 mb-2 ">
                    Thank you for choosing practo.   
                </div>
                <div class="mt-2 mb-2 ">
                    Our medical expert is currently working on your request. We will call you to confirm your appointment.

                </div>
                <div class="mt-2 mb-2 ">
                    <b>Your request details for an appointment on .......</b>
                </div>

                <Row className="px-4 mt-5">
                    <div class="col-sm-2 ">
                    <img
                        src="https://t3.ftcdn.net/jpg/02/11/15/66/360_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg" class="logo"
                        
                    ></img>
                    </div>
                    <div class="col-sm-4">
                    <h5 class="font-weigh-light">Max Mulit Speciality center</h5>
                    <p class="mt-2">
                    <h6>Mulit-Speciality Hospital</h6>
                        
                        New Delhi
                        
                        <br></br>
                    </p>
                    
                    </div>
               
                    {/* <div class="col-sm-2">
                        <img
                        src="https://img.etimg.com/thumb/msid-77365878,width-300,imgsize-51451,,resizemode-4,quality-100/dev.jpg" class="logo"
                        
                    ></img>
                    </div> */}
                    {/* <div class="col-sm-4">
                        <h1 class="font-weigh-light">Dr. Pandey</h1>
                        <p class="mt-2">
                            MS- General Surgery, MBBS<br/>
                            General Surgeon, Laparsocpic Surgeon, Diabetic<br></br>
                            
                            <br></br>
                        </p>
                    </div> */}
                </Row>
                <div class="mb-4">
                    if you need any help with your appointment, please feel free to talk to our medical expert. Call us at 222256252.
                </div>
                <div class="mb-1">
                    <b>Regards,</b>
                    
                </div>
                <div class="pb-4">
                    Team Practo

                </div>
            </div>
        </div>
    )
}


export default Bookingsummary;


// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// // import axios from 'axios';
// import './Orders.css'

// const Orders = (props)=> {

//     const [order,setOrder] = useState(["1"]);
    
//     // const navigate = useNavigate();
//     // navigate('/booking', { state: { username: 'user', password: '696' } });
//     // const {state} = useLocation();
//     // const { price } = state;
//     // props.location.state
//     // props.location.user
//     // props.history.push('/booking', { price: price})
//     // const location = useLocation();
//     // console.log(location.state)
//     useEffect(()=>{
//         const handleOrders = async ()=> {
//             const orderurl = `http://localhost:8080/api/order/getorders/${props.location.user.username}`;
//             // const getorder = await axios.get(orderurl).then(response=>{
//             //     return (
//             //         setOrder(response.data)
//             //     )
//             // })

//             handleOrders();

//         }
//     },[])
//     // console.log(props.location.price.username)
//         return(
//             <div>
//         {
//                 order.map(o => {
//                     return(
//                         <div className="outermost">
//                             <div className="orderouter" style={{border:"red", backgroundColor:"pink", borderWidth:"25px"}}>
//                                 <div className="orderflex">
//                                     <div className="orderimage"><h1>Booked</h1></div>
//                                     <div className="orderdetails">
//                                         <div className="price"> 
//                                         <h3>`vehicle price`</h3>
//                                         {/* ${o.price} */}
//                                         </div>
//                                         <div className="orderdata">
//                                             <h3>`customername `</h3>
//                                             {/* ${o.customername} */}
//                                              <h6>`vehicle `</h6>
//                                              {/* ${o.carname} */}
//                                              <h6>`vehicle `</h6>
//                                              {/* ${o.bikrname} */}
//                                              <h6>`price `</h6>
//                                              {/* ${o.price} */}
//                                         </div>
//                                     </div>

//                                  </div>    
//                              </div>    
//                          </div>
//                     )
//                 })
//         }
//         </div>
//     )
// }
// export default Orders;