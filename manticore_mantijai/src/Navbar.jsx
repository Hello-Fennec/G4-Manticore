import React from "react";


const Nav = () => {   
    return (
        <div className="shadow-md w-full fixed top-0 left-0 bg-gradient-to-r from-yellow-600 to-lime-700">
            <div className="md:flex items-center justify-between py-4 md:px-10">
                <div className=" ml-8 font-bold text-2xl cursor-pointer flex items-center text-white">
                    MANTICORE <br/> Mantijai                   
                </div>
              <ul className="md:flex md:items-center md:max-xl mr-20">
                <li className="md:max-xl space-x-20  text-xl text-white ">
                <a href="#">HOME</a>
                <a href="#">APPEARANCE</a> 
                <a href="#">HISTORY</a>                
                <a href="#">QUIZ</a>
                <a href="#">ABOUT</a>
                </li>                
              </ul>
            </div>
        </div>



    );
}

export default Nav;