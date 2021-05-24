import React from "react";
import about from "../about.js"
import "../About.css";
function About(){
    return (
        <>
            <div id="about" className="container abt-txt" style={{padding:"20px"}}>
            <div className="row">
                <div className="about-head">
                    ABOUT ME
                </div>
                    
            </div>
                <div className="row">
                    <div className="col-lg-4 col-xs-12 mx-auto">
                    <div style={{textAlign:"center"}}>
                    <div className="box1">
                        <div className="box2">
                                <img className="img img-fluid" src="https://developer-diganta.github.io/me/intro2.jpg" alt="self"/>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-8 mx-auto my-auto">
                        <div className="about-text">
                            {about}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;