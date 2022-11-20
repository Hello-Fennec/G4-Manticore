import React from "react";

const Nav = () => {   
    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between py-4 md:px-10 md:px-7">
                <div className=" ml-8 font-bold text-2xl cursor-pointer flex items-center text-white">
                    MANTICORE <br/> Mantijai                   
                </div>
              <ul className="md:flex md:items-center md:max-xl mr-20">
                <li className="md:max-xl space-x-20  text-xl text-white ">
                <a href="#">HOME</a>
                <a>HISTORY</a>
                <a>DRAWING</a>
                <a>GALLERY ART</a>
                <a>QUIZ</a>
                <a>ABOUT</a>
                </li>                
              </ul>
            </div>
        </div>



    );
}

export default Nav;