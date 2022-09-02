
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./Login.css"
// // import { FormValidation } from './FormValidation';

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       FormValidation: { email: "", password: "" },
//       validateEmail: false,
//       validatePassword: false,
//       validateForm: false,
//     };
//   }

//   validateUserInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState({ [name]: value }, () => {
//       this.validateInputField(name, value);
//     });
//   };

//   validateInputField(inputField, value) {
//     let inputFieldErrors = this.state.FormValidation;
//     let validateEmail = this.state.validateEmail;
//     let validatePassword = this.state.validatePassword;

//     switch (inputField) {
//       case "email":
//         validateEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         inputFieldErrors.email = validateEmail ? "" : " is invalid!";
//         break;
//       case "password":
//         validatePassword = value.length >= 6;
//         inputFieldErrors.password = validatePassword ? "" : " is too short!";
//         break;
//       default:
//         break;
//     }
//     this.setState(
//       {
//         FormValidation: inputFieldErrors,
//         validateEmail: validateEmail,
//         validatePassword: validatePassword,
//       },
//       this.validateForms
//     );
//   }

//   validateForms() {
//     this.setState({
//       validateForm: this.state.validateEmail && this.state.validatePassword,
//     });
//   }

//   cmdSubmit(event) {
//     alert("You have entered the email and passwor successfully.");
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <div className="container">
//         <div className="col-md-6 mx-auto text-center">
//           <div className="header-title">
//             <h1 className="wv-heading--title">Login</h1>
//             <hr/>
            
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6 mx-auto">
//             <div className="myform form ">
//               <form className="signupForm" onSubmit={this.cmdSubmit}>
//                 {/* <h5>Login </h5> */}
//                 <div className="panel panel-default">
//                   <FormValidation FormValidation={this.state.FormValidation} />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email ID</label>
//                   <input
//                     type="email"
//                     required
//                     className="form-control"
//                     name="email"
//                     placeholder="Email"
//                     value={this.state.email}
//                     onChange={this.validateUserInput}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     name="password"
//                     placeholder="Password"
//                     value={this.state.password}
//                     onChange={this.validateUserInput}
//                   />
//                 </div>
//                 <br />
//                 <div className="text-center">
//                   <button
//                     type="submit"
//                     className="btn btn-grey send-button ms-auto"
//                     disabled={!this.state.validateForm}
//                   >
//                     <Link to="/">Login</Link>
//                   </button>
//                 </div>
//                 <div className="col-md-12 ">
//                   <div className="login-or">
//                     <hr className="hr-or" />
                    
//                   </div>
//                 </div>
               
                
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Login;

// export const FormValidation = ({ FormValidation }) => (
//   <div className="FormValidation">
//     {Object.keys(FormValidation).map((fieldName, i) => {
//       if (FormValidation[fieldName].length > 0) {
//         return (
//           <p class="alert alert-danger" key={i}>
//             {fieldName} {FormValidation[fieldName]}
//           </p>
//         );
//       } else {
//         return "";
//       }
//     })}
//   </div>
// );


import React, { Component } from "react";
import "./Login.css"
import connection from "../../connection";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
// import { doLogin } from "../../auth";

// import { FormValidation } from './FormValidation';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      FormValidation: { email: "", password: "" },
      validateEmail: false,
      validatePassword: false,
      validateForm: false,
    };
  }

  validateUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateInputField(name, value);
    });
    

  };

  validateInputField(inputField, value) {
    let inputFieldErrors = this.state.FormValidation;
    let validateEmail = this.state.validateEmail;
    let validatePassword = this.state.validatePassword;

    switch (inputField) {
      case "email":
        validateEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        inputFieldErrors.email = validateEmail ? "" : " is invalid!";
        break;
      case "password":
        validatePassword = value.length >= 6;
        inputFieldErrors.password = validatePassword ? "" : " is too short!";
        break;
      default:
        break;
    }
    this.setState(
      {
        FormValidation: inputFieldErrors,
        validateEmail: validateEmail,
        validatePassword: validatePassword,
      },
      this.validateForms
    );
  }

  validateForms() {
    this.setState({
      validateForm: this.state.validateEmail && this.state.validatePassword,
    });
  }

  cmdSubmit= (event) => {
    // alert("You have entered the email and passwor successfully.");
    event.preventDefault();
    console.log(this.state.password)
    const details = {
      username:this.state.email,
      password:this.state.password
    }
    console.log(details)
    connection.post("/api/v1/auth/login" , details)
    .then((resp) => {
      console.log(resp.data)
      const user =({
        name:resp.data.customer.name,
        email:resp.data.customer.email,
        contactNo:resp.data.customer.mobileno,
        ownerId:resp.data.customer.id,
        type:resp.data.customer.type,
        token:resp.data.token,
      })
      //save the data to localstorage
      console.log(user);
      localStorage.setItem("data", JSON.stringify(user))
      console.log("login detail is saved to localstorage")

      // doLogin(user, () => {
      //   // this.props.navigate("/user/dashboard");
      // })

      //alert("Login Success");
      toast.success("Login Successfully")
      
    }).catch(error => {
      console.log(error)
      if (error.response.status == 400 || error.response.status == 404) {
        //alert(error.response.data.message)
        toast.error(error.response.data.message)
      } else {
        //alert(error.response.data.message)
        toast.error(error.response.data.message)
      }

    })


  }
  render() {
    return (
      
      <div className="container">
        <div className="col-md-6 mx-auto text-center">
          <div className="header-title">
            <div>
            
            </div>
            <h1 className="wv-heading--title">Login</h1>
            <hr/>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="myform form ">
              <form className="signupForm" onSubmit={this.cmdSubmit}>
                
                <div className="panel panel-default">
                  <FormValidation FormValidation={this.state.FormValidation} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email ID</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.validateUserInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.validateUserInput}
                  />
                </div>
                <br />
                <div className="text-center">
                  <button
                    type="submit"
                    className=" btn-primary send-button"
                    disabled={!this.state.validateForm}
                  >
                    Login
                  </button>
                </div>
                <div className="col-md-12 ">
                  <div className="login-or">
                    <hr className="hr-or" />
                    
                  </div>
                </div>
              </form>
              
            </div>
            <ToastContainer />
            
            
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

export const FormValidation = ({ FormValidation }) => (
  <div className="FormValidation">
    {Object.keys(FormValidation).map((fieldName, i) => {
      if (FormValidation[fieldName].length > 0) {
        return (
          <p class="alert alert-danger" key={i}>
            {fieldName} {FormValidation[fieldName]}
          </p>
        );
      } else {
        return "";
      }
    })}
  </div>
);
