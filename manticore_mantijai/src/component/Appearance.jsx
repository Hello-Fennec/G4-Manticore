import React from "react";

import "./Appearance.css";

function Appear() {
    return (

        <div className="Appearance" id="Appear">
            <div className="AppearTopic">
                <h2 className="font-bold  font-inter text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-700" >MANTICORE</h2> <br />
                <h4 className="font-extralight font-inter text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-700" id="appear2"> Appearance & Characteristics </h4>
            </div>
            <div className="AppearImage">
                <img src="../img/appearance.png"  />
            </div>
        </div>

    );
}

export default Appear;