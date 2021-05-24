import React,{useState,useEffect} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import "../Header.css";


function Header(){
    return <div className="header">
        <div className="header-text">
            <div className="hello-txt">HELLO, I'M</div>
            <div className="name-txt"><nobr>DIGANTA KR BANIK</nobr></div>
            <div className="detail-text">, a web developer, devops enthusiast and a competitive programmer...</div>
             <Router>
             <a href="#about"><div><i className="fas fa-angle-double-down angle-color"></i></div></a>
             </Router>
        </div>
   
    </div>;
}

export default Header;