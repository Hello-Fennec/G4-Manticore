import React from "react";
import { Anchor } from 'antd';

const { Link } = Anchor;


const Nav = () => {
    return (

        <nav class="shadow-md w-full fixed top-0 left-0 bg-gradient-to-r from-yellow-600 to-lime-700">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#" class="flex items-center">                    
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-center text-white font-itim">MANTICORE <br /> Mantijai</span>
                </a>                
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-10 mt-10  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-xl font-inter text-white">
                        <li>
                            <Link href="#boxhome" title="HOME" />
                        </li>
                        <li>
                            <Link href="#Appear" title="APPEARANCE" />
                        </li>
                        <li>
                            <Link href="#History" title="HISTORY" />
                        </li>
                        <li>
                            <Link href="#QuizComponent" title="QUIZ" />
                        </li>
                        <li>
                            <Link href="#AboutUs" title="ABOUT" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>





    );
}

export default Nav;