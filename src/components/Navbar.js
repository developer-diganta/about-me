    import React from "react";
    import {BrowserRouter as Router, Link} from "react-router-dom";
    import{Navbar,Nav} from "react-bootstrap";
    import "../Navbar.css";



    function NavBar(){  
        // const [navBackground,setNavBackground]=React.useState("bg-light");
        // const changeNavBackground=()=>{
        //     setNavBackground("bg-dark");
        // }
        return (
        <Router>
        <Navbar className="nav-bg" expand="lg">
        <div className="container">
        <div>
            <Navbar.Brand href="#home">
            <span className="navbar-text">
                <img
                    src="https://developer-diganta.github.io/me/CHR.jpg"
                    width="50px"
                    // className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <span style={{color:"#66FCF1"}}>DKB</span>    
                </span>
                </Navbar.Brand> 
                {/* <Navbar.Brand href="#home" style={{color:"#66FCF1"}} ></Navbar.Brand> */}
            </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
        <Nav.Link href="#home"><span className="navbar-txt navbar-txt-bold">Home</span></Nav.Link>
        <Nav.Link href="#features"><span className="navbar-txt">Features</span></Nav.Link>
        <Nav.Link href="#pricing"><span className="navbar-txt">Features</span></Nav.Link>
        </Nav>
            </Navbar.Collapse>
        </div>
        </Navbar>
        </Router>
            );
    };

    export default NavBar;