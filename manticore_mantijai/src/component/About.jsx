import React from "react";
import './About.css';

import { JackInTheBox} from "react-awesome-reveal";

function About() {
    return(

        <div id="AboutUs">
            <JackInTheBox>
            <div id="AboutTopic">
                <img src="../img/AboutUs.png" id="AbouUsTopic"/>                
            </div>
            </JackInTheBox>
            

            <div id="FrontEnd">
                <img src="../img/FronEnd.png" />
            </div>

            <div id="DesignInfra">
                 <img src="../img/DesignInfra.png"  />
            </div>

            <div id="Footer">
                <img src="../img/Footer.png" />
            </div>

        </div>

    );
}

export default About;