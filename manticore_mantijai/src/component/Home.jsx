import React from "react";

import "./Home.css";

function Home() {
    return (
        <div>
            <div className="mt-64 ml-24 float-left bg-gradient-to-r from-amber-200 ... py-12 px-12 pr-12 ">
                <h3 className="text-4xl text-transparent font-poppins font-bold bg-clip-text bg-gradient-to-r from-emerald-900 to-green-600 ">GET TO KNOW MANTICORE</h3>
                <br />
                <h2 className="text-5xl text-transparent font-poppins font-bold bg-clip-text bg-gradient-to-r from-emerald-900 to-green-600 ">LEGENDARY CREATURE</h2>
                <br />
                <p className="font-poppins">A magical beast and one of the wizarding world's most dangerous creatures.</p>
            </div>

            <img className="w-1/4  mt-56 float-right mr-16" src="../img/home.png" alt="homepicture" />
            
            <div className="clouds">
                <img src="../img/cloud1.png" className="cloud1" />
            </div>

        </div>



    );
}

export default Home;