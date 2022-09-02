// import React from "react";
// import { Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

// function Navbar() {

//   return (
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
//       <div class="container-fluid">
//         {/* <a class="" href="#">Navbar</a> */}
//         <Link to="/" class="navbar-brand">
//           {" "}
//           <h1 className="text-white">Practo</h1>
//         </Link>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav  ms-auto ml-4 mt-2">
//             <li class="nav-item">
//               {/* <a  aria-current="page" href="#">Home</a> */}
//               {/* <Link to="/" class="nav-link active">
//                 {" "}
//                 Home
//               </Link> */}
//             </li>
//             <li class="nav-item m">
//               {/* <a class="nav-link" href="#">Link</a> */}
//               <Link to="/about" class="nav-link active">
//                 {" "}
//                 <h5>About Us</h5>
//               </Link>
//             </li>
//             <li class="nav-item">
//               {/* <a class="nav-link" href="#">Link</a> */}
//               <Link to="/contact" class="nav-link active">
//                 {" "}
//                 <h5>Contact Us</h5>
//               </Link>
//             </li>
//           </ul>
//             <DropdownButton className=" ms-4 mb-3" id="dropdown-basic-button " title="Login/Signup">
//               <Dropdown.Item href="/login">User Login</Dropdown.Item>
//                 <Dropdown.Item href="/signup">User Signup</Dropdown.Item>
//               <Dropdown.Item href="/adminhome">Admin</Dropdown.Item>
//             </DropdownButton>

//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { useEffect } from "react";
import { useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../../auth";

const Navbar1= () => {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [login, setLogin] = useState(false);
  const [patient, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  const logout = () => {
    doLogout(() => {
      //logged out
      setLogin(false);
      navigate("/");
    });
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="" className="px-5">
      <NavbarBrand href="/">Practo</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            
            <NavItem>
            <NavItem >
                <NavLink href="/about">About Us</NavLink>
            </NavItem>
            </NavItem>
            <NavItem>
                <NavLink href="/contact">Contact Us</NavLink>
            </NavItem>

            
          </Nav>

          <Nav navbar>
            {login && (
              <>
              
                <NavItem>
                  <NavLink href="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/userdashboard">{patient.name}</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink onClick={logout}>Logout</NavLink>
                </NavItem>
              </>
            )}

            {!login && (
              <>

                <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Login/SignUp
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={ReactLink} to="/login">
                  User Login
                </DropdownItem>
                <DropdownItem tag={ReactLink} to="/Signup">
                  User SignUp
                </DropdownItem>
                <DropdownItem tag={ReactLink} to="/adminhome">
                  Admin
                </DropdownItem>

                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar1;
